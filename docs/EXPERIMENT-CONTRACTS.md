# IQly — Prospective experiment contracts (10 September 2026)

Three standalone variants retain their original variables. No production experiment has run. These are proposed contracts, with production launch decisions explicitly identified in MEASUREMENT-SPEC.md. The prototype records simulated accounts/page views and session conversion separately; the production primary is seven-day verified accounts per eligible exposed new visitor (visitor-level ITT). All interval rules below use the variant/control risk ratio. The measurement specification defines stopping, exclusions, sizing, uncertainty and guardrails; its final reconciliation supersedes earlier estimates.

## Test 1 — Result gating: disclosed gate (control) vs score-first · `variant-1-score-first.html`

| # | Field | Contract |
|---|---|---|
| 1 | Strategic question | How much of the earned result must be delivered before asking the user for identity? |
| 2 | Why this uncertainty matters | The free-value/account-value exchange determines whether the account earns an email. Historical competitor observations show several architectures, not their relative conversion performance. |
| 3 | Hypothesis | Score-first may increase trust and starts but weaken the account ask; the net verified-account effect is unknown. |
| 4 | User-psychology mechanism | Disclosed exchange and curiosity versus value-first reciprocity. Working account value is full review and local history; an updating population rank would be future functionality. |
| 5 | Exact control | Landing block "Free to take. Free account at the end." → 12 questions → gate screen (count line, one explanation, account card) → email-only account → full result. |
| 6 | Exact variant | Landing lead "Your IQ range and rank the moment you finish." and block "What is free, and what needs an account" → 12 questions → result screen with range, curve and rank free, review hidden, account card "Save this result and unlock the answer review" → account → full result. |
| 7 | Exactly what changes | The gate: whether the range and rank render before the account (`CONFIG.gate`). |
| 8 | Variables that unintentionally change | Truthful landing/account copy and the amount of free result content change together. The score-first result is longer, so placement and payload are coupled; this tests an offer architecture, not psychology in isolation. |
| 9 | Primary metric | Seven-day verified accounts / eligible exposed visitors in production; prototype metrics separate. |
| 10 | Guardrails | Verified-email rate, disposable-domain share, `result_view` after signup, complaint rate; starts must not collapse in the control (a disclosed gate that reads as a trap). |
| 11 | Unit of randomization | Visitor (first-party id); in the prototype, by file. |
| 12 | Exposure definition | `landing_view` in the assigned arm. |
| 13 | Success condition | Ship only when the primary ratio lower 95% bound >0.90 and guardrails hold. A superiority-only >1.00 protocol is an alternative to choose and size before enrollment, never after reading results. |
| 14 | Rejection condition | Do not ship if the primary or a required guardrail fails its rule. This can reflect uncertainty rather than proven inferiority. |
| 15 | Inconclusive result | Keep control. No outcome-driven extension; any new test has a new protocol. |
| 16 | Important segments | Device (mobile vs desktop) and keyword group (`free-iq-test` vs `iq-test`), reported per arm with their own sample-ratio check; no ship decision on a segment. |
| 17 | Practical MDE | 10% relative NI tolerance is a product-policy choice for a hypothesized trust benefit; it is not an MDE or measured trust dividend. |
| 18 | Expected traffic requirement (illustration) | Equal true verified rates and a 0.90 ratio boundary: approximate 26,869 / 12,727 / 5,657 per arm at control rates 5% / 10% / 20%. See the recomputed log-ratio formula in MEASUREMENT-SPEC.md. |
| 19 | Statistical approach | Visitor-level ITT in production, fixed horizon and risk-ratio intervals; prototype sid-level QA is separate. |
| 20 | False-positive risk | One primary metric, one pre-registered rule; step metrics and segments are diagnostics; the risk that "trust" reads as a win on raw accounts is closed by deciding on verified accounts. |
| 21 | Underpowering risk | Substantial at low traffic. A nonsignificant difference does not establish non-inferiority. |
| 22 | Sequential-peeking policy | Fixed horizon; no early efficacy read. A sequential design must be chosen before enrollment. |
| 23 | Interactions with other experiments | Run first. A later timing or length test against a winner requires a freshly generated control. Existing creatives promote the submitted 12-question control. |
| 24 | What to test next | If score-first wins: the account payload framing (review vs save-only). If the gate wins: a coarse band before the gate (raw count plus "above average") as the middle arm. |

