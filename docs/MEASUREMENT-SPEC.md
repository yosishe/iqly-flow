# IQly — Measurement specification (final reconciliation, 10 September 2026)

## Three distinct metrics

| Metric | Numerator | Denominator | Scope |
|---|---|---|---|
| Brief-literal accounts/page visits | Simulated `signup_complete` events | Every `page_view`, including reloads | Local prototype diagnostic; no real accounts |
| Prototype session conversion | Distinct `sid` with `signup_complete` | Distinct `sid` with `landing_view` | Persistent browser/variant session, not a unique person |
| Proposed production decision metric | Eligible new visitors with a verified account within seven days of first exposure | All eligible new visitors assigned and exposed during enrollment | Visitor-level intention-to-treat; not implemented or measured here |

The challenge specifies the first metric. The third is a proposed quality-aware shipping rule, not an instruction received from Arpeely. Report all three under their own names. Raw page views are not interchangeable with sessions or visitors. Clearing storage, changing browser/device or opening another standalone variant creates another prototype identity; no population CVR is estimated from QA traffic.

**Assignment and analysis.** The prototype has four manually selected files and no randomization. Production would randomize a stable first-party visitor ID before showing treatment, keep assignment across visits, and analyze at visitor level. Prototype analysis uses `sid`; it survives reloads and retakes until reset/deletion, with no inactivity timeout. Production sessions may have a 30-minute timeout but do not change the visitor-level primary denominator. Server-side account identity and deduplication would need implementation; hashing an email is not by itself proof of distinct people.

**Eligibility and exclusions.** Define new-visitor eligibility, staff/QA exclusions and known bot signals before exposure. Apply them consistently without using outcomes the treatment could change. Every eligible exposed visitor stays in the assigned denominator: bounces, non-starters, invalid submissions and signup-first non-finishers included. Fast completion, missing question sequences, skips and unusual event order are diagnostics to investigate, not automatic exclusions. Report excluded shares and reasons, separately from these diagnostics. Do not silently drop fast participants from the shorter arm.

**Persistence and events.** `signup_complete` is once per stored session; `page_view` fires on every load. Once flags survive the 500-event log cap. Retakes increment `attempt` without creating another conversion; step events describe later attempts. Deletion clears this variant's keys, then reload creates fresh anonymous state/events. Other variants are separate. Blocked storage keeps state in memory only. A read-back confirms a browser write, not a server account or email ownership.

**Segments.** `dev` uses declared ad-device m/t/c or the documented viewport/coarse-pointer proxy. `kw` accepts lowercase letters, digits and hyphens up to 40 characters, with spaces normalized; this is syntax filtering, not a two-value whitelist. A future campaign should send only its fixed keyword categories (`free-iq-test`, `iq-test`), never personal values. No `gclid` is stored. Device/keyword comparisons are exploratory; no segment-level shipping decision is powered here.

## Implemented event taxonomy

Common fields: name, timestamp, sid, attempt, variant, screen, dev, optional kw, props and once. No typed email in events or debug exports; the account object itself contains the email locally. A domain hash is a diagnostic and is not a guarantee of anonymity. There is no analytics endpoint.

