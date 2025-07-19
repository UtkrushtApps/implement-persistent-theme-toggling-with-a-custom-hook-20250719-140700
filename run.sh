#!/bin/bash
set -e

./install.sh

echo "[INFO] Starting development server..."
npm run dev
