**Historical synthesis, corrected 10 September 2026.** The matrix below describes what AI research documents argued, not independent confirmation of their claims. Agreement among models is not replication. Vendor estimates, paid-wall analogies, policy interpretations and psychometric transfers are not evidence of this prototype’s conversion performance. Earlier sample sizes/stopping options are superseded by MEASUREMENT-SPEC.md. No complaint frequency or competitor prevalence estimate is relied on.

# IQly — Research inputs and how they were adjudicated (v3.1, 2026-09-06)

Six research documents informed this submission besides the agent's own sweep (the brief, a mixed historical competitor inventory, complaint corpora, peer-reviewed evidence, ad policy). This file records what each said, where it agrees with the control, where it disagrees, and what changed as a result. Rule: a claim is labelled by its evidence class, not by the tool that produced it. Figures that an AI report quotes from a vendor page without tool access (Ahrefs, SimilarWeb, Unbounce) are [VENDOR ESTIMATE, unverified] and appear in no write-up.

## The inputs

| # | Input | When | What it is | Evidence class |
|---|---|---|---|---|
| R1 | "IQly Growth Funnel Research: Decision Report" (GPT deep research, 49 pp) | 2026-09-03 | Funnel architecture options, break-even framing | [AI SYNTHESIS] of public sources |
| R2 | "Trustworthy Conversion Architecture for a Free Online IQ-Style Test" (GPT, 10 pp) | 2026-09-03 | Trust, disclosure, dark-pattern avoidance | [AI SYNTHESIS] |
| R3 | The candidate's own AI-assisted market research, "IQly / Free IQ Test Market Research" | 2026-09-06 | Intent segments, competitor archetypes, eight ranked test ideas, sizing intuition, sources with confidence notes | [AI SYNTHESIS] |
| R4 | Gemini deep research, "The Architecture of Digital Psychometric Monetization" | 2026-09-06 | Audience (SimilarWeb), self-affirmation theory, monetisation models, paywall A/B practice | [AI SYNTHESIS]; demographics = [VENDOR ESTIMATE] for one competitor site |
| R5 | "IQly AI Builder Challenge — Complete Summary" (origin not stated) | 2026-09-06 | A reading of the brief; three recommended tests; a list of follow-up questions about the brief | [AI SYNTHESIS] |
| R6 | "IQly Funnel Research Brief" (origin not stated) | 2026-09-06 | Keyword volumes (Ahrefs), gate-placement table, form-field benchmark (Unbounce), A/B method, three tests | [AI SYNTHESIS]; figures [VENDOR ESTIMATE] |

R1 and R2 arrived before v2 and drove the gate flip (DECISION-LOG row 17). R3 to R6 arrived after v3 was complete; they reversed nothing and were checked against every decision below.

## Convergence and divergence

| Decision in the control | R1 | R2 | R3 | R4 | R5 | R6 | Verdict → artefact |
|---|---|---|---|---|---|---|---|
| Range and rank behind a free email-only account announced before question one; count line free; nothing blurred | agree | agree (disclose) | agree ("tease then unlock", never blur) | agree (gate at peak investment) | agree (teaser, email-only) | agree ("gate depth, not existence"; a blurred number is the scam pattern) | no change; Test 1 remains the falsification (Part 2) |
| Email only, no password | agree | agree | agree (its Rank 2 test) | — | agree | agree (Unbounce: 1 field 13.4% vs 3 fields 10.1%, [VENDOR ESTIMATE]) | no change; a field-count test is moot, the control already has one field |
| "Free" literally true through the account; no fake proof; no urgency | agree | agree | agree | disagrees in spirit (anchoring, decoys, short trials, for paid products) | agree | agree (Google "Dishonest pricing", effective Oct 2025) | no change; policy date recorded in the authoring notes; R4's paywall tactics rejected (no payment exists) |
| Result gating as Test 1 | #1 | #1 | Rank 1 | placement is its highest-leverage variable | Test 1 | gate table | confirmed; the non-inferiority margin was re-sized (DECISION-LOG 29) |
| Quiz length as Test 2, 12 vs 8 | — | — | Rank 5 (10 vs 15) | "longer = more sunk cost = higher paywall conversion" | Test 2 (16 vs 10) | backlog ("12–15 items") | kept 12 vs 8: IQly-specific completion and credibility effects remain unmeasured; R4's claim comes from paid walls (DECISION-LOG 30) |
| Signup-first as Test 3 | — | — | lists a pre-quiz account wall under *fails* | "some operators doubled revenue by moving the paywall to the beginning" | CTA-framing test instead | "kills starts" | kept: the split is the reason to test; R4's datapoint is a paid wall, a timing analogy only (Part 2, Test 3) |
| Question-1-first landing (skip the hero) | — | — | Rank 3 | — | — | its Test 1 | backlog row 6 re-scored up (Confidence 2 → 3); not chosen because it would put two tests on the entry stage beside Test 3 |
| Signup CTA framing | — | — | Rank 4 | — | Test 3 | — | follow-up (copy-level); Part 2, "not chosen" |
| Device and keyword segments | — | — | "mobile vs desktop always" | segment by channel | — | pre-register device and keyword | **added:** `dev` / `kw` on every event; spec, "Pre-registered segments" (DECISION-LOG 28) |
| Sample size stated? | — | — | order-of-magnitude table only | "200 conversions per arm" heuristic | "do not invent a sample size" | table at a 10% base | **added:** a labelled illustration grid and the non-inferiority sizing (spec) |
| Sticky assignment, SRM, no peeking | — | agree | agree | agree (consistent hashing) | agree | agree (plus novelty, always-valid inference) | present; novelty diagnostic, mSPRT option, holdout and minimum run added to the spec |
| Mid-quiz encouragement | — | — | Rank 6 (truthful only) | praise interstitials (audits found them static) | — | — | backlog row 23 (truthful progress only); the control keeps the task boundary clean (authoring notes, behavioural evidence) |
| Demographics (≈76% male, 25–34) and keyword volumes (≈309K / 76K per month) | — | — | vendor self-reports, caveated | SimilarWeb, one site | — | Ahrefs | authoring notes only, [VENDOR ESTIMATE]; no product decision follows (no gender targeting; age norming is a production step) |
| Self-affirmation theory (Steele 1988) | — | — | "above-average illusion" | central mechanism | — | identity confirmation | authoring notes as a mechanism; no copy change (the result is already precise and never mocking) |