| Event | Trigger | Required props | Dedup | Why it matters |
|---|---|---|---|---|
| page_view | every page load, before any restore logic (the first event of every load) | screen (the stored screen being restored, or `LANDING`), reload (a state already existed) | every | the brief's literal denominator ("page visits"); reload and return behaviour |
| landing_view | landing rendered | gate (`gate` = control, `score-first` = Test 1, `pre-quiz` = Test 3), disclosure (`block` / `line`), questions | once/session | session denominator |
| landing_disclosure_view | disclosure rendered (block above the CTA, or the one-line form under it) | prominence | once | disclosure exposure; prominence is a backlog test |
| landing_cta_click | Start button | — | every | landing→intent |
| quiz_start | first question about to show (after the account in the signup-first arm) | questions | once | start rate |
| question_view | question rendered | q, id, cat | every | drop-off curve |
| answer_selected | first answer on a question | q, id, option | every | engagement |
| answer_changed | answer replaced | q, id, option | every | uncertainty, Back usage |
| question_answered | any answer | q, id | every | per-item completion |
| question_skipped | Skip | q, id | every | difficulty signal |
| back_click | Back | from | every | navigation friction |
| quiz_25 / quiz_50 / quiz_75 | reaching 25/50/75% | — | once | milestones |
| quiz_complete | last question answered or skipped | raw, answered, skipped, ms | once | completion rate, duration; skipped is reported separately from incorrect |
| scoring_view / scoring_complete | calculating screen shown / done | — | once | transition loss |
| result_teaser_view | result screen before the account | raw, mode (`gate` / `score-first`), revealed (what the screen shows: `raw,sample,by_area` on the control gate; `raw,band,rank,by_area,why_range` in the score-first arm) | once | gate exposure; `revealed` makes the arms' value moments comparable |
| result_details_open | a collapsed section on the result screen opened (sample explanation / "Why a range, not a number" / "Your answers by area") | which | every | curiosity spent before the CTA; diagnostic only |
| history_view | "Your attempts" opened on the full result | attempts | once | does the account's history payload get used |
| storage_unavailable | the browser blocked or failed a verified storage write; the page says "kept for this tab only" on the gate screen, the score-first result and the full result | reason | once | honest-save rate; environments where persistence is impossible |
| result_insufficient | fewer than half the questions answered → no band shown | answered | every | data quality; skip abuse |
| signup_view | signup screen shown | gate | once | exposure |
| signup_start | first keystroke in email | — | once | form engagement |
| signup_submit | submit attempted | — | every | attempts |
| signup_error | validation failed | reason | every | syntax friction; intent and ownership are unknown |
| signup_complete | prototype account created (localStorage write verified by read-back) | marketing, persisted, email_domain_hash | once | **numerator**; `persisted:false` means the tab is the only copy. Browser persistence, not a server account (see the mapping below) |
| result_view | full result shown after account | raw, band, revealed (`raw,band,rank,review,history`) | once | did the account deliver value |
| account_deleted | the shared account deletion control on every screen after signup, after confirmation; every `iqly.<variant>.*` key is removed and the page reloads to a fresh anonymous landing | attempts | every | the signup screen's "you can delete your account and data at any time" is a behaviour |
| result_copy | copy result | — | every | sharing intent |
| quiz_restart | retake | — | every | engagement/quality |
| resume_restored | state restored on load, or "Continue where you left off" on the landing | screen, q | once | refresh handling |

## Production mapping and funnel terms

A production server would distinguish account creation from verified email ownership. Proposed `account_created_server`, `email_verified` and full-result events are not implemented. Do not equate local `signup_complete` with verification.

For post-quiz arms: starts/landings × completions/starts × signup-screen views/completions × accounts/signup-screen views describes the local path. **Gate entry** is signup views/result-teaser views; **form conversion** is accounts/signup views. These are different conditional rates. In signup-first, measure accounts/landings directly, then quiz starts/account and full results/account. Do not force that arm into a post-quiz funnel.

Production primary: verified accounts within seven days / eligible exposed visitors. Conditional guardrails (verification/account, full result/account) are useful product-quality constraints but condition on treatment-affected groups: a change is not a causal effect on an identical set of people. Also report full results per eligible visitor. No quality-adjusted arithmetic silently replaces the stated primary metric.

## Prospective experiment protocol

No live A/B test, user study, commercial conversion or revenue result was produced. QA verifies behavior only. Start with instrumentation validation and an A/A, inspect assignment counts and sample-ratio mismatch (SRM), and resolve discrepancies before interpreting effects. Validate the expected event sequence separately for each arm: signup-first intentionally changes order and does not emit the pre-account teaser.

