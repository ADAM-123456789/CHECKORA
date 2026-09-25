@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"
start "Checkora RAG Backend" cmd /k "cd /d %~dp0\backend && python -m uvicorn main:app --host 0.0.0.0 --port 8000"
timeout /t 2 /nobreak >nul
call npm.cmd run dev