## What v3.1 changed because of the inputs

1. `dev` and `kw` first-touch segments on every event, with an allow-listed keyword sanitiser and ValueTrack precedence (`tools/template.html`; four new e2e assertions per run).
2. Measurement spec: pre-registered segments with per-arm SRM and no segment-level ship decision; a minimum run of two full weekly cycles; a novelty diagnostic; an always-valid (mSPRT) sequential option; a 10% long-run holdout; a labelled sample-size illustration.
3. Test 1's non-inferiority margin widened from 5% to 10% relative after sizing showed the 5% margin needed about 44,500 visitors per arm at a 10% base rate; fallback: score-first ships only if it wins until traffic supports the read.
4. Consistency fixes the review surfaced: the event-type count (30, not 28); the authoring notes' Test 1 rule and Test 2 prior aligned with Part 2.

## Rejected, with the reason

Sunk cost as a case for a longer test (R4: paid-wall data; commitment and sunk-cost effects are small and weakest at an immediate ask; authoring notes) · citing Cronbach's α or "CHC model" badges on the gate as trust signals (R4: no measured α exists for this bank) · hybrid subscription, decoy pricing, trial length (R4: no payment in the product) · copy skewed to a male, 25–34 audience (R4: one site's SimilarWeb estimate; the product does not target by gender) · 16 vs 10 questions (R5) and 10 vs 15 (R3): no sized credibility effect · an urgency timer (R6 itself says "run and probably kill"; Luguri & Strahilevitz 2021 found no effect and a regulatory liability) · a social-proof counter (R3, R6: only with real numbers) · adaptive IRT (R4: prototype complexity, no evidence) · a percentile teaser with the number blurred (R6's Test 3: the control shows nothing blurred by design).

## Accessible primary sources used in the final reconciliation

- [Official IQly challenge brief](https://challenge.arpeely.com/index.html), inspected 10 September 2026: functional flow, one-page Part 1, three variants, three creative dimensions.
- [Official submission form](https://challenge.arpeely.com/submit.html), same date: CV, delivery links/uploads and eligibility attestation. The old /submit path returned 404.
- [Arpeely home](https://www.arpeely.com/), same date: company-described performance acquisition and work on Ace; context, not IQly results.
- [Arpeely about](https://www.arpeely.com/about), same date: company-described engineering and experimentation background.
- [statsmodels interval documentation](https://www.statsmodels.org/stable/generated/statsmodels.stats.proportion.confint_proportions_2indep.html): methods for comparing independent proportions; the sample-size arithmetic in the measurement spec is our own approximation.

The original research provenance was reviewed privately before qualification. Primary psychometric pages were not successfully reverified in this audit; no numerical reliability, standard error, or time-pressure effect is therefore used to justify this bank. Historical observations can generate hypotheses, but cannot establish which control converts better.
