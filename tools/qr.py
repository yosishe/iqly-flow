#!/usr/bin/env python3
"""Make a QR-code PNG for the live link once Yosi has deployed `deploy/`.
Usage:  python3 tools/qr.py https://your-live-link.example  [out.png]
Needs the `qrcode` package (pure Python + Pillow):  python3 -m pip install "qrcode[pil]"
Nothing here touches the network; the QR is generated locally."""
import sys, pathlib
if len(sys.argv) < 2:
    sys.exit(__doc__)
url = sys.argv[1]
out = pathlib.Path(sys.argv[2] if len(sys.argv) > 2 else 'submission/iqly-live-link-qr.png')
try:
    import qrcode
except ImportError:
    sys.exit('The qrcode package is missing. Install it once with:  python3 -m pip install "qrcode[pil]"  and run again.')
img = qrcode.make(url, box_size=12, border=2)
img.save(out)
print(f'wrote {out} for {url}')
