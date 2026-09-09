# IQly — Measurement specification

## Primary metric

**Headline metric, as the brief states it: account creations / page visits (production decision on verified accounts per eligible new visitor).** Three denominators are named below and never mixed: the brief-literal accounts ÷ `page_view` (every load counted), the prototype session CVR, and the production decision metric.

**Account Creation CVR = distinct eligible sessions with `signup_complete` ÷ distinct eligible sessions with `landing_view`.** This is the brief's metric ("Account creations / Page visits") made operational at the session level; it is what the prototype logs. The brief's literal denominator is also logged: `page_view` fires on every load, reload and return (never deduplicated), so **accounts ÷ `page_view`** is reported next to the session metric under its own name. The session metric decides in the prototype because a raw page-load denominator punishes any variant that makes people reload or come back; the two are reported together so that gap is visible rather than hidden.

**Production decision metric (visitor level):** distinct eligible new visitors who create a **verified** account within seven days of first exposure ÷ distinct eligible new visitors first exposed in the enrollment window. Seven days is a chosen attribution window (returning visitors convert later), not a benchmark; cohorts mature before the final read. The session metric above and accounts per raw page load are reported alongside under their own names; the three denominators are not interchangeable. Signup-first arm (Test 3): the account is counted even when the quiz never starts; its funnel is P(account | landing) with completion and `result_view` per account as quality terms, never the post-quiz product.

- **Unit of randomization:** visitor (first-party id in localStorage/cookie; in production a server-set id hashed from a cookie), randomised before any treatment is shown: the assignment is made on the first request, before `landing_view` renders, and never re-drawn. In the prototype each variant is a separate file, so assignment is by file; the `variant` field is stamped on every event.
- **Unit of analysis:** session (one `sid`), counted once per event type where the event is marked `once`.
- **Session:** begins at the first `landing_view` for a given `sid`; the prototype keeps one `sid` per browser per variant until the debug "Reset session" is used. Production: 30-minute inactivity timeout, new `sid` on timeout, same visitor id.
- **Duplicate submissions:** `signup_complete` fires at most once per session (client guard: `submitting` flag + `once` set); production de-duplicates by email hash server-side.
- **Refresh:** restores the current screen from stored state and fires `resume_restored`; it never fires a second `landing_view` or `quiz_start` for the same session.
- **Resumed sessions:** counted in the original session (same `sid`); they inflate nothing.
- **Eligibility:** new visitors only (no prior IQly visitor id); every exposed visitor stays in its arm, including bounces, non-starters, invalid submits and signup-first non-finishers.
- **Internal/test traffic:** production excludes sessions with `?debug=1`, staff IP ranges and known QA user agents. Every exclusion is defined before the test and applied identically to every arm (arm-blind); none may depend on anything the treatment could change, so there is no post-treatment selection.
- **Bots (production):** exclude sessions with `quiz_complete` under a minimum plausible duration (e.g. < 15 s for 12 items), no `question_view` sequence, or headless UA signatures. Report the excluded share.
- **Intention-to-treat:** every session that saw `landing_view` counts in the denominator of its assigned variant, whether or not it started.
- **Assignment persistence:** the variant id is part of the storage namespace (`iqly.<variant>.*`), so a session cannot silently switch arms.

## Event taxonomy (implemented in the prototype; visible in `?debug=1`)

