/* IQly SVG renderers — pure functions returning SVG markup strings. No DOM, no network.
   Stroke colours use currentColor so they follow the theme. */
var IQLY_RENDER = (function () {
  'use strict';
  var NS = 'xmlns="http://www.w3.org/2000/svg"';

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

  /* --- primitives --- */
  function shape(kind, cx, cy, r, fill) {
    fill = fill || 'currentColor';
    if (kind === 'circle') return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + fill + '"/>';
    if (kind === 'square') return '<rect x="' + (cx - r) + '" y="' + (cy - r) + '" width="' + (2 * r) + '" height="' + (2 * r) + '" fill="' + fill + '"/>';
    if (kind === 'triangle') return '<polygon points="' + cx + ',' + (cy - r) + ' ' + (cx + r) + ',' + (cy + r) + ' ' + (cx - r) + ',' + (cy + r) + '" fill="' + fill + '"/>';
    return '';
  }

  /* a tile of n shapes in a row, in a 100×100 box */
  function countTile(kind, n) {
    var out = '';
    var r = n <= 3 ? 11 : 9, gap = n <= 3 ? 30 : 23;
    var start = 50 - ((n - 1) * gap) / 2;
    for (var i = 0; i < n; i++) out += shape(kind, start + i * gap, 50, r);
    return out;
  }

  function arrowTile(fill, dir) {
    var rot = { up: 0, right: 90, down: 180, left: 270 }[dir] || 0;
    var pattern = '';
    var f = 'currentColor';
    if (fill === 'outline') f = 'none';
    if (fill === 'stripe') f = 'url(#iqly-stripe)';
    return '<g transform="rotate(' + rot + ' 50 50)">' +
      '<path d="M50 18 L76 48 L60 48 L60 82 L40 82 L40 48 L24 48 Z" fill="' + f + '" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/></g>';
  }

  function dotsTile(corners) {
    var pos = { TL: [26, 26], TR: [74, 26], BL: [26, 74], BR: [74, 74] };
    var out = '';
    for (var i = 0; i < corners.length; i++) {
      var p = pos[corners[i]];
      out += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="11" fill="currentColor"/>';
    }
    return out;
  }

  function tileByType(type, spec) {
    if (!spec) return '';
    if (type === 'matrix') return countTile(spec[0], spec[1]);
    if (type === 'arrows') return arrowTile(spec[0], spec[1]);
    if (type === 'dots') return dotsTile(spec);
    return '';
  }

  var STRIPE_DEF = '<defs><pattern id="iqly-stripe" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="4" height="8" fill="currentColor"/></pattern></defs>';

  /* --- 3×3 matrix stimulus --- */
  function matrixStim(q) {
    var cells = q.stim.cells, out = '<svg ' + NS + ' viewBox="0 0 330 330" role="img" aria-label="' + esc(q.alt || '') + '">' + STRIPE_DEF;
    for (var i = 0; i < 9; i++) {
      var x = (i % 3) * 110, y = Math.floor(i / 3) * 110;
      out += '<rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="106" height="106" rx="10" fill="none" stroke="currentColor" stroke-opacity="0.25" stroke-width="2"/>';
      if (cells[i] === null) {
        out += '<text x="' + (x + 55) + '" y="' + (y + 66) + '" text-anchor="middle" font-size="44" font-weight="700" fill="currentColor" fill-opacity="0.45">?</text>';
      } else {
        out += '<g transform="translate(' + (x + 5) + ' ' + (y + 5) + ')">' + tileByType(q.stim.type, cells[i]) + '</g>';
      }
    }
    return out + '</svg>';
  }

  function tileOption(q, opt) {
    return '<svg ' + NS + ' viewBox="0 0 100 100" aria-hidden="true">' + STRIPE_DEF + tileByType(q.stim.type, opt) + '</svg>';
  }

  /* --- number series --- */
  function seriesStim(q) {
    var t = q.stim.terms, out = '<div class="series" role="img" aria-label="Sequence: ' + esc(t.join(', ')) + '">';
    for (var i = 0; i < t.length; i++) out += '<span class="term' + (t[i] === '?' ? ' term-q' : '') + '">' + esc(t[i]) + '</span>';
    return out + '</div>';
  }

  /* --- polyomino --- */
  function polySvg(cells, label) {
    var out = '<svg ' + NS + ' viewBox="0 0 100 100"' + (label ? ' role="img" aria-label="' + esc(label) + '"' : ' aria-hidden="true"') + '>';
    var maxX = 0, maxY = 0;
    cells.forEach(function (c) { maxX = Math.max(maxX, c[0]); maxY = Math.max(maxY, c[1]); });
    var u = 24, w = (maxX + 1) * u, h = (maxY + 1) * u, ox = (100 - w) / 2, oy = (100 - h) / 2;
    cells.forEach(function (c) {
      out += '<rect x="' + (ox + c[0] * u + 1) + '" y="' + (oy + c[1] * u + 1) + '" width="' + (u - 2) + '" height="' + (u - 2) + '" rx="3" fill="currentColor"/>';
    });
    return out + '</svg>';
  }

  /* --- paper folding --- */
  /* where a hole sits on the unfolded sheet, as a sighted user sees it: quadrant, plus "corner" / "near the centre" by distance from the
     middle. Describes what is drawn, never the folding rule, so a screen-reader user gets the same task as everyone else. */
  function holeWhere(h) {
    var q = (h[1] < 0.5 ? 'top' : 'bottom') + '-' + (h[0] < 0.5 ? 'left' : 'right');
    var d = Math.max(Math.abs(h[0] - 0.5), Math.abs(h[1] - 0.5));
    return d >= 0.3 ? q + ' corner' : d < 0.2 ? q + ' near the centre' : q;
  }

  function foldStim(q) {
    var folds = q.stim.folds, p = q.stim.punch;
    var label = esc(q.alt || '') + ' The hole is punched through the folded packet at the position that is the ' + holeWhere(p) + ' of the original square.';
    var out = '<svg ' + NS + ' viewBox="0 0 250 110" role="img" aria-label="' + label + '">';
    /* left: sheet with fold lines and arrows */
    out += '<rect x="5" y="5" width="100" height="100" fill="none" stroke="currentColor" stroke-width="2"/>';
    if (folds.indexOf('h') >= 0) out += '<line x1="5" y1="55" x2="105" y2="55" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>' +
      '<path d="M55 14 L55 42 M48 35 L55 42 L62 35" fill="none" stroke="currentColor" stroke-width="2.5"/>';
    if (folds.indexOf('v') >= 0) out += '<line x1="55" y1="5" x2="55" y2="105" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/>' +
      '<path d="M14 80 L42 80 M35 73 L42 80 L35 87" fill="none" stroke="currentColor" stroke-width="2.5"/>';
    /* arrow between */
    out += '<path d="M118 55 L138 55 M132 49 L138 55 L132 61" fill="none" stroke="currentColor" stroke-width="2.5" stroke-opacity="0.6"/>';
    /* right: folded packet */
    var px = 145, py = 5, pw = 100, ph = 100;
    var x0 = 0, y0 = 0;
    if (folds.indexOf('h') >= 0) { ph = 50; py = 55; y0 = 0.5; }
    if (folds.indexOf('v') >= 0) { pw = 50; px = 195; x0 = 0.5; }
    out += '<rect x="' + px + '" y="' + py + '" width="' + pw + '" height="' + ph + '" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2"/>';
    /* ghost of full sheet */
    out += '<rect x="145" y="5" width="100" height="100" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" stroke-opacity="0.4"/>';
    /* punch: map full-sheet coords to packet */
    var hx = 145 + p[0] * 100, hy = 5 + p[1] * 100;
    out += '<circle cx="' + hx + '" cy="' + hy + '" r="6" fill="currentColor"/>';
    return out + '</svg>';
  }

  function foldOption(opt) {
    var out = '<svg ' + NS + ' viewBox="0 0 100 100" aria-hidden="true"><rect x="5" y="5" width="90" height="90" fill="none" stroke="currentColor" stroke-width="2"/>';
    opt.holes.forEach(function (h) { out += '<circle cx="' + (5 + h[0] * 90) + '" cy="' + (5 + h[1] * 90) + '" r="5.5" fill="currentColor"/>'; });
    return out + '</svg>';
  }

  /* --- public API --- */
  function stimulus(q) {
    var t = q.stim.type;
    if (t === 'matrix' || t === 'arrows' || t === 'dots') return matrixStim(q);
    if (t === 'series') return seriesStim(q);
    if (t === 'poly') return polySvg(q.stim.cells, q.alt);
    if (t === 'fold') return foldStim(q);
    return '';
  }

  /* returns {html, isText} */
  function option(q, opt) {
    var t = q.stim.type;
    if (t === 'matrix' || t === 'arrows' || t === 'dots') return { html: tileOption(q, opt), isText: false };
    if (t === 'poly') return { html: polySvg(opt.cells), isText: false };
    if (t === 'fold') return { html: foldOption(opt), isText: false };
    return { html: esc(opt), isText: true };
  }

  /* accessible description of a visual option (for aria-label) */
  function optionLabel(q, opt, idx) {
    var t = q.stim.type, n = 'Option ' + (idx + 1);
    if (t === 'matrix') return n + ': ' + opt[1] + ' ' + opt[0] + (opt[1] > 1 ? 's' : '');
    if (t === 'arrows') return n + ': ' + opt[0] + ' arrow pointing ' + opt[1];
    if (t === 'dots') return n + ': dots at ' + opt.join(', ').replace(/TL/g, 'top-left').replace(/TR/g, 'top-right').replace(/BL/g, 'bottom-left').replace(/BR/g, 'bottom-right');
    if (t === 'poly') return n + ': a four-square figure';
    if (t === 'fold') return n + ': ' + opt.holes.length + ' hole' + (opt.holes.length > 1 ? 's' : '') + ', ' + opt.holes.map(holeWhere).join('; ');
    return n + ': ' + opt;
  }

  return { stimulus: stimulus, option: option, optionLabel: optionLabel };
})();
