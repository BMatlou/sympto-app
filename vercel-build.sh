#!/bin/bash
set -e  # Stop on any error

echo "Cleaning previous build..."
rm -rf dist

echo "Setting executable permissions for all node binaries..."
chmod +x node_modules/.bin/* || true

echo "Running Vite build..."
npx vite build

echo "Build completed successfully!"
