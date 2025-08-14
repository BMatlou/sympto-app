#!/bin/bash
set -e

# Ensure vite binary has execution permissions
chmod +x node_modules/.bin/vite

# Build the project
npx vite build
