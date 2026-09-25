@echo off
title CHECKORA Full-Stack Runner
echo ===================================================
echo   CHECKORA - AI Compliance Assistant
echo   RAG + Vector DB + React Dashboard
echo ===================================================
echo.

set "PATH=C:\Program Files\nodejs;%PATH%"

echo [1/2] Starting Python FastAPI RAG Backend on port 8000...
start "Checkora RAG Backend" cmd /k "cd /d %~dp0\backend && python -m uvicorn main:app --host 0.0.0.0 --port 8000"

echo [2/2] Waiting 2 seconds for backend initialization...
timeout /t 2 /nobreak >nul

echo Starting Checkora React Dashboard on http://localhost:3000 ...
start http://localhost:3000

call npm.cmd run dev
pause
