#!/bin/bash
set -e  # stop on first error

chmod +x node_modules/.bin/vite
npx vite build
