# IQly — Experiment contracts (v4, 2026-09-06)

One contract per test, same 24 fields. The paragraphs in `writeups/part2-ab-tests-writeup.pdf` are the short form; this file is what an analyst would pre-register. Every rate below is a **hypothetical illustration** used for break-evens and sizing; IQly has no baseline. Shared conventions: the primary metric is Account CVR = sessions with `signup_complete` ÷ sessions with `landing_view` (intention-to-treat, session level; accounts ÷ `page_view` reported alongside); in production the decision is made on verified accounts per eligible new visitor within seven days; every decision is read from the 95% confidence interval of the primary metric, never from the point estimate; step metrics are read after the primary call. Sizing formula: two-proportion z-test, α = 0.05 two-sided, power 0.80; the grid in `MEASUREMENT-SPEC.md` gives, per arm, 31,200 / 8,200 / 3,800 visitors at a 5% base rate for 10 / 20 / 30% relative lifts, 14,800 / 3,800 / 1,800 at 10%, and 6,500 / 1,700 / 770 at 20%.

## Test 1 — Result gating: disclosed gate (control) vs score-first · `variant-1-score-first.html`

| # | Field | Contract |
|---|---|---|
| 1 | Strategic question | How much of the earned result must be delivered before asking the user for identity? |
| 2 | Why this uncertainty matters | The gate on the range and rank is the screen with the largest lever on signup per finisher, and the control's whole economics rest on it; the category has trained "free iq test" searchers to expect a trap, so the gate could also be the control's largest trust cost. Nothing in the research sizes either side. |
| 3 | Hypothesis | Showing the range and rank free raises trust, starts and email validity but removes the reason to sign up at the moment of highest interest, so Account CVR falls; the arm is worth its spend because a category this distrusted could make trust worth more than curiosity. |
| 4 | User-psychology mechanism | Control: curiosity plus a disclosed, fair exchange (the user knew before question 1). Variant: reciprocity after value received, with "save, review, updating rank" as the only reason to give an email. |
| 5 | Exact control | Landing block "Free to take. Free account at the end." → 12 questions → gate screen (count line, one explanation, account card) → email-only account → full result. |
| 6 | Exact variant | Landing lead "Your IQ range and rank the moment you finish." and block "What is free, and what needs an account" → 12 questions → result screen with range, curve and rank free, review hidden, account card "Save this result and unlock the answer review" → account → full result. |
| 7 | Exactly what changes | The gate: whether the range and rank render before the account (`CONFIG.gate`). |
| 8 | Variables that unintentionally change | The landing promise and the account card must describe the arm truthfully (declared coupling: 14 changed lines); the account's value proposition shrinks in the variant; the result screen is longer, so the CTA sits lower (888 vs 635 px at 375×667). |
| 9 | Primary metric | Account CVR (verified accounts in production). |
| 10 | Guardrails | Verified-email rate, disposable-domain share, `result_view` after signup, complaint rate; starts must not collapse in the control (a disclosed gate that reads as a trap). |
| 11 | Unit of randomization | Visitor (first-party id); in the prototype, by file. |
| 12 | Exposure definition | `landing_view` in the assigned arm. |
| 13 | Success condition | Score-first ships if the 95% interval on its verified-account CVR is not below the control's by more than 10% relative and the guardrails hold; until traffic supports that non-inferiority read, it ships only if it wins outright. |
| 14 | Rejection condition | The interval sits below the control by more than 10% relative, or verified-email rate falls, or `result_view` after signup falls. |
| 15 | Inconclusive result | The interval spans both a 10% loss and a gain: keep the control, extend only if the pre-registered horizon allows, otherwise record and move to the next test. |
| 16 | Important segments | Device (mobile vs desktop) and keyword group (`free-iq-test` vs `iq-test`), reported per arm with their own sample-ratio check; no ship decision on a segment. |
| 17 | Practical MDE | Non-inferiority margin 10% relative (the trust dividend is worth at most a tenth of the accounts); superiority read at 10% relative. |
| 18 | Expected traffic requirement (illustration) | At a true difference of zero the 10% margin needs about 23,500 visitors per arm at a 5% base rate, 11,100 at 10%, 4,900 at 20% (one-sided α = 0.05, power 0.80); the 5% margin first written would have needed four times that. |
| 19 | Statistical approach | Two-proportion z on the ITT session metric; 95% interval decides; fixed horizon set from the observed base rate after two weeks of baseline; daily sample-ratio-mismatch check. |
| 20 | False-positive risk | One primary metric, one pre-registered rule; step metrics and segments are diagnostics; the risk that "trust" reads as a win on raw accounts is closed by deciding on verified accounts. |
| 21 | Underpowering risk | High: non-inferiority at low base rates is the most expensive read in the portfolio; a noisy null is not "no effect", hence the fallback rule in field 13. |
| 22 | Sequential-peeking policy | No repeated fixed-horizon looks. If a read is needed before the horizon, an always-valid (mSPRT) p-value, pre-registered; SRM checked daily on arm counts only. |
| 23 | Interactions with other experiments | Test 3 acts on the same exchange (timing); run Test 1 first, then Test 3 against the winning gate. Test 2 interacts with the gate through score resolution; shared creative copy ("a short test") keeps acquisition constant. |
| 24 | What to test next | If score-first wins: the account payload framing (review vs save-only). If the gate wins: a coarse band before the gate (raw count plus "above average") as the middle arm. |

