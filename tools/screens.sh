#!/usr/bin/env bash
# Screenshot every funnel screen of a built file at a given CSS width, via the e2e harness (stop=...).
# Usage: tools/screens.sh <file> <width> <outdir>     e.g. tools/screens.sh index.html 375 /tmp/shots
DIR="$(cd "$(dirname "$0")" && pwd)"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"   # override with CHROME=/path/to/chrome (e.g. Chromium on Linux); CHROME_FLAGS adds flags such as --no-sandbox
CHROME_FLAGS="${CHROME_FLAGS:-}"
FILE="${1:-index.html}"; W="${2:-375}"; OUT="${3:-/tmp/iqly-shots}"; H="${H:-1500}"; STOPS="${STOPS:-quiz q5 q9 result signup signup-error full}"
mkdir -p "$OUT"
WIN=$(( W + 40 )); [ $WIN -lt 520 ] && WIN=520
for stop in $STOPS; do
  TMP="$(mktemp "${TMPDIR:-/tmp}/iqly.XXXXXX").png"
  "$CHROME" $CHROME_FLAGS --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files --virtual-time-budget=20000 \
    --window-size=${WIN},$((H + 60)) --screenshot="$TMP" \
    "file://$DIR/e2e.html?file=${FILE}&mode=${MODE:-allcorrect}&stop=${stop}&w=${W}&h=${H}&nodebug=${NODEBUG:-1}" >/dev/null 2>&1
  python3 - "$TMP" "$OUT/${FILE%.html}-${W}-${stop}.png" "$W" "$H" <<'EOF'
import sys
from PIL import Image
src,out,w,h=sys.argv[1],sys.argv[2],int(sys.argv[3]),int(sys.argv[4])
im=Image.open(src).convert('RGB')
# the iframe sits below the #out <pre> (one line) — locate the first white row
px=im.load(); top=0
for y in range(0,200):
    if px[12,y][0]>240: top=y; break
im=im.crop((11,top,11+w,top+h))
px=im.load(); bottom=h
for y in range(h-1,0,-6):
    if any(px[x,y][0]<235 for x in range(0,w,4)): bottom=min(h,y+24); break
im.crop((0,0,w,bottom)).save(out); print(out, bottom)
EOF
done
