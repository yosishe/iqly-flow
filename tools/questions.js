/* IQly question bank — v2 (2026-09-03), revised after a blind adversarial review (authoring notes, not shipped).
   Original items, no copyrighted material. 12 items, 4 categories × 3, difficulty tiers 1→3, interleaved.
   Every item: exactly one keyed answer; `why` documents the rule for review and is STRIPPED from the shipped file.
   `alt` is a neutral description for assistive tech and must never state the rule.
   Option order is FIXED (deterministic scoring). Keyed positions (1-based): 3,2,1,4,5,4,2,1,4,6,3,5 — no adjacent repeats.
   Option counts: matrices 6, series 6, logic 5, spatial 5. Raw score is not chance-corrected. Per-area counts
   (3 items each) are shown as a breakdown only — three items cannot measure a strength (reliability ≈ .3), so the
   product never calls them a "profile" or "strongest area". `explain` is the user-facing explanation shown in the
   post-account answer review; `why` is reviewer-facing and stripped from shipped files.
*/
var IQLY_QUESTIONS = [
  /* ---------- TIER 1 ---------- */
  { id: 'M1', cat: 'pattern', tier: 1,
    prompt: 'Which tile completes the grid?',
    alt: 'A three by three grid of tiles containing circles, squares or triangles in varying numbers. The last tile is missing.',
    stim: { type: 'matrix', cells: [
      ['circle',1],['circle',2],['circle',3],
      ['square',1],['square',2],['square',3],
      ['triangle',1],['triangle',2],null ] },
    options: [ ['triangle',2], ['square',3], ['triangle',3], ['circle',3], ['triangle',1], ['triangle',4] ],
    key: 2,
    explain: 'Each row keeps one shape, and the number of shapes grows 1, 2, 3 across the row. The missing tile needs three triangles.',
    why: 'Row rule: shape constant per row; column rule: count 1,2,3. Missing = three triangles. Distractors break exactly one rule each.' },

  { id: 'N1', cat: 'numerical', tier: 1,
    prompt: 'What number comes next?',
    stim: { type: 'series', terms: [3, 6, 12, 24, '?'] },
    options: ['36', '48', '30', '42', '96', '32'],
    key: 1,
    explain: 'Each number is double the one before it: 24 × 2 = 48.',
    why: 'Each term doubles. 24×2 = 48. 36/42/30 are additive guesses, 96 skips a step, 32 is a power-of-two lure. Familiar pattern, acceptable for tier 1.' },

  { id: 'L1', cat: 'logical', tier: 1,
    prompt: 'Every glimp is striped. Nothing striped is heavy. Which statement must be true?',
    stim: { type: 'text' },
    options: ['No glimp is heavy', 'Some heavy things are glimps', 'Everything striped is a glimp', 'Every heavy thing is striped', 'Some glimps are not striped'],
    key: 0,
    explain: 'Every glimp is striped, and nothing striped is heavy, so no glimp can be heavy.',
    why: 'Celarent: all G are S; no S are H; therefore no G are H. Option 2 contradicts the conclusion; 3 reverses the first inclusion; 4 contradicts premise 2; 5 contradicts premise 1. v3 (2026-09-05): the second blind review found options 2 and 4 near-duplicates and option 5 self-contradictory, so 4 and 5 were replaced with distinct single-premise violations. Nonsense nouns are original.' },

  { id: 'S1', cat: 'spatial', tier: 1,
    prompt: 'Which option is the same shape as the figure shown, only rotated (not flipped)?',
    alt: 'A figure made of four squares: three squares stacked vertically with a fourth square attached to the right of the bottom square.',
    stim: { type: 'poly', cells: [[0,0],[0,1],[0,2],[1,2]] },
    options: [
      { cells: [[1,0],[1,1],[1,2],[0,2]] },           /* J = mirror image */
      { cells: [[0,0],[1,0],[2,0],[1,1]] },           /* T */
      { cells: [[1,0],[2,0],[0,1],[1,1]] },           /* S */
      { cells: [[0,0],[1,0],[2,0],[0,1]] },           /* L rotated 90° clockwise ✓ */
      { cells: [[0,0],[1,0],[1,1],[2,1]] }            /* Z */
    ],
    key: 3,
    explain: 'Only option 4 is the same L-shape turned a quarter turn. Option 1 is a mirror image, which turning alone cannot produce; the others are different shapes.',
    why: 'Only option 4 is a proper rotation of the L-tetromino. Option 1 is its mirror image (J), which no 2-D rotation produces; 2, 3 and 5 are different tetrominoes.' },

  /* ---------- TIER 2 ---------- */
  { id: 'M2', cat: 'pattern', tier: 2,
    prompt: 'Which tile completes the grid?',
    alt: 'A three by three grid of arrows with different fills and pointing in different directions. The last tile is missing.',
    stim: { type: 'arrows', cells: [
      ['outline','up'],['outline','right'],['outline','down'],
      ['solid','up'],['solid','right'],['solid','down'],
      ['stripe','up'],['stripe','right'],null ] },
    options: [ ['stripe','up'], ['solid','down'], ['outline','down'], ['stripe','left'], ['stripe','down'], ['solid','left'] ],
    key: 4,
    explain: 'Along each row the arrow turns a quarter turn clockwise (up, right, down) and keeps its fill. Row three is striped, so the missing tile is a striped arrow pointing down.',
    why: 'Fill is constant along each row (stripe in row 3); direction rotates 90° clockwise along each row (up→right→down) and is constant down each column. Both readings give striped-down. Each distractor breaks one rule.' },

  { id: 'N2', cat: 'numerical', tier: 2,
    prompt: 'What number comes next?',
    stim: { type: 'series', terms: [5, 6, 8, 11, 15, '?'] },
    options: ['18', '19', '21', '20', '24', '22'],
    key: 3,
    explain: 'The gaps grow by one each time: +1, +2, +3, +4. The next gap is +5, so the answer is 20.',
    why: 'Differences grow by one: +1, +2, +3, +4, then +5 → 20. 19/21 are off-by-one, 18 repeats +3, 24 doubles the last difference, 22 is +7.' },

  { id: 'L2', cat: 'logical', tier: 2,
    prompt: 'Five runners finished a race. Maya finished before Dan. Dan finished before Lee. Kim finished after Lee. Sam finished before Maya. Who finished third?',
    stim: { type: 'text' },
    options: ['Maya', 'Dan', 'Lee', 'Sam', 'Kim'],
    key: 1,
    explain: 'Putting the clues in order gives Sam, Maya, Dan, Lee, Kim. Dan finished third.',
    why: 'Chain: Sam < Maya < Dan < Lee < Kim (fully determined). Third = Dan.' },

  { id: 'S2', cat: 'spatial', tier: 2,
    prompt: 'A square sheet is folded once along the dotted line (top half down over the bottom half). A hole is then punched through the folded sheet. What does the sheet look like unfolded?',
    alt: 'A square with a horizontal dotted fold line through the middle. The folded packet is shown with one punched hole.',
    stim: { type: 'fold', folds: ['h'], punch: [0.75, 0.75] },
    options: [
      { holes: [[0.75,0.75],[0.75,0.25]] },   /* mirror across horizontal fold ✓ */
      { holes: [[0.75,0.75],[0.25,0.75]] },   /* mirror across vertical (wrong axis) */
      { holes: [[0.75,0.75]] },               /* forgot the fold */
      { holes: [[0.75,0.75],[0.25,0.25]] },   /* point reflection */
      { holes: [[0.75,0.75],[0.75,0.25],[0.25,0.75],[0.25,0.25]] } /* too many */
    ],
    key: 0,
    explain: 'Folding the top half down means the punch goes through both halves at the same distance from the fold, so the two holes mirror each other across the middle line.',
    why: 'A horizontal fold mirrors the punch across the horizontal midline: (0.75,0.75) → (0.75,0.25). Option 2 mirrors across the wrong axis, 3 ignores the fold, 4 reflects through the centre, 5 assumes two folds.' },

  /* ---------- TIER 3 ---------- */
  { id: 'M3', cat: 'pattern', tier: 3,
    prompt: 'Which tile completes the grid?',
    alt: 'A three by three grid of tiles; each tile has dots in some of its four corners. The last tile is missing.',
    stim: { type: 'dots', cells: [
      ['TL','TR'], ['TR','BL'], ['TL','BL'],
      ['BR'], ['TL'], ['TL','BR'],
      ['TL','TR','BR'], ['TR','BL'], null ] },
    options: [ ['TL','TR','BL','BR'], ['TR','BL','BR'], ['TL','BR'], ['TL','BL','BR'], ['TL','TR','BL'], ['BL','BR'] ],
    key: 3,
    explain: 'In each row, the third tile keeps the corners that appear in exactly one of the first two tiles; a corner both tiles share drops out. For row three that leaves top-left, bottom-left and bottom-right.',
    why: 'Rule: third tile = symmetric difference (XOR) of the first two. Row 1: {TL,TR}⊕{TR,BL}={TL,BL} ✓ (union would give three corners, so union is refuted). Row 2: {BR}⊕{TL}={TL,BR} ✓ (no shared corner). Row 3: {TL,TR,BR}⊕{TR,BL}={TL,BL,BR}. v3 (2026-09-05): the second blind review showed the v2 grid also satisfied "every column has 7 dots" (pointing to option 1) and "every row has 6 dots" (pointing to a one-dot tile that was not offered). The new row 2 breaks both: row dot totals are 6, 4, 8 and column totals 6, 5, 7, so no arithmetic rule fits and only XOR explains both complete rows. Distractors: 1 = union (refuted by row 1), 2 drops TL, 3 = row-2 tile copied, 5 drops BR, 6 drops TL. No option duplicates a row-3 tile.' },

  { id: 'N3', cat: 'numerical', tier: 3,
    prompt: 'What number comes next?',
    stim: { type: 'series', terms: [2, 9, 4, 11, 8, 13, '?'] },
    options: ['15', '17', '12', '18', '10', '16'],
    key: 5,
    explain: 'Two sequences are interleaved: 2, 4, 8 (doubling) and 9, 11, 13 (adding 2). The next number continues the doubling sequence: 16.',
    why: 'Two interleaved sequences: 2,4,8,… (×2) and 9,11,13,… (+2). Position 7 belongs to the doubling chain → 16. 15 and 17 continue the wrong chain; 12/18/10 are additive lures. 14 was removed as a distractor because 2,4,8→14 (differences +2,+4,+6) was a defensible alternative.' },

  { id: 'L3', cat: 'logical', tier: 3,
    prompt: 'In a village, everyone who owns a boat also owns a net. Nobody who owns a net owns a car. Tom lives in the village and owns a car. Which statement must be true?',
    stim: { type: 'text' },
    options: ['Tom owns a boat', 'Tom owns a net', 'Tom does not own a boat', 'Tom owns a net but no boat', 'Tom owns a boat but no net'],
    key: 2,
    explain: 'Tom owns a car, so he cannot own a net (net owners never own cars). Anyone with a boat owns a net, so Tom cannot own a boat.',
    why: 'car → no net (contrapositive of net → no car); no net → no boat (contrapositive of boat → net). So Tom owns no boat. Options 2 and 4 give Tom a net (impossible); 5 gives him a boat without a net (impossible).' },

  { id: 'S3', cat: 'spatial', tier: 3,
    prompt: 'A square sheet is folded twice: first the top half down, then the left half over the right half. A hole is punched through the folded sheet. What does the sheet look like unfolded?',
    alt: 'A square with two dotted fold lines. The folded packet is shown with one punched hole.',
    stim: { type: 'fold', folds: ['h','v'], punch: [0.85, 0.85] },
    options: [
      { holes: [[0.85,0.85],[0.15,0.85]] },                              /* only vertical unfold */
      { holes: [[0.85,0.85],[0.85,0.15]] },                              /* only horizontal unfold */
      { holes: [[0.6,0.6],[0.4,0.6],[0.6,0.4],[0.4,0.4]] },              /* four holes, wrong (inner) positions */
      { holes: [[0.85,0.85]] },                                          /* ignores folds */
      { holes: [[0.85,0.85],[0.15,0.85],[0.85,0.15],[0.15,0.15]] }       /* both ✓ */
    ],
    key: 4,
    explain: 'Two folds make four layers. Each fold mirrors the hole across its fold line, so one punch leaves four holes, one near each corner.',
    why: 'Two perpendicular folds → four holes, each the mirror image across the respective fold lines: corners at 0.15/0.85. Option 3 has the right count but places holes near the centre; 1 and 2 undo only one fold; 4 ignores both.' }
];
