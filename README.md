# deploy/ — byte-identical copies of the four flow files, ready to host

Drag this folder onto Netlify Drop (app.netlify.com/drop) or push it to a public GitHub Pages repository.
Nothing here needs a build step or a server: `index.html` is the control; the three `variant-*.html` files are the
standalone A/B arms. After deploying, run `python3 tools/qr.py <live-url>` to make a QR code for the README.
