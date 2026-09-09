#!/usr/bin/env bash
# Package the submission. Stages submission/ plus tools/ into one tree, writes MANIFEST.sha256 over every file in it,
# builds iqly-submission.zip at the project root, extracts the zip into a fresh directory whose path contains a space
# and verifies the manifest there. The staged tree (.iqly-stage/, git-ignored) is left in place: it is also what the
# public repository yosishe/iqly-flow is written from (tools/release.sh), so the zip, the repository and the live link
# are the same bytes.
# Portable: bash, tar, zip/unzip, and sha256sum (Linux) or shasum (macOS).   Usage: tools/package.sh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
STAGE="$ROOT/.iqly-stage"
sha() { if command -v sha256sum >/dev/null 2>&1; then sha256sum "$@"; else shasum -a 256 "$@"; fi; }
rm -rf "$STAGE"; mkdir -p "$STAGE/tools"
( cd "$ROOT/submission" && tar --exclude='.DS_Store' --exclude='MANIFEST.sha256' -cf - . ) | ( cd "$STAGE" && tar -xf - )
( cd "$ROOT/tools" && tar --exclude='.DS_Store' --exclude='__pycache__' --exclude='*.pyc' -cf - . ) | ( cd "$STAGE/tools" && tar -xf - )
( cd "$STAGE" && find . -type f ! -name MANIFEST.sha256 ! -name .DS_Store | sed 's|^\./||' | LC_ALL=C sort | while IFS= read -r f; do sha "$f"; done > MANIFEST.sha256 )
cp "$STAGE/MANIFEST.sha256" "$ROOT/submission/MANIFEST.sha256"
rm -f "$ROOT/iqly-submission.zip"
( cd "$STAGE" && zip -qr -X "$ROOT/iqly-submission.zip" . -x '.DS_Store' )
T="$(mktemp -d)/iqly check"; mkdir -p "$T"
unzip -q "$ROOT/iqly-submission.zip" -d "$T"
( cd "$T" && sha -c MANIFEST.sha256 > check.txt; OK=$(grep -c ': OK$' check.txt); BAD=$(grep -vc ': OK$' check.txt || true); echo "fresh extraction: $OK files verified, $BAD failed ($(find . -type f ! -name check.txt | wc -l | tr -d ' ') files extracted)"; [ "$BAD" = "0" ] )
rm -rf "$T"
echo "manifest entries: $(wc -l < "$ROOT/submission/MANIFEST.sha256" | tr -d ' ')"
ls -l "$ROOT/iqly-submission.zip"
sha "$ROOT/iqly-submission.zip"
echo "staged tree kept at $STAGE"
