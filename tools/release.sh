#!/usr/bin/env bash
# Release gate. Rebuilds the four flow files from the template, packages them (stage + MANIFEST.sha256 + zip + a
# fresh-extraction check), proves zip == stage byte for byte, and, when given a checkout of the public repository
# (yosishe/iqly-flow, served by GitHub Pages from its root), syncs the staged tree into it and asserts that every
# staged file is byte-identical there. Exit code 0 only when root == staging == zip.
# Usage: tools/release.sh [/path/to/public/checkout]      (without a path: build + package + zip==stage check only)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
STAGE="$ROOT/.iqly-stage"
sha() { if command -v sha256sum >/dev/null 2>&1; then sha256sum "$@"; else shasum -a 256 "$@"; fi; }
list() { ( cd "$1" && find . -type f | sed 's|^\./||' | LC_ALL=C sort ); }

echo "== 1/4 build: tools/build.py -> submission/"
python3 "$ROOT/tools/build.py" | grep -E '^wrote|changed lines'

echo "== 2/4 package: stage + MANIFEST.sha256 + zip + fresh extraction"
"$ROOT/tools/package.sh"

echo "== 3/4 zip == stage"
T="$(mktemp -d)"; unzip -q "$ROOT/iqly-submission.zip" -d "$T"
list "$STAGE" > "$T.stage.list"; list "$T" > "$T.zip.list"
diff "$T.stage.list" "$T.zip.list" >/dev/null && echo "zip file list == stage file list ($(wc -l < "$T.stage.list" | tr -d ' ') files)"
while IFS= read -r f; do cmp -s "$STAGE/$f" "$T/$f" || { echo "MISMATCH zip vs stage: $f"; exit 1; }; done < "$T.stage.list"
echo "every zipped file is byte-identical to the stage"
rm -rf "$T" "$T.stage.list" "$T.zip.list"

if [ $# -ge 1 ]; then
  PUB="$(cd "$1" && pwd)"
  echo "== 4/4 sync stage -> $PUB and assert equality"
  list "$STAGE" | while IFS= read -r f; do mkdir -p "$PUB/$(dirname "$f")"; cp "$STAGE/$f" "$PUB/$f"; done
  BAD=0
  while IFS= read -r f; do cmp -s "$STAGE/$f" "$PUB/$f" || { echo "MISMATCH public vs stage: $f"; BAD=1; }; done < <(list "$STAGE")
  # files tracked in the public checkout that are not part of the stage: only Pages/git control files are allowed
  EXTRA=$( { cd "$PUB" && git ls-files | LC_ALL=C sort; } | comm -23 - <(list "$STAGE") | grep -v -E '^(\.nojekyll|\.gitignore)$' || true)
  if [ -n "$EXTRA" ]; then echo "UNEXPECTED files tracked in the public checkout but absent from the stage:"; echo "$EXTRA"; BAD=1; fi
  if ( cd "$PUB" && sha -c --quiet MANIFEST.sha256 >/dev/null 2>&1 ); then echo "public MANIFEST.sha256 verifies against the public tree"; else echo "public MANIFEST.sha256 FAILED"; BAD=1; fi
  [ "$BAD" = 0 ] || { echo "RELEASE GATE FAILED"; exit 1; }
  echo "root == staging == zip: $(list "$STAGE" | wc -l | tr -d ' ') files; manifest $(sha "$PUB/MANIFEST.sha256" | cut -c1-16); zip $(sha "$ROOT/iqly-submission.zip" | cut -c1-16)"
else
  echo "== 4/4 skipped (no public checkout path given)"
fi
