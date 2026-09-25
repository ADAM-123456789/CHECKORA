"""
Checkora FastAPI Application
Provides RESTful endpoints for RAG PDF compliance extraction,
vector semantic search, Gemini gap evaluation, and interactive compliance chat.
"""

import os
import sys
from pathlib import Path
from typing import Optional, List, Dict, Any

from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

# Add backend directory to sys.path
backend_dir = Path(__file__).resolve().parent
project_root = backend_dir.parent
sys.path.insert(0, str(backend_dir))

# Load .env file
load_dotenv(backend_dir / ".env")

from rag_engine import run_full_rag_analysis, answer_rag_chat

app = FastAPI(
    title="Checkora AI Compliance API",
    description="Vector DB + RAG Compliance Engine for statutory regulations vs internal evidence",
    version="1.0.0"
)

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request Models
class ChatRequest(BaseModel):
    message: str
    requirements: Optional[List[Dict[str, Any]]] = None
    companyInfo: Optional[Dict[str, Any]] = None


@app.get("/api/health")
def health_check():
    """Health status and API readiness check."""
    api_key = os.getenv("GEMINI_API_KEY", "").strip()
    return {
        "status": "healthy",
        "service": "Checkora Compliance RAG API",
        "geminiConfigured": bool(api_key),
        "version": "1.0.0"
    }


@app.post("/api/analyze-demo")
def analyze_demo():
    """
    Runs full RAG compliance analysis on the built-in demo documents:
    - Industrial Workplace Safety Standard 2026 (Statutory Rules)
    - Apex Manufacturing Internal Inspection Report Q1 2026 (Audit Evidence)
    """
    demo_dir = project_root / "demo_documents"
    reg_path = demo_dir / "Industrial_Workplace_Safety_Standard_2026.pdf"
    audit_path = demo_dir / "Apex_Manufacturing_Internal_Inspection_Report_Q1_2026.pdf"

    if not reg_path.exists() or not audit_path.exists():
        # Check public/demo_documents
        demo_dir = project_root / "public" / "demo_documents"
        reg_path = demo_dir / "Industrial_Workplace_Safety_Standard_2026.pdf"
        audit_path = demo_dir / "Apex_Manufacturing_Internal_Inspection_Report_Q1_2026.pdf"

    if not reg_path.exists() or not audit_path.exists():
        raise HTTPException(
            status_code=404,
            detail=f"Demo PDFs not found at {demo_dir}. Run 'node generate_pdfs.js' to create them."
        )

    try:
        results = run_full_rag_analysis(
            regulations_pdf_source=str(reg_path),
            audit_pdf_source=str(audit_path),
            gemini_api_key=os.getenv("GEMINI_API_KEY"),
            rules_filename="Industrial_Workplace_Safety_Standard_2026.pdf",
            audit_filename="Apex_Manufacturing_Internal_Inspection_Report_Q1_2026.pdf"
        )
        return {
            "success": True,
            "mode": "demo",
            "data": results
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Analysis failed: {str(e)}")


@app.post("/api/analyze")
async def analyze_documents(
    rules_file: UploadFile = File(...),
    report_file: UploadFile = File(...),
    image_file: Optional[UploadFile] = File(None)
):
    """
    Ingests uploaded statutory PDF and internal audit PDF,
    extracts clauses, computes vector embeddings, matches evidence,
    and returns full gap & risk analysis.
    """
    try:
        import io
        rules_bytes = await rules_file.read()
        report_bytes = await report_file.read()

        rules_stream = io.BytesIO(rules_bytes)
        report_stream = io.BytesIO(report_bytes)

        results = run_full_rag_analysis(
            regulations_pdf_source=rules_stream,
            audit_pdf_source=report_stream,
            gemini_api_key=os.getenv("GEMINI_API_KEY"),
            rules_filename=rules_file.filename or "",
            audit_filename=report_file.filename or ""
        )

        return {
            "success": True,
            "mode": "custom_upload",
            "data": results
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Upload analysis failed: {str(e)}")


@app.post("/api/chat")
def chat_compliance(request: ChatRequest):
    """
    RAG Compliance conversational assistant endpoint.
    """
    try:
        reply = answer_rag_chat(
            question=request.message,
            active_requirements=request.requirements or [],
            company_info=request.companyInfo or {},
            gemini_api_key=os.getenv("GEMINI_API_KEY")
        )
        return {"reply": reply}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Chat error: {str(e)}")


if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    host = os.getenv("HOST", "0.0.0.0")
    uvicorn.run("main:app", host=host, port=port, reload=True)
