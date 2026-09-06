#!/usr/bin/env python3
"""Generate the standalone control + variant HTML files from one template.

Each output file = template.html with CONFIG, the question bank (with `why` stripped) and the renderer inlined.
The ONLY difference between files is the CONFIG block plus the copy that must truthfully follow the variable
(question count → duration copy; gate → what the landing promises; disclosure → block vs one line).
Run:  python3 tools/build.py      (prints the diff of every variant against the control, so isolation is verifiable)
"""
import json, re, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
TPL = (ROOT / 'tools' / 'template.html').read_text(encoding='utf-8')
Q = (ROOT / 'tools' / 'questions.js').read_text(encoding='utf-8')
R = (ROOT / 'tools' / 'render.js').read_text(encoding='utf-8')

# strip rationale (`why`) and review comments from the shipped question bank; keep `key` (needed for offline scoring)
Q_SHIP = re.sub(r"\n\s*why:\s*'(?:[^'\\]|\\.)*'\s*\}", "\n  }", Q)
Q_SHIP = re.sub(r"/\*(?!\s*-{5}).*?\*/", "", Q_SHIP, flags=re.S)   # drop block comments except the tier separators
Q_SHIP = "/* Question bank. Rationale removed from the shipped file; see tools/questions.js. */\n" + Q_SHIP.split('*/', 1)[-1].lstrip() if Q_SHIP.startswith('/*') else Q_SHIP

VARIANTS = {
    'index.html': {
        'variant': 'control',
        'label': 'CONTROL — disclosed result gate: how many correct is free; the free email-only account shows the IQ range and rank and saves the answer review',
        'gate': 'gate', 'disclosure': 'block', 'questionCount': 12,
    },
    'variant-1-score-first.html': {
        'variant': 'v1-score-first',
        'label': 'TEST 1 — result gating: IQ range and rank shown free before any account; the account adds the answer review, history and the updating rank',
        'gate': 'score-first', 'disclosure': 'block', 'questionCount': 12,
    },
    'variant-2-eight-questions.html': {
        'variant': 'v2-eight-questions',
        'label': 'TEST 2 — quiz length: 8 questions instead of 12, sampled across the same difficulty tiers and areas (duration and count copy follow truthfully)',
        'gate': 'gate', 'disclosure': 'block', 'questionCount': 8,
        # M1, N1, S1 (tier 1) · M2, L2 (tier 2) · N3, L3, S3 (tier 3): two items per area, easy→hard order kept, no adjacent keyed positions
        'items': [0, 1, 3, 4, 6, 9, 10, 11],
    },
    'variant-3-signup-first.html': {
        'variant': 'v3-signup-first',
        'label': 'TEST 3 — signup timing: the same free account is created before question 1 (disclosed on the landing) instead of after the last question',
        'gate': 'pre-quiz', 'disclosure': 'block', 'questionCount': 12,
    },
}

# Landing copy that must truthfully follow a pre-quiz gate (declared coupling for Test 3)
PRE_QUIZ_BLOCK = ('<strong>Free to take. Free account first.</strong>\n'
                  '        <ul>\n'
                  '          <li><b>Free, no payment:</b> all 12 questions, your IQ range and your rank.</li>\n'
                  '          <li><b>Free account (email only, no password) before question 1:</b> your result, rank and answer review are saved to it the moment you finish.</li>\n'
                  '        </ul>')
PRE_QUIZ_LEAD = 'Your result, rank and answer review the moment you finish.'
PRE_QUIZ_CTA = 'Create free account and start'

# Landing copy that must truthfully follow the gate (declared coupling for Test 1)
GATE_LEAD = 'Result the moment you finish.'
SCORE_FIRST_LEAD = 'Your IQ range and rank the moment you finish.'
GATE_BLOCK = ('<strong>Free to take. Free account at the end.</strong>\n'
              '        <ul>\n'
              '          <li><b>Free, no payment:</b> all 12 questions, and how many you got right.</li>\n'
              '          <li><b>Free account (email only, no password):</b> shows your IQ range and rank, and saves them with the answer review.</li>\n'
              '        </ul>')
SCORE_FIRST_BLOCK = ('<strong>What is free, and what needs an account</strong>\n'
                     '        <ul>\n'
                     '          <li><b>Free, no account:</b> all 12 questions, your IQ range and your rank.</li>\n'
                     '          <li><b>Free account (email only, no password):</b> saves your result and unlocks the answer review with explanations.</li>\n'
                     '        </ul>')
