#!/usr/bin/env bash
# Export the three HTML creatives to PNG at their exact pixel dimensions (plus a 2× version of the 320×50 for high-DPR slots).
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"; ADS="${ADS:-$DIR/../ads}"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"   # override with CHROME=/path/to/chrome (e.g. Chromium on Linux); CHROME_FLAGS adds flags such as --no-sandbox
CHROME_FLAGS="${CHROME_FLAGS:-}"
export_ad () { # file w h scale out
  local f=$1 w=$2 h=$3 s=$4 out=$5 tmp="$(mktemp "${TMPDIR:-/tmp}/ad.XXXXXX").png"
  local win_w=$(( w > 520 ? w : 520 )) win_h=$(( h > 200 ? h : 200 ))
  "$CHROME" $CHROME_FLAGS --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=$s --window-size=${win_w},${win_h} --screenshot="$tmp" "file://$ADS/$f" >/dev/null 2>&1
  python3 - "$tmp" "$out" $w $h $s <<'EOF'
import sys; from PIL import Image
src,out,w,h,s=sys.argv[1],sys.argv[2],int(sys.argv[3]),int(sys.argv[4]),int(sys.argv[5])
im=Image.open(src).crop((0,0,w*s,h*s)); im.save(out,optimize=True); print(out, im.size, round(len(open(out,'rb').read())/1024,1),'KB')
EOF
}
export_ad ad-320x50.html 320 50 1 "$ADS/ad-320x50.png"
export_ad ad-320x50.html 320 50 2 "$ADS/ad-320x50@2x.png"
export_ad ad-250x250.html 250 250 1 "$ADS/ad-250x250.png"
export_ad ad-1080x1920.html 1080 1920 1 "$ADS/ad-1080x1920.png"