## Test 2 — Quiz length: 12 questions (control) vs an 8-item balanced short form · `variant-2-eight-questions.html`

| # | Field | Contract |
|---|---|---|
| 1 | Strategic question | Does reducing effort from twelve items to eight raise end-to-end Account CVR enough to justify a coarser result? |
| 2 | Why this uncertainty matters | A shorter test can reduce effort but also change the perceived value of the result. Neither effect has been measured for IQly. |
| 3 | Hypothesis | Completion rises by more than the gate rate falls, so Account CVR rises; if it does not, effort is buying credibility rather than costing it. |
| 4 | User-psychology mechanism | Less effort may reduce break-off; a shorter result may feel less worth an email. Both mechanisms are hypotheses. |
| 5 | Exact control | Twelve items, three per area, easy → hard; landing says "12 questions · ~5 min". |
| 6 | Exact variant | Eight items sampled from the same bank across the same difficulty tiers and areas (three easy, two medium, three hard; two per area; keyed positions never adjacent); landing says "8 questions · ~3 min". Gate, disclosure, signup, result and scoring rule identical. |
| 7 | Exactly what changes | The item count and the count/duration copy that must follow it (`CONFIG.questionCount`, `CONFIG.items`; 32 changed lines). |
| 8 | Variables that unintentionally change | This is **primarily a friction test, not a pure length test**: the arms differ in which items appear, in score resolution (one item is 12.5 points instead of 8.3), and in the milestones' positions. The band rule is defined so the top band means "at most one wrong" in both arms (11/12, 7/8), which removes one confound but not the others; result stability is therefore a named guardrail. |
| 9 | Primary metric | Seven-day verified accounts / eligible exposed visitors in production; prototype metrics separate. |
| 10 | Guardrails | Band-distribution shift between arms, retake rate, verified-email rate, `result_teaser_view` → `signup_view` (the credibility signal). |
| 11 | Unit of randomization | Visitor; in the prototype, by file. |
| 12 | Exposure definition | First eligible exposure in production. Use a new count-neutral creative held constant across arms; the submitted creatives still say 12 questions and promote the control. |
| 13 | Success condition | Ship only if primary ratio lower 95% bound >1.00 and gate-entry ratio lower bound >0.95, with the other quality checks holding. |
| 14 | Rejection condition | Do not ship if either interval fails its boundary or if a material result-promise problem appears. An interval including one is inconclusive, not proof of no effect. |
| 15 | Inconclusive result | Interval spans zero with the gate rate flat: keep 12 (the credibility default), note the completion gain, queue the 16-item arm. |
| 16 | Important segments | Device and keyword group, exploratory. Mobile-specific drop-off is a hypothesis, not an observed fact. |
| 17 | Practical MDE | 20% relative true lift for planning against a zero-lift null; it is not the minimum shipping lift. |
| 18 | Expected traffic requirement (illustration) | For true +20% against ratio 1.00: approximately 8,186 / 3,857 / 1,693 per arm at control rates 5% / 10% / 20%. The 5% gate-entry guardrail can require more traffic. |
| 19 | Statistical approach | Production visitor ITT; conditional gate entry and band distribution as diagnostics/guardrails, with their selection limitation declared. |
| 20 | False-positive risk | Standard at α = 0.05; the larger risk is causal: attributing a win to "length" when composition or resolution did it, which is why the contract names them. |
| 21 | Underpowering risk | Unknown until baseline and guardrail rates exist. No assertion that launch traffic can afford this test. |
| 22 | Sequential-peeking policy | Fixed horizon and daily assignment-integrity checks; no outcome-driven stopping. |
| 23 | Interactions with other experiments | Strong interaction with the gate architecture (Test 1): a coarser result behind a gate changes what the account unlocks; run against the winning gate. |
| 24 | What to test next | If 8 wins: 6 vs 8 only after calibration work, otherwise stop. If 12 wins or the gate rate falls: 16 items as the credibility arm. |

## Test 3 — Signup timing: after the last question (control) vs before question 1 · `variant-3-signup-first.html`