# Backlog disclosure arm (disclosure='line', the v2 Test 3: the same boundary as one sentence under the CTA). No shipped variant uses it;
# the branch below is kept so that arm can be built without template changes.
LINE_SMALL = 'Free to take. A free account (email only) at the end shows your IQ range and rank. No payment, ever. A short reasoning test'

OUT = ROOT / 'submission'
OUT.mkdir(exist_ok=True)

def must_replace(html, old, new, what):
    if old not in html:
        raise SystemExit(f'build.py: expected template text not found for {what}: {old[:60]!r}')
    return html.replace(old, new)

for fname, cfg in VARIANTS.items():
    conf = {k: v for k, v in cfg.items() if k != 'label'}
    html = TPL.replace('%%VARIANT_LABEL%%', cfg['label'])
    html = html.replace('%%CONFIG%%', json.dumps(conf, indent=2))
    html = html.replace('%%QUESTIONS%%', Q_SHIP.strip())
    html = html.replace('%%RENDER%%', R.strip())

    if cfg['gate'] == 'score-first':
        html = must_replace(html, GATE_LEAD, SCORE_FIRST_LEAD, 'score-first lead')
        html = must_replace(html, GATE_BLOCK, SCORE_FIRST_BLOCK, 'score-first disclosure block')
    if cfg['gate'] == 'pre-quiz':
        html = must_replace(html, GATE_LEAD, PRE_QUIZ_LEAD, 'pre-quiz lead')
        html = must_replace(html, GATE_BLOCK, PRE_QUIZ_BLOCK, 'pre-quiz disclosure block')
        html = must_replace(html, '<button class="btn" id="btn-start" type="button">Start the test</button>',
                            '<button class="btn" id="btn-start" type="button">' + PRE_QUIZ_CTA + '</button>', 'pre-quiz CTA label')
    if cfg['disclosure'] == 'line':   # retained for the backlog disclosure test; unused by the four shipped files
        html, k = re.subn(r'\n\s*<div class="disclose" id="disclose">.*?</div>\n', '\n', html, flags=re.S)
        assert k == 1, 'disclosure block not found'
        html = must_replace(html, 'No payment, ever. A short reasoning test', LINE_SMALL, 'one-line disclosure')

    n = cfg['questionCount']
    mins = '~5' if n == 12 else '~3'
    # truthful copy coupled to question count (declared coupling for Test 2)
    html = html.replace('12 questions · ~5 min', f'{n} questions · {mins} min')
    html = html.replace('<li><b>12</b><span>questions</span></li>', f'<li><b>{n}</b><span>questions</span></li>')
    html = html.replace('<li><b>~5</b><span>minutes</span></li>', f'<li><b>{mins}</b><span>minutes</span></li>')
    html = html.replace('Twelve reasoning questions, no timer.', 'Eight reasoning questions, no timer.' if n == 8 else 'Twelve reasoning questions, no timer.')
    html = html.replace('all 12 questions', f'all {n} questions')
    html = html.replace('<li>Checking 12 answers</li>', f'<li>Checking {n} answers</li>')
    html = html.replace('<title>IQly — Free IQ test: 12 questions', f'<title>IQly — Free IQ test: {n} questions')
    html = html.replace('A free 12-question IQ test, no payment.', f'A free {n}-question IQ test, no payment.')
    (OUT / fname).write_text(html, encoding='utf-8')
    print(f'wrote {fname:36s} {len(html)//1024} KB  config={conf}')

# one canonical file per deliverable: remove variant files from earlier builds that are no longer in VARIANTS
for p in sorted(OUT.glob('variant-*.html')):
    if p.name not in VARIANTS:
        p.unlink()
        print(f'removed stale {p.name}')

# isolation check: diff each variant against the control
ctrl = (OUT / 'index.html').read_text(encoding='utf-8').splitlines()
import difflib
for fname in VARIANTS:
    if fname == 'index.html':
        continue
    v = (OUT / fname).read_text(encoding='utf-8').splitlines()
    d = [l for l in difflib.unified_diff(ctrl, v, lineterm='', n=0) if l.startswith(('+', '-')) and not l.startswith(('+++', '---'))]
    print(f'\n--- diff vs control: {fname} ({len(d)} changed lines)')
    for l in d:
        print('   ', l[:140])
