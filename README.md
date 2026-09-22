# CHECKORA

> **From Rules → Risk → Action**  
> *An AI-powered compliance assistant that compares regulations with real organizational evidence, identifies gaps, prioritizes risks, and recommends corrective actions.*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 🎯 Overview

Compliance management is often bogged down in 50-page regulatory PDFs, fragmented internal spreadsheets, and manual checklist fatigue. 

**Checkora** solves this by automating the comparison between statutory safety rules and organizational evidence:

```
RULE  ───>  EVIDENCE  ───>  GAP  ───>  RISK  ───>  ACTION
```

The system ingests regulatory standards, cross-references company inspection reports and visual photos, detects non-conformities, scores risk severity, and generates an actionable remediation plan.

---

## ✨ Core Features

### 1. 📄 Multi-Document & Evidence Ingestion
- **Rules / Regulation PDF**: Ingests statutory requirements and extracts mandatory clauses.
- **Company Report PDF**: Parses internal audits, inspection logs, and maintenance records.
- **Visual Photographic Evidence**: Supports factory floor photos for computer vision validation.
- **⚡ 1-Click Demo Documents**: Pre-loaded with *Industrial Workplace Safety Standard 2026* and *Apex Manufacturing Q1 Inspection Report*.

### 2. 🔍 Automated Gap & Traceability Analysis
- Compares each statutory clause against documented organizational evidence.
- Explains:
  - **The Requirement**: Exact statutory language and clause number.
  - **Evidence Found**: What was (or wasn't) documented in internal reports.
  - **Why It's a Problem**: The operational or legal hazard created by the gap.
  - **Recommended Action**: Clear, vendor-ready corrective steps.
- Interactive **Mark as Resolved** demo toggle to simulate real-time remediation.

### 3. 📊 Executive Compliance Dashboard
- **Total Compliance Score** (e.g., 67% Requirements Satisfied).
- **Classification Breakdown**: Compliant (4), Partial (4), Missing (4).
- **Risk Severity Summary**: High Risk (3), Medium Risk (3), Low Risk (6).
- **Priority Issues**: Ranked list of immediate life-safety liabilities.

### 4. 💬 "Ask Checkora" AI Chat
- Interactive conversational compliance assistant.
- One-click suggested prompts:
  - *"What are our high-risk issues?"*
  - *"What should we fix first?"*
  - *"Why is emergency exit signage high risk?"*
  - *"What requirements are missing?"*
  - *"Give me a summary."*
- Contextual natural language responses with statutory citations and compliance disclaimers.

### 5. 📸 AI Visual Evidence Scanner
- Computer vision detection on uploaded factory photos.
- Object detected: **🧯 Fire Extinguisher (94% confidence)** with bounding box overlay and verification status.

### 6. 📑 Printable Executive Compliance Report
- Clean, print-ready executive summary.
- Breakdown of scores, risk profile, critical liabilities, and a 3-phase corrective action plan.
- Single-click **Print / Save PDF** support (`window.print()` with styled `@media print` layout).

---

## 📁 Included Demo Documents

The repository includes two real, formatted sample PDFs in the `demo_documents/` and `public/demo_documents/` directories:

| Document | File Name | Description |
| :--- | :--- | :--- |
| **Statutory Standard** | `Industrial_Workplace_Safety_Standard_2026.pdf` | Official safety standard containing all 12 mandatory clauses (Sections 1.3.0 to 8.2.0). |
| **Company Audit** | `Apex_Manufacturing_Internal_Inspection_Report_Q1_2026.pdf` | Internal plant audit detailing real factory findings, expired tags, and documentation gaps. |

Both files can be uploaded via the UI or downloaded directly through the Upload screen.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or newer)
- npm (version 9 or newer)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/checkora.git
   cd checkora
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Or run the production preview**:
   ```bash
   npm run build
   npm run preview
   ```

### ⚡ Quick Windows Launcher
On Windows, you can simply double-click **`run_demo.bat`** in the root folder to start the application and automatically open your browser.

---

## 🎬 30-Second Judge Demo Flow

To demonstrate the full capability in under 60 seconds:

1. **Landing Page**: View the 4-step pipeline and click **"Start Compliance Check"**.
2. **Upload Documents**: Click **"Use Demo Documents"** to populate the test files, then click **"Analyze with Checkora"**.
3. **Analysis Screen**: Watch the 7-step analysis checklist complete sequentially.
4. **Dashboard**: Highlight the **67% Compliance Score**, the 3 status cards, and the **Risk Summary**.
5. **Gap Deep-Dive**: Click **"Emergency Exit Signage"** to showcase the full *Rule → Evidence → Gap → Risk → Action* pipeline. Click **"Mark as Resolved"** to show real-time score updates.
6. **Ask Checkora**: Navigate to **Ask Checkora** and click *"What should we fix first?"* to demonstrate AI reasoning.
7. **Visual Evidence**: Open **Visual Evidence** and click **"Use Demo Image"** to showcase AI camera detection.
8. **Compliance Report**: Click **"Generate Compliance Report"** to show the executive report with print-to-PDF capability.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite 6, Tailwind CSS 3
- **Icons**: Lucide React
- **Document Generation**: pdf-lib
- **Architecture**: Decoupled component design with modular AI reasoning engine, ready for Google Gemini API integration.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE) - you are free to use, modify, and distribute it.