## Test 2 — Quiz length: 12 questions (control) vs an 8-item balanced short form · `variant-2-eight-questions.html`

| # | Field | Contract |
|---|---|---|
| 1 | Strategic question | Does reducing effort from twelve items to eight raise end-to-end Account CVR enough to justify a coarser result? |
| 2 | Why this uncertainty matters | Length acts on the two largest early terms, starts (a shorter honest promise) and completion (fewer break-offs), and against the last: a shorter test can feel less worth an email, and eight items are less internally consistent. Only the completion cost of length has a measured size anywhere; the credibility effect has none. |
| 3 | Hypothesis | Completion rises by more than the gate rate falls, so Account CVR rises; if it does not, effort is buying credibility rather than costing it. |
| 4 | User-psychology mechanism | Break-off in a phone test concentrates in the last, hardest minutes; a shorter form ends before fatigue. Against it: perceived effort is part of what makes the result feel worth an email. |
| 5 | Exact control | Twelve items, three per area, easy → hard; landing says "12 questions · ~5 min". |
| 6 | Exact variant | Eight items sampled from the same bank across the same difficulty tiers and areas (three easy, two medium, three hard; two per area; keyed positions never adjacent); landing says "8 questions · ~3 min". Gate, disclosure, signup, result and scoring rule identical. |
| 7 | Exactly what changes | The item count and the count/duration copy that must follow it (`CONFIG.questionCount`, `CONFIG.items`; 32 changed lines). |
| 8 | Variables that unintentionally change | This is **primarily a friction test, not a pure length test**: the arms differ in which items appear, in score resolution (one item is 12.5 points instead of 8.3), and in the milestones' positions. The band rule is defined so the top band means "at most one wrong" in both arms (11/12, 7/8), which removes one confound but not the others; result stability is therefore a named guardrail. |
| 9 | Primary metric | Account CVR (verified accounts in production). |
| 10 | Guardrails | Band-distribution shift between arms, retake rate, verified-email rate, `result_teaser_view` → `signup_view` (the credibility signal). |
| 11 | Unit of randomization | Visitor; in the prototype, by file. |
| 12 | Exposure definition | `landing_view` in the assigned arm; the shared creative says "a short test" rather than a count so both arms receive the same traffic. |
| 13 | Success condition | Ship 8 if the 95% interval on verified-account CVR lies above the control's and `result_teaser_view` → `signup_view` does not fall by more than 5% relative. |
| 14 | Rejection condition | The interval includes zero or lies below, or the gate rate falls by more than 5% relative, or the band distribution shifts in a way that would change what the product promises. |
| 15 | Inconclusive result | Interval spans zero with the gate rate flat: keep 12 (the credibility default), note the completion gain, queue the 16-item arm. |
| 16 | Important segments | Device (mobile is where break-off concentrates) and keyword group; diagnostics only. |
| 17 | Practical MDE | 20% relative: shortening the instrument is a material product change and should not ship on a small effect. |
| 18 | Expected traffic requirement (illustration) | About 3,800 visitors per arm at a 10% base rate for a 20% relative lift, 8,200 at 5%, 1,700 at 20%; minimum run the longer of two full weekly cycles and that sample. |
| 19 | Statistical approach | Two-proportion z on ITT sessions; per-question drop-off curve and median completion time as step diagnostics; band distribution compared as a guardrail, not a metric to optimise. |
| 20 | False-positive risk | Standard at α = 0.05; the larger risk is causal: attributing a win to "length" when composition or resolution did it, which is why the contract names them. |
| 21 | Underpowering risk | Moderate; a 20% MDE is affordable at plausible base rates. |
| 22 | Sequential-peeking policy | Fixed horizon; mSPRT if an early read is required; daily SRM on arm counts. |
| 23 | Interactions with other experiments | Strong interaction with the gate architecture (Test 1): a coarser result behind a gate changes what the account unlocks; run against the winning gate. |
| 24 | What to test next | If 8 wins: 6 vs 8 only after calibration work, otherwise stop. If 12 wins or the gate rate falls: 16 items as the credibility arm. |

## Test 3 — Signup timing: after the last question (control) vs before question 1 · `variant-3-signup-first.html`

