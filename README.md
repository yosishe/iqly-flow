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

## The control in one paragraph

Landing (the ad's promise repeated; a highlighted block says what is free and that a free email-only account at the end shows the IQ range and rank) → 12 original untimed reasoning questions, one per screen, Back and Skip, keyboard-operable → a truthful scoring step under 2 s with three real steps → the gate screen: "You answered 9 of 12 correctly", the full count line (correct · incorrect · skipped), one real explanation from the review, the by-area counts one tap away, and the account card with the CTA inside the first phone viewport → email-only account (validated on submit, consent unticked, prototype note under the button, storage verified by read-back) → full result: range, illustrative rank, illustrative curve, answers by area, the full answer review with explanations, every attempt listed, and "Delete my account and data from this browser".

## What the prototype is, and is not

- **Account creation is simulated.** A syntactically valid email is stored in this browser after a verified write; no email is sent, no sign-in link exists, no server account is created, ownership is not verified, nothing is cross-device. The signup screen and every result screen say so. If the browser blocks storage the page says "kept for this tab only" already on the gate screen.
- **The range and rank are illustrative.** They come from a prototype mapping and are labelled on the screen ("illustrative estimate from the prototype's mapping, not a measured rank"; the curve is "an illustrative scale, not a measured distribution"). No IQ number is shown, by design (a deviation from the brief's "scores IQ", explained in Part 1), and no error margin is quoted because none has been measured. The band cut-points (85 / 70 / 40% correct, so the top band means at most one wrong at either quiz length) are prototype choices, not norms. Production computes the rank from IQly's own first-attempt distribution, shows the sample size, hides it until n is in the hundreds, and updates it as more people take the test.
- **Events are local.** 32 types, logged in this browser and exportable from the debug panel; the email is never logged; `dev` and `kw` are first-touch, allow-listed segment fields, never a user's typed query; `attempt` separates retakes. The schema is production-ready, the durability is not. `?nostorage=1` is a QA hook that simulates a browser with blocked storage.
- Answer keys ship in the file because offline scoring needs them; production scores server-side. "~5 min" is an estimate until measured with real people. Terms and Privacy Policy are placeholders.
- **Accessibility.** The quiz is keyboard-operable (arrows move focus between answers without selecting, because selection auto-advances; Enter or Space selects). The matrix, arrow, dot and paper-folding items are described for screen readers without stating the rule; the polyomino item is visual-only and remains a declared limit.
- **Verified** in headless Chrome on macOS and headless Chromium on Linux at 320–1200 px, opened as plain local files with no special flags, and on the live link in a browser at 320, 360, 375 and 390 px; physical phones and other browsers are the candidate's own checks (QA rows 41–42, open).

## Who decided what

I set the constraints, reopened the control decision with no default and adopted the disclosed gate after checking the break-even, chose the three bets and their decision rules, made "no promise without behaviour" the rule, accepted the range-not-score deviation from the brief, and vetoed every claim the evidence would not carry. Claude Code ran the research, generated the items, the single-file state machine, the variant build, the offline test and fold harnesses, argued both sides of the gate decision, verified an independent audit of the project claim by claim, and ran the pre-submission audit behind this release. Every decision with alternatives, evidence, confidence and how it would be reversed: `docs/DECISION-LOG.md`. What AI got wrong and how it was caught, and what was rejected: `docs/AI-WORKLOG.md`.

**Time spent:** not tracked reliably. What the AI loop made cheap: every rebuild came with its own diff, its 32 test runs and its fold measurements, so verifying a copy change cost minutes rather than an afternoon.

## Variants are standalone

Each variant is a full copy of the control generated from one template (`tools/template.html` through `tools/build.py`, both in this package); the only differences are the configuration block and the copy that must truthfully follow the variable. The build prints the exact diff per variant: 14 lines (Test 1: configuration, the landing lead sentence and the disclosure bullets), 32 lines (Test 2: configuration including the sampled item list, plus count and duration copy), 16 lines (Test 3: configuration, the landing block, the CTA label), all attributable.

## Research that informed the design, and where the AI reports disagreed

Beyond the agent's own sweep (the brief, 19 live competitor funnels, complaint corpora, peer-reviewed evidence, ad policy), six research documents were used: two GPT deep-research reports before v2, and four gathered by the candidate after v3. All six rank result gating as the first thing to test, which is Test 1. They disagree on signup before the quiz (two call it a start-killer, one reports operators profitably moving a paid wall first), and that disagreement is why Test 3 is worth spend. Three lean to a longer quiz; Test 2 stays 12 vs 8 because only the completion cost of length has a measured size. Every figure the reports quote from a vendor page is labelled an unverified estimate and appears in no write-up. Full matrix: `docs/RESEARCH-INPUTS.md`. An independent audit of the package itself was verified claim by claim in v4 (`docs/DECISION-LOG.md`, rows 31–36), and a pre-submission audit in v5 corrected the statistics convention, the packaging and a clipped creative (rows 37–39).

## Reproduce (macOS or Linux)

- **Build the four files:** `python3 tools/build.py` writes them to `submission/` (git-ignored in this repository) and prints each variant's diff against the control; the output is byte-identical to the four files at the root (`cmp submission/index.html index.html`).
- **Run the offline end-to-end suite:** `tools/e2e.sh` (headless Chrome drives the real DOM inside an iframe, loading the files from `submission/`; 4 files × 8 modes = 32 runs). It uses Google Chrome at its macOS path by default; elsewhere set `CHROME=/path/to/chromium`, and in a root container `CHROME_FLAGS=--no-sandbox`.
- **Measure a fold:** `tools/measure.sh index.html 375 667 landing` (the CTA offset at that CSS viewport; `result` for the gate screen, `signup` for the signup-first arm).
- **Verify the package:** `shasum -a 256 -c MANIFEST.sha256` (or `sha256sum -c MANIFEST.sha256`).
- **Release gate (authoring layout):** `tools/release.sh <path to this repository's checkout>` rebuilds, stages the package with `tools/package.sh`, writes the manifest and the zip, verifies a fresh extraction, syncs the stage into this repository and asserts byte equality; bash, tar, zip and `sha256sum` or `shasum` are all it needs. `tools/export-ads.sh` re-exports the creatives (Chrome and Pillow).
