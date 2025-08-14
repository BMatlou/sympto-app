#!/bin/bash
set -e  # Stop immediately if any command fails

echo "Cleaning previous build..."
rm -rf dist

echo "Setting executable permissions for node binaries..."
chmod +x node_modules/.bin/vite

echo "Running Vite build..."
npx vite build

echo "Build completed successfully!"