Common properties on every event: `name`, `t` (ms epoch), `sid`, `attempt` (1-based; incremented by a retake, so a second attempt's step events can be separated from the first without changing the once-per-session KPI flags), `variant`, `screen`, `dev`, `kw` (when known), `props`, `once`. **The email address is never sent as a property**; `signup_complete` carries only a hash of the domain.

**Pre-registered segments (v3.1).** `dev` and `kw` are first-touch session constants stamped on every event. `dev` is the ad platform's device class when the landing URL carries Google Ads ValueTrack `dev={device}` (`m` / `t` / `c` → `mobile` / `tablet` / `desktop`); otherwise a declared client proxy (coarse pointer, or a viewport narrower than 768 px → `mobile`). `kw` is the bid keyword from ValueTrack `kw={keyword}` (fallback `utm_term`), lower-cased, spaces to hyphens, allow-listed to `[a-z0-9-]{1,40}`, otherwise absent; it is the campaign's keyword, never the user's typed query, and it is not hashed because it is a two-level category (`free-iq-test` vs `iq-test`), not an identifier. `gclid` is not stored in the prototype; in production it is the join key for uploading verified accounts as offline conversions. Both fields survive reloads and log truncation because they live in the session state, not in the event log; the e2e suite asserts that an injected value such as `<script>` is dropped and never echoed, that `free+iq+test` becomes `free-iq-test`, and that `dev=c` beats the client proxy.

| Event | Trigger | Required props | Dedup | Why it matters |
|---|---|---|---|---|
| page_view | every page load, before any restore logic (the first event of every load) | screen (the stored screen being restored, or `LANDING`), reload (a state already existed) | every | the brief's literal denominator ("page visits"); reload and return behaviour |
| landing_view | landing rendered | gate (`gate` = control, `score-first` = Test 1, `pre-quiz` = Test 3), disclosure (`block` / `line`), questions | once/session | session denominator |
| landing_disclosure_view | disclosure rendered (block above the CTA, or the one-line form under it) | prominence | once | disclosure exposure for Test 3 |
| landing_cta_click | Start button | — | every | landing→intent |
| quiz_start | first question about to show (after the account in the signup-first arm) | questions | once | start rate |
| question_view | question rendered | q, id, cat | every | drop-off curve |
| answer_selected | first answer on a question | q, id, option | every | engagement |
| answer_changed | answer replaced | q, id, option | every | uncertainty, Back usage |
| question_answered | any answer | q, id | every | per-item completion |
| question_skipped | Skip | q, id | every | difficulty signal |
| back_click | Back | from | every | navigation friction |
| quiz_25 / quiz_50 / quiz_75 | reaching 25/50/75% | — | once | milestones |
| quiz_complete | last question answered | raw, answered, skipped, ms | once | completion rate, duration; skipped is reported separately from incorrect |
| scoring_view / scoring_complete | calculating screen shown / done | — | once | transition loss |
| result_teaser_view | result screen before the account | raw, mode (`gate` / `score-first`), revealed (what the screen shows: `raw,sample,by_area` on the control gate; `raw,band,rank,by_area,why_range` in the score-first arm) | once | gate exposure; `revealed` makes the arms' value moments comparable |
| result_details_open | a collapsed section on the result screen opened (sample explanation / "Why a range, not a number" / "Your answers by area") | which | every | curiosity spent before the CTA; diagnostic only |
| history_view | "Your attempts" opened on the full result | attempts | once | does the account's history payload get used |
| storage_unavailable | the browser blocked or failed a verified storage write; the page says "kept for this tab only" on the gate screen, the score-first result and the full result | reason | once | honest-save rate; environments where persistence is impossible |
| result_insufficient | fewer than half the questions answered → no band shown | answered | every | data quality; skip abuse |
| signup_view | signup screen shown | gate | once | exposure |
| signup_start | first keystroke in email | — | once | form engagement |
| signup_submit | submit attempted | — | every | attempts |
| signup_error | validation failed | reason | every | friction and fake-email attempts |
| signup_complete | prototype account created (localStorage write verified by read-back) | marketing, persisted, email_domain_hash | once | **numerator**; `persisted:false` means the tab is the only copy. Browser persistence, not a server account (see the mapping below) |
| result_view | full result shown after account | raw, band, revealed (`raw,band,rank,review,history`) | once | did the account deliver value |
| account_deleted | the "Delete my account and data from this browser" control on the full result, after confirmation; every `iqly.<variant>.*` key is removed and the page reloads to a clean landing | attempts | every | the signup screen's "you can delete your account and data at any time" is a behaviour |
| result_copy | copy result | — | every | sharing intent |
| quiz_restart | retake | — | every | engagement/quality |
| resume_restored | state restored on load, or "Continue where you left off" on the landing | screen, q | once | refresh handling |

**Prototype events and their production counterparts.** The prototype proves event semantics and trigger locations; it does not prove data durability, ownership or identity. `signup_complete` (`persisted:true`) means a syntactically valid email was written to this browser's storage and read back. In production the same moment splits into `account_created_server` (the server accepted the email and issued an id: the raw account count), then `email_verified` (the sign-in link was clicked: the **decision metric**), then `full_result_view` (`result_view` here). A variant is judged on the verified event; `signup_complete` and `account_created_server` are diagnostics of the funnel above it. `page_view` maps one-to-one to a server-side page hit; `landing_view` and the other once-per-session events are computed from the session id.

## Funnel metrics (all per variant, ITT)

quiz_start / landing_view · question_answered(q=1) / landing_view · quiz_complete / quiz_start · result_teaser_view / quiz_complete · signup_view / result_teaser_view (the gate rate) · signup_start / signup_view · signup_complete / signup_view · **signup_complete / landing_view (primary)** · result_view / signup_complete. Decision metric in production: verified accounts (magic-link click) / landing_view.

## Quality guardrails (production)

Verified-email rate (magic-link click) · disposable-domain share · duplicate-account rate · result_view / signup_complete · retake rate · unsubscribe and complaint rate · downstream engagement (return within 7 days) · CPA by channel · policy complaints.

**How the KPI can be gamed:** any variant that makes it easy to type `a@a.aa` inflates `signup_complete`. The prototype only checks syntax; production must count *verified* accounts as the decision metric and treat raw `signup_complete` as diagnostic. A variant that wins on raw accounts and loses on verified accounts is a loss.

## Experimentation integrity

Once-per-session flags are stored separately from the event log (which is capped at 500 entries), so a truncated log can never re-fire a milestone such as `landing_view`; the local log is diagnostic and production counts from server-side events. The flags are per session, not per attempt: a retake never re-fires `quiz_start`, `quiz_complete` or `signup_complete` (one conversion per session), and the retake funnel is read from the step events whose `attempt` field is greater than 1. Stable assignment; A/A test before the first A/B; sample-ratio-mismatch check (chi-square on arm counts vs intended split) daily; logging validation (each arm fires the same event set in the same order — the offline e2e suite in `tools/e2e.sh` asserts this); one primary KPI declared in advance; guardrails declared in advance; fixed horizon or a pre-registered sequential method (no peeking-and-stopping); no post-hoc redefinition of success; pre-registered segments: device (ad-platform `m` / `t` / `c`, client proxy as fallback) and keyword group (`free iq test` vs `iq test`), each reported per arm with its own sample-ratio check; no ship decision is made on a segment, because none of the three tests is powered for one. An unresolved sample-ratio mismatch blocks interpretation until its cause is found. Minimum run: the longer of two full weekly cycles (weekday/weekend mix, and Google Ads' campaign learning period) and the pre-computed sample, plus the maturation of the final cohort (the seven-day verified-account window) before the final read; no outcome-driven extension; step metrics are read only after the primary call, as diagnostics of the mechanism. Sequential option: if a test must be read before its horizon, the pre-registered method is an always-valid (mSPRT) p-value in the sense of Johari, Pekelis and Walsh, never a repeated fixed-horizon look. Holdout: once a winner ships, a 10% long-run holdout of the original control stays live across the sequence of shipped winners to measure cumulative lift; within a single test the control is the holdout.

**Sample size (illustration, not a forecast).** IQly has no baseline, so no number below predicts its conversion rate; base rates and effects are grid points chosen to show how the required sample scales (about (1−p)/(p·r²) for a base rate p and a relative effect r) and which effects are affordable at launch traffic. Two-proportion z-test, two-sided α = 0.05, power 0.80, n per arm; conversions per arm = n × base rate. One convention for every decision: the two-sided 95% interval of the primary metric; the Test 1 non-inferiority margin is read on the same interval (equivalent to a one-sided 2.5% test) and sized on it. At most one worked break-even illustration appears in any challenge-facing document; the rest stay symbolic. Once a baseline exists the same formula is run on the observed rate; the prototype's debug export provides the schema for that baseline.

| Base rate (accounts ÷ landing views) | 10% relative lift | 20% relative lift | 30% relative lift |
|---|---|---|---|
| 5% | 31,200 per arm (1,560 conversions) | 8,200 (410) | 3,800 (190) |
| 10% | 14,800 (1,480) | 3,800 (380) | 1,800 (180) |
| 20% | 6,500 (1,300) | 1,700 (340) | 770 (150) |

Reading: the conversions column shows why the vendor heuristic "200 conversions per arm" is a floor that detects only ≈30% effects; at launch traffic only architecture-level bets (gate placement, quiz length, signup timing) are testable, which is why the three tests are those and copy dials expected to move the KPI by 5–10% are backlog. **Non-inferiority is the most expensive call in the portfolio:** Test 1's rule (score-first ships if the 95% interval on its verified-account CVR is not below the control's by more than 10% relative) needs, at a true difference of zero, about 29,800 per arm at a 5% base rate, 14,100 at 10% and 6,300 at 20% (read on the two-sided 95% interval, i.e. one-sided α = 0.025, power 0.80; the one-sided 5% figures first written, 23,500 / 11,100 / 4,900, under-sized the stated rule by about a quarter and were corrected in v5). The 5% margin first written would have quadrupled those numbers (about 119,000 / 56,500 / 25,100), so the margin was widened to 10% (the trust dividend of showing the result free is worth up to a tenth of the accounts, not more) and the rule carries a fallback: until traffic supports the non-inferiority read, score-first ships only if it wins.

## Prototype limitations (honest)

Events live in localStorage and can be exported as JSON from the debug panel; nothing is transmitted. Account creation is simulated: syntax validation only, stored in the browser after a verified write (read-back), no verification of ownership, no server, no cross-device state; if the browser blocks storage the account and result exist for the tab only and the page says so. Every completed attempt is kept locally and listed under the account. `?nostorage=1` is a QA hook that simulates a browser with blocked storage. The rank shown is an illustrative estimate from the prototype's mapping and is labelled so on the screen; production computes it from IQly's own first-attempt distribution, displays the sample size, hides it until n is in the hundreds, and updates it as more people take the test (which is also the account's stated reason to exist). The range bands come from one rule (`bandIndex`: 85 / 70 / 40% of items correct), chosen so that the top band means "at most one wrong" at both quiz lengths (11 of 12, 7 of 8); the cut-points are prototype choices, not norms. In the control the range and rank are rendered only after the account; the gate screen contains no hidden or blurred values (verified by the e2e suite). Under blocked storage (`?nostorage=1`, Safari private mode) nothing survives a reload, so `page_view.reload` is always false and `attempt` restarts at 1 on every load; the "kept for this tab only" line says so to the user.
