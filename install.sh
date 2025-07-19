#!/bin/bash
set -e

if [ ! -f package.json ]; then
  echo "[ERROR] package.json not found. Are you in the correct directory?"
  exit 1
fi

if [ -d node_modules ]; then
  echo "[INFO] Dependencies already installed. Skipping installation."
else
  echo "[INFO] Installing npm dependencies..."
  npm install
fi

echo "[INFO] Build completed. You can now run the application with './run.sh' or 'npm run dev'."