| # | Field | Contract |
|---|---|---|
| 1 | Strategic question | Does capturing identity before any effort produce more valid accounts per visit than asking after the last question, once accounts that never reach a result are discounted? |
| 2 | Why this uncertainty matters | It is the strongest version of the lever the brief's own example (signup after question 3) points at, it can move the KPI by a multiple rather than a few percent, and reasonable operators disagree about it (two research briefs call an early wall a start-killer; one reports operators profitably moving a paid wall first). |
| 3 | Hypothesis | Raw accounts rise (every starter meets the ask before any attrition) while verified accounts and the share of accounts that reach a result fall; the guardrail decides. |
| 4 | User-psychology mechanism | Commitment and attrition avoidance (an account made before effort is not lost to break-off) against cost-before-value reactance for "free" intent and the category's trap expectation. |
| 5 | Exact control | Landing "Free account at the end." → quiz → gate screen → account → full result. |
| 6 | Exact variant | Landing "Free to take. Free account first." with the bullet "Free account (email only, no password) before question 1: your result, rank and answer review are saved to it the moment you finish"; CTA "Create free account and start" → signup screen ("Create your free account to start the test") → quiz → full result directly after the last question, no gate screen. `quiz_start` fires only when question 1 shows. |
| 7 | Exactly what changes | Where the account step sits relative to the quiz (`CONFIG.gate = 'pre-quiz'`; 16 changed lines: the landing lead, block and CTA label). |
| 8 | Variables that unintentionally change | The landing copy must describe the timing (declared); the account exists without a finished quiz, so the arm's funnel is P(account | landing) with completion and result reach as quality terms, never the post-quiz product. Test 1 asks how much to give before the ask; this test asks when to ask: two levers of the same exchange, stated as such. |
| 9 | Primary metric | Account CVR from the landing view, counting the account even when no quiz starts; verified accounts in production. |
| 10 | Guardrails | Verified-email rate; accounts that reach a result ÷ accounts (an account that never sees a result is not growth); disposable-domain share; complaints. |
| 11 | Unit of randomization | Visitor; in the prototype, by file. |
| 12 | Exposure definition | `landing_view`; acquisition (the ads) must be held constant, because an early ask can change who clicks through from display. |
| 13 | Success condition | Ship signup-first if the 95% interval on verified-account CVR lies above the control's by more than 5% relative **and** at least the control's share of accounts reaches a result. |
| 14 | Rejection condition | The raw lift disappears on verified accounts, or result reach per account drops below the control's. |
| 15 | Inconclusive result | Small account gain with a small quality loss: keep the control (value first), record the trade, run the milder placement (after question 3) next. |
| 16 | Important segments | Keyword group above all (the "free" intent is where reactance is predicted) and device; diagnostics only. |
| 17 | Practical MDE | 20% relative on verified accounts: an architectural change with a quality cost should not ship on a marginal lift. |
| 18 | Expected traffic requirement (illustration) | About 3,800 visitors per arm at a 10% base rate for a 20% relative lift (8,200 at 5%); if the effect is the multiple the mechanism allows, far fewer. |
| 19 | Statistical approach | Two-proportion z on ITT; the result-reach guardrail as a second proportion with its own interval; SRM daily. |
| 20 | False-positive risk | Less about p-values than about metric gaming: a nominal win that is really an earlier numerator. The guardrail and the verified decision metric close that door. |
| 21 | Underpowering risk | Low if the effect is architectural; the guardrail proportion (result reach) is the term more likely to be underpowered, so it is read as an interval too. |
| 22 | Sequential-peeking policy | Fixed horizon; mSPRT if an early read is required; no early stop on raw accounts. |
| 23 | Interactions with other experiments | Strong with Test 1 (both act on the exchange): run Test 1 first and Test 3 against the winning gate; the creative must not mention the account's timing. |
| 24 | What to test next | If signup-first wins: the ask after question 3 (the brief's example) as the milder placement. If it loses: disclosure prominence on the landing (block vs one line under the CTA, both shippable). |

## Why these three uses of experiment traffic

The KPI is a product of three terms: the share who start, the share of starters who finish, and the share of finishers who sign up. Each test moves a different lever of that product with a plausible effect large enough to be affordable at launch traffic: Test 1 the amount of value delivered before the ask (the signup term), Test 2 the effort required (the completion term, with the start term through the promise), Test 3 the timing of the ask (the whole product collapses into P(account | landing), with quality as the guardrail). Each has a genuine falsification condition under which the control loses, each is decided on verified accounts, and each declares the coupled copy that must change with the variable. A first-question-as-entry arm was the strongest candidate not chosen: at 375×667 the disclosure block and a matrix item cannot share the first viewport, so that arm would change the entry architecture and the disclosure exposure at once, which the brief's "one hypothesis at a time" forbids; it is the first follow-up if the entry stage turns out to be the weakest term.
