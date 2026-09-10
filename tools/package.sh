#!/usr/bin/env bash
# Package this public checkout without importing private authoring files.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
python3 "$ROOT/tools/package.py"
