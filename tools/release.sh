#!/usr/bin/env bash
# Rebuild from this public checkout. Review/test before committing and publishing.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
if [ "$#" -ne 0 ]; then echo "Run in the public checkout; no destination argument is needed." >&2; exit 2; fi
python3 "$ROOT/tools/build.py"
bash "$ROOT/tools/package.sh"
