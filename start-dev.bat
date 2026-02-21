@echo off
REM Vihana Global Ventures - Website Development Server
REM Quick Start Script for Windows

echo.
echo ======================================
echo Vihana Global Ventures Website
echo Development Server Startup
echo ======================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)

echo.
echo Starting development server...
echo.
echo Server will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server.
echo.

REM Start the development server
call npm run dev
