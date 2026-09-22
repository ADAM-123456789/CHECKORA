@echo off
title CHECKORA Demo Runner
echo ===================================================
echo   CHECKORA - AI Compliance Assistant
echo   From Rules -^> Risk -^> Action
echo ===================================================
echo.
set "PATH=C:\Program Files\nodejs;%PATH%"
echo Starting Checkora on http://localhost:3000 ...
start http://localhost:3000
call npm.cmd run preview
pause
