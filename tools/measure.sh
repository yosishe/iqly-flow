#!/bin/zsh
# Fold measurement: where does the CTA sit at a given viewport?  Usage: tools/measure.sh <built file> <width> <height> <landing|result|full>
# Prints one line: CTA bottom offset (px), whether it is inside the first viewport, page height, and the top offset of every key element.
DIR="$(cd "$(dirname "$0")" && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --allow-file-access-from-files --virtual-time-budget=30000 \
  --dump-dom "file://$DIR/measure.html?file=${1:-index.html}&w=${2:-375}&h=${3:-667}&screen=${4:-result}" 2>/dev/null | python3 "$DIR/measure.py"
