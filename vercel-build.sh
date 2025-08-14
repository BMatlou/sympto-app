#!/bin/bash
set -e                 # Stop on any error
echo "Setting executable permission for Vite..."
chmod +x ./node_modules/.bin/vite
echo "Running Vite build..."
npx vite build
