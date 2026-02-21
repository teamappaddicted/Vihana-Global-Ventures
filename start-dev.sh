#!/bin/bash
# Vihana Global Ventures - Website Development Server
# Quick Start Script for Linux/Mac

echo "======================================"
echo "Vihana Global Ventures Website"
echo "Development Server Startup"
echo "======================================"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

echo ""
echo "Starting development server..."
echo ""
echo "Server will be available at: http://localhost:3000"
echo "Press Ctrl+C to stop the server."
echo ""

# Start the development server
npm run dev