| # | Field | Contract |
|---|---|---|
| 1 | Strategic question | Does capturing identity before any effort produce more valid accounts per visit than asking after the last question, once accounts that never reach a result are discounted? |
| 2 | Why this uncertainty matters | Moving the ask before effort creates a meaningful tradeoff: less pre-account attrition versus less demonstrated value. An extreme placement is informative but does not dominate the after-question-3 alternative. |
| 3 | Hypothesis | Earlier signup might raise raw accounts while lowering verification or result reach. Direction and size remain unknown. |
| 4 | User-psychology mechanism | Commitment and attrition avoidance (an account made before effort is not lost to break-off) against cost-before-value reactance for "free" intent and the category's trap expectation. |
| 5 | Exact control | Landing "Free account at the end." → quiz → gate screen → account → full result. |
| 6 | Exact variant | Landing "Free to take. Free account first." with the bullet "Free account (email only, no password) before question 1: your result, rank and answer review are saved to it the moment you finish"; CTA "Create free account and start" → signup screen ("Create your free account to start the test") → quiz → full result directly after the last question, no gate screen. `quiz_start` fires only when question 1 shows. |
| 7 | Exactly what changes | Where the account step sits relative to the quiz (`CONFIG.gate = 'pre-quiz'`; 16 changed lines: the landing lead, block and CTA label). |
| 8 | Variables that unintentionally change | The landing copy must describe the timing (declared); the account exists without a finished quiz, so the arm's funnel is P(account | landing) with completion and result reach as quality terms, never the post-quiz product. Test 1 asks how much to give before the ask; this test asks when to ask: two levers of the same exchange, stated as such. |
| 9 | Primary metric | Account CVR from the landing view, counting the account even when no quiz starts; verified accounts in production. |
| 10 | Guardrails | Verified-email rate; accounts that reach a result ÷ accounts (an account that never sees a result is not growth); disposable-domain share; complaints. |
| 11 | Unit of randomization | Visitor; in the prototype, by file. |
| 12 | Exposure definition | `landing_view`; acquisition (the ads) must be held constant, because an early ask can change who clicks through from display. |
| 13 | Success condition | Ship only if primary verified-account ratio lower 95% bound >1.05 and full-result/account ratio lower bound >=1.00. The strict zero-loss guardrail can be inconclusive even when true quality is equal. |
| 14 | Rejection condition | The raw lift disappears on verified accounts, or result reach per account drops below the control's. |
| 15 | Inconclusive result | Keep control on insufficient evidence; consider a separately planned after-question-3 arm. Do not relax the margin after results. |
| 16 | Important segments | Keyword group above all (the "free" intent is where reactance is predicted) and device; diagnostics only. |
| 17 | Practical MDE | Plan under a +20% true effect, but test against the +5% minimum shipping boundary. |
| 18 | Expected traffic requirement (illustration) | For true +20% against boundary 1.05: approximately 15,260 / 7,190 / 3,155 per arm at control rates 5% / 10% / 20%, excluding additional quality-guardrail needs. |
| 19 | Statistical approach | Production visitor ITT; full-result/account with its own interval and full-result/eligible-visitor alongside. Conditional group composition can change. |
| 20 | False-positive risk | Raw accounts can be an earlier numerator without useful product use; verification and explicit quality gates address that risk, but do not eliminate statistical uncertainty. |
| 21 | Underpowering risk | Unknown. At exactly equal result reach, a strict zero-loss lower-bound criterion cannot have 80% power; a tolerated-loss margin is a separate future product decision. |
| 22 | Sequential-peeking policy | Fixed horizon; no early stopping on raw accounts. |
| 23 | Interactions with other experiments | Strong with Test 1 (both act on the exchange): run Test 1 first and Test 3 against the winning gate; the creative must not mention the account's timing. |
| 24 | What to test next | After-question-3 is a credible milder placement whichever extreme wins; alternatively investigate disclosure prominence if comprehension is the issue. |

## Why these three uses of experiment traffic

The portfolio covers amount of value revealed, effort and ask timing. They address consequential uncertainties; no evidence guarantees larger effects than copy or color tests. Score-first remains the strongest direct challenge to the adopted control. Eight items deliberately changes composition and score resolution as well as length. Signup-first exposes an early-account quality risk. Question-first entry, signup after question 3, a coarse free band and disclosure prominence remain credible alternatives. A prior fold check showed one question-first composition competed with disclosure space; it did not prove all such designs impossible or forbidden by the brief. Each later production experiment needs its own held-constant acquisition and freshly verified control.
