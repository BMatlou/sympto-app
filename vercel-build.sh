#!/bin/bash
set -e  # stop on any error

echo "Cleaning previous build..."
rm -rf dist

echo "Setting executable permissions for all node binaries..."
chmod -R +x node_modules/.bin

echo "Running Vite build..."
npx vite build

echo "Build completed successfully!"
