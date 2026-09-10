# IQly — AI Builder Challenge submission

**Open `index.html` in any browser.** It runs offline: no backend, no build step, no network requests, no external fonts. Phone and desktop. Add `?debug=1` to any flow file for the event timeline, state, score and storage.

**Live (the same bytes, GitHub Pages, no login):** https://yosishe.github.io/iqly-flow/ · Test 1: https://yosishe.github.io/iqly-flow/variant-1-score-first.html · Test 2: https://yosishe.github.io/iqly-flow/variant-2-eight-questions.html · Test 3: https://yosishe.github.io/iqly-flow/variant-3-signup-first.html · QR (a convenience; the links are the reference): `iqly-live-link-qr.png`. This repository (https://github.com/yosishe/iqly-flow) is the canonical package: `MANIFEST.sha256` lists every shipped file, and the zip submitted through the form is built from the same staged tree by `tools/release.sh`, which asserts that the repository, the stage and the zip are byte-identical.

## The sixty-second path

**The flow (Part 1).** Search ad → a landing page that repeats the ad's promise and says, above the button, that the test is free and that a free email-only account at the end shows the IQ range and rank → 12 untimed questions → a gate screen with the true count, one real explanation and nothing blurred → email-only account → range, illustrative rank, answer review, every attempt listed, a delete control. **The three tests (Part 2):** result gating (score-first), quiz length (8 vs 12), signup timing (before question 1); one variable each, standalone files from one template. **The creatives (Part 3):** 320×50, 250×250, 1080×1920, one honest promise, a real sample item. Then read the three one-page write-ups below.

## What is where

| Read first | File |
|---|---|
| Part 1 write-up (one page): why the flow is built this way | `writeups/part1-flow-writeup.pdf` (`.html` alongside) |
| Part 2 write-up: the three A/B tests, one paragraph each | `writeups/part2-ab-tests-writeup.pdf` |
| Part 3 write-up: the three creatives, one paragraph each | `writeups/part3-creatives-writeup.pdf` |
| Measurement specification: KPI definitions, events, guardrails, integrity, sizing | `docs/MEASUREMENT-SPEC.md` |
| AI work log: what AI did, what a human decided, what AI got wrong and how it was caught | `docs/AI-WORKLOG.md` |

| Deliverable | File |
|---|---|
| Part 1 — the flow (control: disclosed result gate) | `index.html` |
| Part 2 — Test 1, result gating: the IQ range and rank shown free before the account | `variant-1-score-first.html` |
| Part 2 — Test 2, quiz length: 8 questions sampled across difficulty tiers and areas instead of 12 | `variant-2-eight-questions.html` |
| Part 2 — Test 3, signup timing: the free account is created before question 1 | `variant-3-signup-first.html` |
| Part 3 — creatives at exact pixel sizes; HTML sources and `ads/message-match.md` alongside | `ads/ad-320x50.png` (+ `ads/ad-320x50@2x.png`), `ads/ad-250x250.png`, `ads/ad-1080x1920.png` |

Supporting records: `docs/EXPERIMENT-CONTRACTS.md` (24 fields per test), `docs/DECISION-LOG.md` (every decision with alternatives, evidence, confidence and what would reverse it), `docs/RESEARCH-INPUTS.md` (six research documents adjudicated against every decision), `docs/QA-CHECKLIST.md` (results with commands and environment), `tools/` (the source of the four flow files and the test tooling), `MANIFEST.sha256`.

## The control

A disclosed free email-only account follows 12 untimed reasoning questions. Correct-answer count, one explanation and area counts are available first; the account reveals an illustrative range/rank, the complete review and local attempt history. Nothing is blurred. Account deletion is available on every screen after signup, including retakes and insufficient results. Back/Skip cannot race a pending answer transition.

## Prototype boundary

Email syntax is checked and saved in this browser when storage works; no email is sent, ownership verified or server account created. Email links and a population rank would be future functionality. Blocked persistence is disclosed. Raw scores are deterministic; the IQ range, rank and curve are illustrative mappings, with no norms, measured reliability or error margin. Area counts are not a validated ability profile. Retakes can reflect practice. Time estimates are not user-study measurements. Answer keys must be in the offline file. Terms/Privacy are placeholders.

Events stay local and exclude the typed email. The account object contains that email locally; exports contain diagnostic events only. The prototype has persistent per-variant `sid`s, no randomization and no real conversion experiment. See docs/MEASUREMENT-SPEC.md for separate raw-page, session and proposed production-visitor denominators. Deletion clears the current variant and reloads a fresh anonymous session; other variants remain separate.

Keyboard arrows move answer focus without selecting; Enter/Space selects. The polyomino question remains visual-only, a declared accessibility limitation. Testing on desktop Chrome with emulated widths is not physical-phone or cross-browser certification. Current evidence summary: docs/QA-CHECKLIST.md.

## Decisions and AI

The original record credits the user with constraints, adoption of the control reversal, and selection of the three bets. Claude Code researched alternatives and generated items, code, creatives and original QA. Codex performed the final readiness audit and discovered additional navigation, persistence, rendering and evidence defects. Earlier passes missed them. The control reversal and three experiments remain; no numerical example establishes that they will convert better. See the chronological decision log and AI worklog. Time spent was not reliably tracked.

## Reproduce from this public checkout

- Open index.html directly to use the prototype; no build or server is required.
- `python3 tools/build.py` rebuilds the four root HTML files from one template and prints variant differences. The bank and scoring rules are shared.
- `bash tools/e2e.sh` runs 4 files × 8 modes in headless Chrome through a file iframe. Its harness uses file-access flags; the separate final offline acceptance check opens each file directly with no special flags. Set CHROME to another installed Chromium binary where needed.
- `bash tools/export-ads.sh` exports the three creatives and optional 2× banner using Chrome and existing Pillow. Font availability affects rendering; supplied PNGs are the fixed reviewer artifacts.
- `bash tools/release.sh` rebuilds and packages the public root using tools/release-files.txt. It includes assets, write-ups, docs and tools, generates MANIFEST.sha256, makes a deterministic ZIP and verifies a fresh extraction with spaces in its path. No private authoring layout is read. Git/Pages control files are outside the ZIP.
- `shasum -a 256 -c MANIFEST.sha256` verifies shared files (Linux: sha256sum). Final archive is iqly-submission.zip.

Private interview materials, research notes, prompts, correspondence and CV are not in this repository or ZIP. Official requirements: https://challenge.arpeely.com/index.html. Submission form: https://challenge.arpeely.com/submit.html.