Run these as separate, sequential decisions with fresh traffic, not overlapping tests presented as independent. The shipped files all compare with the submitted control; applying later tests to an earlier winner requires a new generated and verified control. Declare one visitor-level primary, the guardrails, minimum duration, sample and stopping rule before enrollment. Use a fixed horizon: at least two weekly cycles, the precomputed sample, and seven days for the last cohort to mature. The two-week choice covers a weekday/weekend mix; it is not a guaranteed ad-platform learning period. No outcome-driven extension, early stopping, or switching to a sequential method after seeing results. An always-valid design is a future alternative to select before enrollment.

Use two-sided 95% intervals for risk ratios (variant/control); the lower endpoint is the shipping boundary. Zero is a difference-null; one is a ratio-null. When counts are too small or zero, use a preselected appropriate interval instead of blindly applying a log formula. The planned primary rules are:

- Test 1: lower bound >0.90, with account-quality guardrails. The 10% tolerance is a product policy for a possible trust benefit, not an estimated benefit. If superiority-only (>1.00) is chosen for budget reasons, choose and size that protocol before collecting test data. Inconclusive means keep control.
- Test 2: primary lower bound >1.00 and gate-entry ratio lower bound >0.95. This makes the existing 5% credibility-loss tolerance explicit; an uncertain guardrail keeps control. Inspect distribution shifts before shipping, without pretending they measure IQ validity.
- Test 3: primary lower bound >1.05 and full-result/account ratio lower bound >=1.00. The original zero-loss quality policy is deliberately strict: if true quality is exactly equal, more traffic cannot give 80% power to prove a positive margin. A permissible non-inferiority margin would require a separate product decision before enrollment; it is not silently supplied here.

Hard integrity failures, material complaints or broken functionality block shipping. Quantitative tolerances for complaint/disposable-domain guardrails need baseline data and an agreed operating policy before production enrollment. A passing prototype is not a production experiment approval. If either primary or a required guardrail is inconclusive, retain the control. Rejecting a candidate is not proof that it is inferior.

Each individual test uses 95% intervals; there is no promise of 95% simultaneous coverage across three tests, many guardrails or exploratory segments. A joint portfolio claim would require a separately specified multiplicity procedure. Step metrics diagnose mechanisms after the primary decision; they cannot rescue a failed primary.

## Recomputed planning illustrations

These are approximate counts **per arm**, not traffic forecasts. Use a log-risk-ratio normal approximation consistently with the ratio decision: `n = ceil((z(.975)+z(.80))² × [(1-pT)/pT+(1-pC)/pC] / log(RR_true/RR_boundary)²)`, with equal arms, pT=pC×RR_true. This is an algebraic planning approximation for 80% power; final production sizing should check the chosen interval's operating characteristics and budget every required guardrail. It is not the previous risk-difference approximation relabelled as a ratio calculation.

| Control verified rate | True +10%, boundary 1.00 | True +20%, boundary 1.00 | True +30%, boundary 1.00 | Equal rates, NI boundary 0.90 | True +20%, Test 3 boundary 1.05 |
|---|---:|---:|---:|---:|---:|
| 5% | 31,263 | 8,186 | 3,807 | 26,869 | 15,260 |
| 10% | 14,768 | 3,857 | 1,790 | 12,727 | 7,190 |
| 20% | 6,520 | 1,693 | 781 | 5,657 | 3,155 |

For example, the 10%/20%-lift zero-boundary illustration expects about 386 control conversions and 463 treatment conversions. It does not establish that 200 conversions is universally sufficient. Test 3's +5% shipping boundary needs about 7,190/arm under the same assumed 20% true lift, before the quality guardrail budget. A +20% MDE is a planning alternative, not a +20% minimum shipping threshold for Test 2.

The normal/log ratio interval convention is documented in the [statsmodels two-independent-proportion interval reference](https://www.statsmodels.org/stable/generated/statsmodels.stats.proportion.confint_proportions_2indep.html). Numbers above are this submission's own calculations, not benchmarks from that source. Current requirements: [official brief](https://challenge.arpeely.com/index.html).
