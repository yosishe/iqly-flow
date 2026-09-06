# IQly — AI Builder Challenge submission

**Open `index.html` in any browser.** It runs offline: no backend, no build step, no network requests, no external fonts. Phone and desktop. Add `?debug=1` to any flow file for the event timeline, state, score and storage.

**Live link (the same bytes, GitHub Pages, no login):** https://yosishe.github.io/iqly-flow/ · Test 1: https://yosishe.github.io/iqly-flow/variant-1-score-first.html · Test 2: https://yosishe.github.io/iqly-flow/variant-2-eight-questions.html · Test 3: https://yosishe.github.io/iqly-flow/variant-3-signup-first.html · QR: `iqly-live-link-qr.png`. The public repository behind that link (https://github.com/yosishe/iqly-flow) is the canonical package: the zip submitted through the form contains the same files, and `MANIFEST.sha256` lists every one of them.

## The sixty-second path

1. **The funnel (Part 1).** Search ad → a landing page that repeats the ad's promise and says, above the button, that the test is free and that a free email-only account at the end shows the IQ range and rank → 12 untimed reasoning questions, Back and Skip → a gate screen that shows how many were correct (the full count line, one real explanation, nothing blurred) and what the account shows → email-only account → the full result: range, illustrative rank, answer review with explanations, every attempt listed, and a control that deletes the account and its data. Why it is built this way: `writeups/part1-flow-writeup.pdf` (one page).
2. **The KPI.** Account CVR = sessions that create an account ÷ sessions that see the landing page, intention-to-treat; accounts ÷ page views (the brief's literal denominator, logged as `page_view`) reported alongside; decided in production on **verified** accounts within seven days. Definitions, events, guardrails, sizing: `docs/MEASUREMENT-SPEC.md`.
3. **The three bets (Part 2).** Each is a complete standalone file generated from one template, with one variable and the copy that must truthfully follow it (the build prints the diff: 14, 32 and 16 lines).
   - **Test 1** `variant-1-score-first.html`: how much of the earned result to give before asking for identity? The range and rank are free; the account adds the review, history and the updating rank. Stage: result → signup.
   - **Test 2** `variant-2-eight-questions.html`: how much effort to require? Eight items sampled across the same difficulty tiers and areas instead of twelve. Stage: quiz start and completion.
   - **Test 3** `variant-3-signup-first.html`: when to ask? The account is created before question 1 instead of after the last question. Stage: entry, with result reach as the quality guardrail.
   One paragraph each: `writeups/part2-ab-tests-writeup.pdf`. The full contracts (hypothesis, mechanism, exact arms, metrics, guardrails, MDE, traffic, decision rules, peeking policy, interactions, what to test next): `docs/EXPERIMENT-CONTRACTS.md`.
4. **The creatives (Part 3).** `ads/ad-320x50.png` (+ `@2x`), `ads/ad-250x250.png`, `ads/ad-1080x1920.png` at exact pixel sizes, HTML sources alongside, and `ads/message-match.md` (ad line → landing line → result line). One paragraph each: `writeups/part3-creatives-writeup.pdf`.
5. **Who decided what.** I set the constraints, reopened the control decision with no default and adopted the disclosed gate after checking the break-even, chose the three bets and their decision rules, made "no promise without behaviour" the rule, and vetoed every claim the evidence would not carry. Claude Code ran the research, generated the items, the single-file state machine, the variant build, the offline test and fold harnesses, argued both sides of the gate decision, and verified an independent audit of the project claim by claim. What AI got wrong and how it was caught, and what was rejected: `docs/AI-WORKLOG.md` (the seven-decision table at the top). Every decision with alternatives, evidence, confidence and how it would be reversed: `docs/DECISION-LOG.md`.
6. **What the prototype is, and is not.** Account creation is simulated: a syntactically valid email is stored in this browser after a verified write; no email is sent, no server account exists, ownership is not verified, nothing is cross-device, and the signup screen and every result screen say so. The IQ range and rank are illustrative outputs of a prototype mapping, labelled as such on the screen; they are not validated psychometric scores, and production needs calibration and norms before either is presented as measured. Events are logged locally (32 types) and exportable; the schema is production-ready, the durability is not.

## What is where

| Part | Deliverable | File |
|---|---|---|
| 1 | Write-up (1 page) | `writeups/part1-flow-writeup.pdf` |
| 1 | The flow (control): disclosed result gate | `index.html` |
| 2 | Write-up (one paragraph per test) | `writeups/part2-ab-tests-writeup.pdf` |
| 2 | Test 1 — result gating: IQ range and rank shown free before the account (score-first) | `variant-1-score-first.html` |
| 2 | Test 2 — quiz length: 8 questions sampled across difficulty tiers and areas instead of 12 | `variant-2-eight-questions.html` |
| 2 | Test 3 — signup timing: the free account is created before question 1 instead of after the last question | `variant-3-signup-first.html` |
| 2 | Experiment contracts (24 fields per test) | `docs/EXPERIMENT-CONTRACTS.md` |
| 3 | Write-up (one paragraph per creative) | `writeups/part3-creatives-writeup.pdf` |
| 3 | Creatives (Part 3) at exact pixel sizes, in `ads/` | `ads/ad-320x50.png` (+ `ad-320x50@2x.png`), `ads/ad-250x250.png`, `ads/ad-1080x1920.png`; HTML sources alongside; `ads/message-match.md` |
| — | Measurement specification (KPI definitions, events, guardrails, integrity, sizing) | `docs/MEASUREMENT-SPEC.md` |
| — | Decision log (v1 decisions; the v2, v3, v3.1 and v4 revisions; ratings of what an outside audit attacked) | `docs/DECISION-LOG.md` |
| — | AI work log (what AI did, what a human decided, what AI got wrong and how it was caught) | `docs/AI-WORKLOG.md` |
| — | Research inputs: six research documents adjudicated against every decision | `docs/RESEARCH-INPUTS.md` |
| — | QA checklist with results | `docs/QA-CHECKLIST.md` |
| — | Source of the four flow files and the test tooling (see "Reproduce" below) | `tools/` |
| — | SHA-256 of every shipped file | `MANIFEST.sha256` |

## The control in one paragraph

Landing (the ad's promise repeated; a highlighted block says what is free and that a free email-only account at the end shows the IQ range and rank) → 12 original untimed reasoning questions, one per screen, Back and Skip, keyboard-operable → a truthful scoring step under 2 s with three real steps → the gate screen: "You answered 9 of 12 correctly", the full count line (correct · incorrect · skipped), one real explanation from the review, the by-area counts one tap away, and the account card with the CTA inside the first phone viewport → email-only account (validated on submit, consent unticked, prototype note under the button, storage verified by read-back) → full result: range, illustrative rank, illustrative curve, answers by area, the full answer review with explanations, every attempt listed, and "Delete my account and data from this browser".

## What the result means, and what signup does

- **The result** is a count of correct answers on this attempt, an estimated IQ range, and a rank estimate; the range and rank come from a prototype mapping and are labelled on the screen as an illustration ("illustrative estimate from the prototype's mapping, not a measured rank"; the curve is "an illustrative scale, not a measured distribution"). No IQ number is shown, by design, and no error margin is quoted because none has been measured. Production computes the rank from IQly's own first-attempt distribution, shows the sample size, hides it until n is in the hundreds, and updates it as more people take the test. Difficulty tiers are author judgments until piloted; the band cut-points (85 / 70 / 40% correct, so the top band means at most one wrong at either quiz length) are prototype choices, not norms.
- **Signup** checks the email's syntax, stores a local account record after a verified write, and unlocks the range, rank, answer review and attempt history. No email is sent, no sign-in link exists yet, no server account is created, ownership is not verified, nothing is cross-device. If the browser blocks storage, the page says "kept for this tab only" already on the gate screen. The signup screen says all of this, and the promise it makes ("you can delete your account and data at any time") is a control on the result screen.

## Variants are standalone

Each variant is a full copy of the control generated from one template (`tools/template.html` through `tools/build.py`, both in this package); the only differences are the configuration block and the copy that must truthfully follow the variable. The build prints the exact diff per variant: 14 lines (Test 1: configuration, the landing lead sentence and the disclosure bullets), 32 lines (Test 2: configuration including the sampled item list, plus count and duration copy), 16 lines (Test 3: configuration, the landing block, the CTA label), all attributable.

## Reproduce

- Build the four files: `python3 tools/build.py` (prints the diff of every variant against the control).
- Run the offline end-to-end suite: `tools/e2e.sh` (headless Chrome drives the real DOM inside an iframe; 4 files × 8 modes = 32 runs; needs `--allow-file-access-from-files`, which the script passes).
- Measure a fold: `tools/measure.sh index.html 375 667 landing` (prints the CTA offset at that CSS viewport).
- Verify the package: `shasum -a 256 -c MANIFEST.sha256`.

## Research that informed the design, and where the AI reports disagreed

Beyond the agent's own sweep (the brief, 19 live competitor funnels, complaint corpora, peer-reviewed evidence, ad policy), six research documents were used: two GPT deep-research reports before v2, and four gathered by the candidate after v3 (the candidate's own AI-assisted market research, a Gemini deep-research report, a summary of the challenge, a funnel research brief). All six rank result gating as the first thing to test, which is Test 1. They disagree on signup before the quiz (two call it a start-killer, one reports operators profitably moving a paid wall first), and that disagreement is why Test 3 is worth spend. Three lean to a longer quiz; Test 2 stays 12 vs 8 because only the completion cost of length has a measured size. What the inputs changed: device and keyword segments on every event, a labelled sample-size illustration, and a Test 1 margin a real campaign can afford. Every figure the reports quote from a vendor page is labelled an unverified estimate and appears in no write-up. Full matrix: `docs/RESEARCH-INPUTS.md`. A seventh document, an independent audit of the package itself, was verified claim by claim in v4: what it got right was fixed, what it got wrong is recorded, and its proposed replacement for Test 3 was rejected on a measured coupling (`docs/DECISION-LOG.md`, rows 31–36).

## Honest limits of the prototype
- Account creation is simulated (see above). Answer keys ship in the file because offline scoring needs them; production scores server-side.
- Events are logged locally only (32 types; the email is never logged; `dev` and `kw` are first-touch, allow-listed segment fields, never a user's typed query; `attempt` separates retakes); the schema is production-ready. `?nostorage=1` is a QA hook that simulates a browser with blocked storage.
- "~5 min" is an estimate until measured with real people.
- Accessibility: the quiz is keyboard-operable (arrows move focus between answers without selecting, because selection auto-advances; Enter or Space selects). The matrix, arrow, dot and paper-folding items are described for screen readers without stating the rule; the polyomino item is visual-only and remains a declared limit.
- Terms and Privacy Policy are placeholders in the prototype.
- Verified in headless and installed Chrome on macOS at 320–1200 px, opened as plain local files with no special flags, and on the live link in a browser at 320, 360, 375 and 390 px; physical phones and other browsers are on the candidate's own checklist.
