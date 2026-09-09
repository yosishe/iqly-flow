#!/usr/bin/env bash
# Fold measurement: where does the CTA sit at a given viewport?  Usage: tools/measure.sh <built file> <width> <height> <landing|result|full>
# --hide-scrollbars: a phone reserves no scrollbar width, and a classic desktop scrollbar (Linux) would narrow the iframe and move the CTA.
# Prints one line: CTA bottom offset (px), whether it is inside the first viewport, page height, and the top offset of every key element.
DIR="$(cd "$(dirname "$0")" && pwd)"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"   # override with CHROME=/path/to/chrome (e.g. Chromium on Linux); CHROME_FLAGS adds flags such as --no-sandbox
CHROME_FLAGS="${CHROME_FLAGS:-}"
"$CHROME" $CHROME_FLAGS --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files --virtual-time-budget=30000 \
  --dump-dom "file://$DIR/measure.html?file=${1:-index.html}&w=${2:-375}&h=${3:-667}&screen=${4:-result}" 2>/dev/null | python3 "$DIR/measure.py"
