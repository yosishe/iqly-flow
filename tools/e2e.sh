#!/usr/bin/env bash
# Offline end-to-end tests for every built funnel file, driven by headless Chrome (no Node, no Playwright).
# The harness loads the files from submission/ (run python3 tools/build.py first; in the public package that regenerates the same bytes as the root files).
# Usage: tools/e2e.sh [file ...]   (default: all four)  — prints PASS/FAIL lines per file × mode.
DIR="$(cd "$(dirname "$0")" && pwd)"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"   # override with CHROME=/path/to/chrome (e.g. Chromium on Linux); CHROME_FLAGS adds flags such as --no-sandbox
CHROME_FLAGS="${CHROME_FLAGS:-}"
FILES=("$@"); [ ${#FILES[@]} -eq 0 ] && FILES=(index.html variant-1-score-first.html variant-2-eight-questions.html variant-3-signup-first.html)
MODES=(allcorrect allwrong mixed skip resume skipall history nostorage)
FAILS=0
for f in "${FILES[@]}"; do
  for m in "${MODES[@]}"; do
    out=$("$CHROME" $CHROME_FLAGS --headless=new --disable-gpu --allow-file-access-from-files --virtual-time-budget=30000 \
      --dump-dom "file://$DIR/e2e.html?file=$f&mode=$m" 2>/dev/null | python3 -c '
import sys,re,html
s=sys.stdin.read(); m=re.search(r"<pre id=\"out\">(.*?)</pre>",s,re.S)
print(html.unescape(m.group(1)) if m else "FAIL: no output captured")')
    echo "=== $f · $m"; echo "$out" | grep -E "FAIL|RESULT"
    echo "$out" | grep -q "RESULT: ALL PASSED" || FAILS=$((FAILS+1))
  done
done
echo; echo "SUMMARY: $FAILS failing file×mode combinations"
exit $FAILS
