#!/usr/bin/env python3
"""Parse the JSON printed by tools/measure.html (read from stdin, as dumped by headless Chrome) into one summary line."""
import sys, re, html, json
s = sys.stdin.read()
m = re.search(r'<pre id="out">(.*?)</pre>', s, re.S)
d = json.loads(html.unescape(m.group(1))) if m else {"error": "no output captured"}
el = {k: v["top"] for k, v in d.get("elements", {}).items() if v}
print("%-34s %sx%s %-8s CTA bottom=%s first-viewport=%s page=%s err=%s | %s" % (
    d.get("file"), d.get("width"), d.get("viewport"), d.get("screen"), d.get("ctaBottom"),
    d.get("ctaWithinFirstViewport"), d.get("pageHeight"), d.get("error"), el))
