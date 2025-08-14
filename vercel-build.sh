#!/bin/bash
set -e

# Fix vite permissions
chmod +x node_modules/.bin/vite

# Build
npx vite build
