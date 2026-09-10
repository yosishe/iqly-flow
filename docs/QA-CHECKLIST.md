# IQly — Current release verification

Reverified 10 September 2026 on macOS, Chrome 152.0.7977.83. This replaces the historical PASS table; older evidence is preserved privately. A prototype QA pass does not establish conversion performance or production readiness.

| Requirement | Status | Current evidence and limit |
|---|---|---|
| Four complete standalone flows | FIXED AND REVERIFIED | Control 12, score-first 12, shorter 8, signup-first 12; intended reveal and gate timing; deterministic scores and full review |
| Existing regression matrix | FIXED AND REVERIFIED | `bash tools/e2e.sh`: 4 files × 8 modes, 32/32 pass. The allwrong mode now genuinely ends at zero correct; skipall ends with every item skipped. |
| Rapid interaction and lifecycle | FIXED AND REVERIFIED | Real Chrome answer→Skip/Back and duplicate activation; final-question transitions; cancellation on leaving quiz/calculating/signup; normal Back; refresh and re-entry |
| State/storage/privacy | FIXED AND REVERIFIED | Normal and blocked writes; malformed JSON and wrong shapes in all five keys; signup-first missing-account recovery; deletion confirmation/cancellation and reachability on retakes/insufficient results; events/debug exports exclude typed email |
| Six CSS widths | PASS | 320, 360, 375, 390, 768, 1200: all questions and landing, calculating, signup/error, teaser/full/expanded results, insufficient result. Geometry checks and screenshots; no horizontal overflow. Desktop-browser emulation, not physical devices. |
| Extended browser audit | PASS | 755 assertions, 432 screenshots; another 132 assertions and 24 calculating screenshots. Normal and reduced motion; zero-correct attempts; keyboard focus and disclosure placement checked. |
| Offline use | PASS | Direct file navigation in a fresh browser context with networking blocked and no special browser flags; no attempted HTTP(S) requests from the four flows. The existing iframe harness separately uses file-access flags. |
| Experiment isolation | PASS | Build diffs remain 14 / 32 / 16 changed lines. Configuration and truthful offer/count/timing copy account for every difference; composition, resolution and layout coupling documented in contracts. |
| Core preserved | PASS | questions.js, render.js, BANDS and bandIndex unchanged from the original pinned release; no question/key or scoring remap |
| Creative dimensions and copy | FIXED AND REVERIFIED | 320×50, 250×250, 1080×1920; optional 640×100. All visible copy inspected. Square still includes no payment; vertical children fit x=72..1008,y=270..1250 internal margins. |
| PDFs | FIXED AND REVERIFIED | All three one page, visually rendered, extractable, text compared with HTML after normalization. Part 1 satisfies the official one-page maximum. Parts 2/3 have one paragraph per test/creative; earlier word caps were self-imposed. |
| Build/package from public root | FIXED AND REVERIFIED | `bash tools/release.sh` builds root files, includes the complete explicit reviewer allowlist and checks byte equality after extraction into a path with spaces. No private authoring layout or network required. |
| Claims/measurement | FIXED AND REVERIFIED | Three denominators separated; no treatment-dependent speed exclusions; ratio-boundary sizing recomputed; future account promises corrected; research uncertainty and historical judgments labelled |
| Physical phone and other browser engines | USER ACTION REQUIRED | Check a real phone before sending. Current results are Chrome emulation; old Linux checks are not represented as fresh. |
| Production and full accessibility | USER ACTION REQUIRED | Prototype only: no server identity/randomization, real IQ validation or production analytics. Visual-only polyomino remains a stated accessibility limitation; these are future product decisions, not implemented challenge requirements. |

## Reproduction and scope

The public `tools/e2e.html` is a DOM-driving harness and `tools/e2e.sh` supplies the documented Chromium flags. Extended acceptance ran externally against the root HTML using installed Playwright and Chrome: ordinary file navigation, offline network context, real and reduced-motion runs, and screenshots at all six widths. Private logs retain before/after failures and successes; they are not submission materials. No dependencies were installed for this audit.

Run `python3 tools/build.py`, `bash tools/e2e.sh`, then `bash tools/release.sh`. Verify MANIFEST.sha256 after any change. Use current manifest bytes, not an older QA statement, to identify a release. Publication verification is recorded in the private final audit because the published commit and ZIP cannot embed their own resulting hash.
