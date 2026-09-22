@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"
echo Node version:
node.exe -v
echo NPM version:
call npm.cmd -v
echo Installing packages...
call npm.cmd install
