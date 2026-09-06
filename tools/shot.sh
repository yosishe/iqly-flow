#!/bin/zsh
# Usage: tools/shot.sh <html file (relative to tools/ or absolute)> <width> <height> <out.png>
# Renders the page at an exact CSS width via frame.html in headless Chrome and crops the screenshot.
set -e
SRC="$1"; W="${2:-375}"; H="${3:-6000}"; OUT="${4:-shot.png}"
DIR="$(cd "$(dirname "$0")" && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
case "$SRC" in /*) SRCURL="file://$SRC";; *) SRCURL="$SRC";; esac
WIN=$(( W + 40 )); [ $WIN -lt 520 ] && WIN=520
TMP="$(mktemp -t shot).png"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --window-size=${WIN},${H} \
  --screenshot="$TMP" "file://$DIR/frame.html?src=${SRCURL}&w=${W}&h=${H}" >/dev/null 2>&1
python3 - "$TMP" "$OUT" "$W" "$H" <<'EOF'
import sys
from PIL import Image
src,out,w,h=sys.argv[1],sys.argv[2],int(sys.argv[3]),int(sys.argv[4])
im=Image.open(src).crop((0,0,w,h)).convert('RGB')
# trim bottom whitespace (scan every 8 rows from the bottom)
px=im.load(); bottom=h
for y in range(h-1,0,-8):
    if any(px[x,y][0]<235 for x in range(0,w,4)): bottom=min(h,y+24); break
im.crop((0,0,w,bottom)).save(out); print(out, w, bottom)
EOF
