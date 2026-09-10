export const META = {
  "title": "IQly: Conversion flow and A/B decisions",
  "description": "The visitor journey and conversion objective, followed by the decisions, tradeoffs and three proposed experiments.",
  "width": 1280,
  "height": 720,
  "font": "Arial",
  "date": "10 September 2026",
  "prototypeCommit": "3598613f4d84a57df274867067aeb49c25bfdbe9",
  "publicBase": "https://yosishe.github.io/iqly-flow/",
  "colors": {
    "paper": "#F6F2EA",
    "ink": "#1C2331",
    "muted": "#4A5160",
    "yellow": "#FFD23F",
    "green": "#2F7A4F",
    "line": "#D6CFC2",
    "light": "#EFE9DD"
  },
  "coreSlides": 20,
  "revision": "Flow first, then reasoning — 10 September 2026"
};
export const LINKS = [
  {
    "label": "Part 1 explanation",
    "url": "https://yosishe.github.io/iqly-flow/writeups/part1-flow-writeup.pdf",
    "group": "Part 1"
  },
  {
    "label": "Control flow",
    "url": "https://yosishe.github.io/iqly-flow/",
    "group": "Part 1"
  },
  {
    "label": "Part 2 explanation",
    "url": "https://yosishe.github.io/iqly-flow/writeups/part2-ab-tests-writeup.pdf",
    "group": "Part 2"
  },
  {
    "label": "Test 1: Score first",
    "url": "https://yosishe.github.io/iqly-flow/variant-1-score-first.html",
    "group": "Part 2"
  },
  {
    "label": "Test 2: Eight questions",
    "url": "https://yosishe.github.io/iqly-flow/variant-2-eight-questions.html",
    "group": "Part 2"
  },
  {
    "label": "Test 3: Signup first",
    "url": "https://yosishe.github.io/iqly-flow/variant-3-signup-first.html",
    "group": "Part 2"
  },
  {
    "label": "Part 3 explanation",
    "url": "https://yosishe.github.io/iqly-flow/writeups/part3-creatives-writeup.pdf",
    "group": "Part 3"
  },
  {
    "label": "320 × 50 banner",
    "url": "https://yosishe.github.io/iqly-flow/ads/ad-320x50.png",
    "group": "Part 3"
  },
  {
    "label": "250 × 250 creative",
    "url": "https://yosishe.github.io/iqly-flow/ads/ad-250x250.png",
    "group": "Part 3"
  },
  {
    "label": "1080 × 1920 creative",
    "url": "https://yosishe.github.io/iqly-flow/ads/ad-1080x1920.png",
    "group": "Part 3"
  },
  {
    "label": "Public source and supporting records",
    "url": "https://github.com/yosishe/iqly-flow",
    "group": "Source"
  }
];
export const SLIDES = [
  {
    "number": 1,
    "title": "IQly: Conversion flow and A/B decisions",
    "notes": "Start with what a visitor actually experiences. Slides 2–4 walk through the submitted control, including the free/account boundary and delivered value. Slides 5–7 define conversion, show why an intermediate improvement can lose, and distinguish a local signup from a valuable production account. Only then do slides 8–20 explain the choices, experiments and learning process. Slides 21–35 retain the detailed reasoning, alternatives, evidence limits and measurement policy; slide 36 links to all eleven original reviewer artifacts. Screenshots show working prototype behavior, not customer outcomes. The conversion hypothesis remains untested.",
    "sources": [
      {
        "label": "Official challenge brief",
        "url": "https://challenge.arpeely.com/index.html"
      },
      {
        "label": "Flow explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part1-flow-writeup.pdf"
      },
      {
        "label": "A/B test explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part2-ab-tests-writeup.pdf"
      }
    ],
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "IQly",
        "x": 64,
        "y": 62,
        "w": 520,
        "h": 104,
        "size": 84,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "From a free test\nto account value",
        "x": 64,
        "y": 212,
        "w": 645,
        "h": 196,
        "size": 62,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "AI Builder Challenge\nFlow, conversion and the decisions behind them",
        "x": 68,
        "y": 480,
        "w": 620,
        "h": 100,
        "size": 28,
        "color": "#4A5160"
      },
      {
        "type": "image",
        "file": "cover-question.png",
        "alt": "Actual first question in the submitted IQly control",
        "x": 735,
        "y": 166,
        "w": 490,
        "h": 440
      },
      {
        "type": "text",
        "text": "10 September 2026",
        "x": 878,
        "y": 640,
        "w": 320,
        "h": 36,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "Flow and conversion: 2–7. Decisions and tests: 8–20.\nSupporting detail: 21–35. Submission links: 36.",
        "x": 64,
        "y": 610,
        "w": 760,
        "h": 63,
        "size": 21,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "01",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ],
    "section": "The flow and conversion"
  },
  {
    "number": 2,
    "title": "The visitor’s path, from first click to account",
    "notes": "The control opens on a landing page. The brief describes search visitors arriving from “iq test” and “free iq test”; the supplied display creatives offer another acquisition route. The landing discloses twelve questions, an estimated duration, no payment and the account boundary. The untimed quiz permits Back and Skip. On completion, the free result distinguishes correct, incorrect and skipped answers, offers area counts and a worked Q1 explanation. An email-only form creates a local simulated account and reveals the illustrative range/rank, complete answer review and local history. The free/account allocation is shown here before discussing why it was chosen. History requires available browser storage; blocked storage is disclosed. Fewer than half of the questions answered suppresses the illustrative band. An account is not email ownership verification, and no emails are sent. Signup-first changes this sequence in Test 3. None of these functional states demonstrates that real visitors want the account.",
    "sources": [
      {
        "label": "Official challenge brief",
        "url": "https://challenge.arpeely.com/index.html"
      },
      {
        "label": "Submitted flow write-up",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part1-flow-writeup.pdf"
      },
      {
        "label": "Shared prototype source",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/tools/template.html"
      }
    ],
    "section": "The flow and conversion",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "The visitor’s path, from first click to account",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Entry sources: “iq test” / “free iq test” search, or the supplied display creative",
        "x": 64,
        "y": 163,
        "w": 1138,
        "h": 65,
        "size": 27,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "1  Entry",
        "x": 64,
        "y": 279,
        "w": 211,
        "h": 68,
        "size": 28,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "See what is free and what the account unlocks.",
        "x": 64,
        "y": 360,
        "w": 211,
        "h": 195,
        "size": 27,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "→",
        "x": 262,
        "y": 286,
        "w": 28,
        "h": 40,
        "size": 23,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "2  Quiz",
        "x": 299,
        "y": 279,
        "w": 211,
        "h": 68,
        "size": 28,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "12 untimed questions. Back and Skip are available.",
        "x": 299,
        "y": 360,
        "w": 211,
        "h": 195,
        "size": 27,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "→",
        "x": 497,
        "y": 286,
        "w": 28,
        "h": 40,
        "size": 23,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "3  Free value",
        "x": 534,
        "y": 279,
        "w": 211,
        "h": 68,
        "size": 28,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Answer counts, area counts and one worked example.",
        "x": 534,
        "y": 360,
        "w": 211,
        "h": 195,
        "size": 27,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "→",
        "x": 732,
        "y": 286,
        "w": 28,
        "h": 40,
        "size": 23,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "4  Account",
        "x": 769,
        "y": 279,
        "w": 211,
        "h": 68,
        "size": 28,
        "color": "#2F7A4F",
        "bold": true
      },
      {
        "type": "text",
        "text": "Submit one email. A local account is created.",
        "x": 769,
        "y": 360,
        "w": 211,
        "h": 195,
        "size": 27,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "→",
        "x": 967,
        "y": 286,
        "w": 28,
        "h": 40,
        "size": 23,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "5  Reward",
        "x": 1004,
        "y": 279,
        "w": 211,
        "h": 68,
        "size": 28,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Illustrative range/rank, full review and local history.",
        "x": 1004,
        "y": 360,
        "w": 211,
        "h": 195,
        "size": 27,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "The next two slides show this path in the actual prototype. Account creation is local; no email is sent.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "02",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 3,
    "title": "The control before signup",
    "notes": "These are screenshots of the submitted control. The landing states twelve questions, an estimated five minutes, no timer and no payment. It describes the free answer count and the account requirement for the illustrative IQ range/rank and full review. The quiz then presents one question at a time, with a visible counter and progress bar. Back restores previous answers and Skip records a skipped item. These are observed interface properties. Their design rationale follows after the flow and conversion explanation.",
    "sources": [
      {
        "label": "Flow explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part1-flow-writeup.pdf"
      },
      {
        "label": "Decision log",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/DECISION-LOG.md"
      }
    ],
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "The control before signup",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 46,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "image",
        "file": "control-landing.png",
        "alt": "Control landing page disclosing the free quiz and account boundary",
        "x": 64,
        "y": 165,
        "w": 247,
        "h": 495
      },
      {
        "type": "image",
        "file": "control-question-four.png",
        "alt": "Actual question four with progress, Back and Skip",
        "x": 344,
        "y": 165,
        "w": 247,
        "h": 495
      },
      {
        "type": "text",
        "text": "1  Understand the exchange",
        "x": 650,
        "y": 178,
        "w": 558,
        "h": 46,
        "size": 29,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "The landing explains what is free and what the account unlocks before the visitor invests effort.",
        "x": 650,
        "y": 239,
        "w": 546,
        "h": 141,
        "size": 29,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "2  Complete the quiz",
        "x": 650,
        "y": 420,
        "w": 558,
        "h": 46,
        "size": 29,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Twelve questions, no countdown, visible progress and recoverable navigation.",
        "x": 650,
        "y": 481,
        "w": 546,
        "h": 125,
        "size": 29,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "03",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ],
    "section": "The flow and conversion"
  },
  {
    "number": 4,
    "title": "Free value, account creation, delivered value",
    "notes": "The three screenshots continue the visitor journey. The result exposes answer counts and expandable area counts and a sample Q1 explanation. The middle screen accepts an email with the local-simulation disclosure. The right screen shows the delivered answer review and local history after signup; the illustrative range/rank also become available when enough questions were answered. History persists in this browser when storage permits. Email sign-in links and an updating population rank remain future functionality. No live conversion or demand result is shown.",
    "sources": [
      {
        "label": "Flow explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part1-flow-writeup.pdf"
      },
      {
        "label": "Measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      }
    ],
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Free value, account creation, delivered value",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 46,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "3  Counts + sample",
        "x": 64,
        "y": 158,
        "w": 344,
        "h": 42,
        "size": 28,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "4  Email-only account",
        "x": 460,
        "y": 158,
        "w": 344,
        "h": 42,
        "size": 28,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "5  Review + history",
        "x": 854,
        "y": 158,
        "w": 360,
        "h": 42,
        "size": 28,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "image",
        "file": "control-partial-result.png",
        "alt": "Real answer counts and the disclosed account offer",
        "x": 111,
        "y": 210,
        "w": 228,
        "h": 420
      },
      {
        "type": "image",
        "file": "control-signup.png",
        "alt": "Email-only local signup with a visible simulation disclosure",
        "x": 507,
        "y": 210,
        "w": 228,
        "h": 420
      },
      {
        "type": "image",
        "file": "control-review-and-history.png",
        "alt": "The account delivers local attempt history and worked answer explanations",
        "x": 905,
        "y": 210,
        "w": 228,
        "h": 420
      },
      {
        "type": "text",
        "text": "Working value: answer review and local history. Email links and updating population rank remain future functionality.",
        "x": 64,
        "y": 647,
        "w": 1120,
        "h": 54,
        "size": 21,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "04",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ],
    "section": "The flow and conversion"
  },
  {
    "number": 5,
    "title": "Conversion is counted across the whole visit",
    "notes": "The official objective is account creations divided by page visits. The design must serve the visitor’s intent to try a free test while offering a credible reason to create an account. A working offer is evidence of implementation, not evidence that visitors want it. The proposed verified-visitor metric later in this deck is an additional production policy rather than an instruction from Arpeely.\n\nFor a single-visit, post-quiz path with consistent nested counts, accounts/visits decomposes into starts/visits × completions/starts × signup views/completions × accounts/signup views. This is an identity that exposes where loss can offset a local gain; it does not estimate any IQly rate or establish a causal mechanism. The official prototype diagnostic counts signup_complete/page_view, including page reloads in the denominator. A persistent browser-session diagnostic and the proposed seven-day verified accounts per eligible exposed visitor are distinct metrics, fully specified in the appendix. Reloads, retakes and the signup-first ordering must not be squeezed into the simple path equation. QA sessions cannot estimate customer conversion. The original design question remains: what value does the visitor receive freely, and what additional value makes an account worthwhile?",
    "sources": [
      {
        "label": "Official challenge brief",
        "url": "https://challenge.arpeely.com/index.html"
      },
      {
        "label": "Final measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      },
      {
        "label": "Shared prototype source",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/tools/template.html"
      }
    ],
    "section": "The flow and conversion",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Conversion is counted across the whole visit",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "The visitor wants a free test and a useful result.",
        "x": 64,
        "y": 166,
        "w": 1115,
        "h": 50,
        "size": 29,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Account creations / page visits",
        "x": 64,
        "y": 240,
        "w": 1115,
        "h": 75,
        "size": 48,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "For a single-visit, post-quiz path:",
        "x": 64,
        "y": 361,
        "w": 1100,
        "h": 46,
        "size": 27,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "Starts\n/ visits",
        "x": 64,
        "y": 438,
        "w": 265,
        "h": 117,
        "size": 30,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "×",
        "x": 327,
        "y": 453,
        "w": 34,
        "h": 48,
        "size": 30,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "Completions\n/ starts",
        "x": 358,
        "y": 438,
        "w": 265,
        "h": 117,
        "size": 30,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "×",
        "x": 621,
        "y": 453,
        "w": 34,
        "h": 48,
        "size": 30,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "Signup views\n/ completions",
        "x": 652,
        "y": 438,
        "w": 265,
        "h": 117,
        "size": 30,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "×",
        "x": 915,
        "y": 453,
        "w": 34,
        "h": 48,
        "size": 30,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "Accounts\n/ signup views",
        "x": 946,
        "y": 438,
        "w": 265,
        "h": 117,
        "size": 30,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "A gain at one step can be lost at another. No observed IQly conversion rate is claimed. Metric definitions follow in the appendix.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "05",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 6,
    "title": "An intermediate winner can still lose",
    "notes": "All counts on this slide are invented for illustration, not IQly observations. Both arms have 1,000 eligible visitors. Completion rises from 60% to 70% while verified conversion falls from 9% to 8%. This demonstrates why intermediate metrics do not replace the prespecified primary. These example counts do not establish statistical inferiority or authorize a shipping decision. A production decision still needs the agreed interval and quality rules.\n\nFor these hypothetical counts, account conversion conditional on completion is 90/600 = 15% in the control and 80/700 ≈ 11.43% in the shorter arm. The completion gain is offset downstream. This decomposition suggests what to inspect, but it does not establish why the rates differ or whether the difference is statistically meaningful. A valid ship decision uses the prespecified interval and quality rules.\n\nThis example uses the proposed production visitor denominator and verified accounts. It is deliberately distinct from the literal page-visit metric and the offline email syntax check. Verification alone does not establish usefulness; the next slide follows the account into delivered value. At equal acquisition spend in this invented example, cost per verified account would be 90/80 = 1.125 times higher in the shorter arm, despite more completions. That cost consequence is arithmetic, not an observed IQly acquisition cost.",
    "sources": [
      {
        "label": "Measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      },
      {
        "label": "A/B test explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part2-ab-tests-writeup.pdf"
      }
    ],
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "An intermediate winner can still lose",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 46,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Proposed production comparison — hypothetical numbers",
        "x": 64,
        "y": 155,
        "w": 1120,
        "h": 48,
        "size": 28,
        "color": "#4A5160"
      },
      {
        "type": "table",
        "values": [
          [
            "Metric",
            "Control",
            "Shorter quiz"
          ],
          [
            "Eligible visitors",
            "1,000",
            "1,000"
          ],
          [
            "Quiz completions",
            "600",
            "700"
          ],
          [
            "Verified accounts",
            "90",
            "80"
          ],
          [
            "Verified conversion",
            "9%",
            "8%"
          ]
        ],
        "widths": [
          416,
          176,
          196
        ],
        "rowHeights": [
          58,
          72,
          72,
          72,
          72
        ],
        "x": 64,
        "y": 234,
        "w": 788,
        "h": 346,
        "size": 26
      },
      {
        "type": "text",
        "text": "The business question",
        "x": 912,
        "y": 240,
        "w": 300,
        "h": 92,
        "size": 31,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Did more visitors create a verified account?",
        "x": 912,
        "y": 357,
        "w": 293,
        "h": 146,
        "size": 34,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Counts show the tradeoff. The production decision still requires the prespecified primary, quality rules and uncertainty assessment.",
        "x": 64,
        "y": 618,
        "w": 1130,
        "h": 54,
        "size": 21,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "06",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ],
    "section": "The flow and conversion"
  },
  {
    "number": 7,
    "title": "Follow the signup through to delivered value",
    "notes": "The account event marks the challenge conversion, but it is not evidence of demand or commercial value. In this prototype a valid-looking email creates local state. Full answer review and history are implemented benefits; whether visitors use or return to them is unknown. Production would need real email ownership verification, stable assignment and identity handling before measuring the proposed seven-day visitor conversion. Report full-result views per eligible visitor alongside conditional full-result/account so that extra low-engagement accounts cannot hide a loss of delivered value. Conditional groups are changed by treatment and are not the same people. A real business model would then compare acquisition spend per verified account and cohort contribution per eligible visitor, segmented by acquisition source where appropriate. Do not equate a higher email count with more profit. IQly has no observed spend, retention, LTV or revenue in this submission. The existing promise is no payment; a paid report or subscription would require a new disclosed product decision. The primary remains explicit rather than being silently replaced by a composite score. Acquisition, the post-click experience and delivered value should be assessed together, with a clear outcome at each stage.",
    "sources": [
      {
        "label": "Official challenge brief",
        "url": "https://challenge.arpeely.com/index.html"
      },
      {
        "label": "Final measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      },
      {
        "label": "Shared prototype source",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/tools/template.html"
      },
      {
        "label": "Arpeely: first-party acquisition and experimentation description, checked 10 September 2026",
        "url": "https://www.arpeely.com/"
      }
    ],
    "section": "The flow and conversion",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Follow the signup through to delivered value",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "table",
        "values": [
          [
            "Stage",
            "What can be counted",
            "What is still unknown"
          ],
          [
            "Prototype signup",
            "One email accepted; local state saved.",
            "Syntax does not prove ownership or demand."
          ],
          [
            "Delivered value",
            "Full review and local history are available.",
            "Do people use the result or return?"
          ],
          [
            "Production outcome",
            "Seven-day verified accounts / eligible visitors.",
            "Identity and live measurement need implementation."
          ],
          [
            "Economics",
            "Acquisition cost against cohort contribution.",
            "No spend, retention or revenue measured here."
          ]
        ],
        "widths": [
          247,
          468,
          437
        ],
        "rowHeights": [
          55,
          95,
          95,
          95,
          95
        ],
        "x": 64,
        "y": 165,
        "w": 1152,
        "h": 435,
        "size": 24
      },
      {
        "type": "text",
        "text": "Keep the assigned conversion metric. Report result delivery and downstream value alongside it.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "07",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 8,
    "title": "One promise from the ad to the account",
    "notes": "The acquisition promise, landing disclosure, free result and account reward need to describe one coherent offer. “Free” alone can mean no charge, no card, no subscription, no registration or a free core result; the query does not establish which expectation a particular visitor holds. The actual IQly control promises no payment and explicitly requires a free account for the illustrative interpretation and full review. It must not be described as a no-account score-first flow. Search queries can signal existing test interest. A display placement may need to create interest with a concrete sample of the activity; this is a channel hypothesis, not measured audience behavior. The same real puzzle supports message continuity but can prime Q1. The small banner carries a compact offer while the larger formats carry the sample; the landing gives the complete value boundary. Compare channel cohorts and hold acquisition constant within a flow test before attributing an effect to the landing or gate. The supplied creative still promises twelve questions, so a future eight-item comparison needs new count-neutral creative shared by both arms. A high ad click rate with fewer useful accounts per incoming visitor would not validate the promise. The full-screen creative and the post-click experience can be evaluated as connected acquisition surfaces.",
    "sources": [
      {
        "label": "Official challenge brief",
        "url": "https://challenge.arpeely.com/index.html"
      },
      {
        "label": "Submitted creative write-up",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part3-creatives-writeup.pdf"
      },
      {
        "label": "Submitted flow write-up",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part1-flow-writeup.pdf"
      },
      {
        "label": "Shared prototype source",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/tools/template.html"
      },
      {
        "label": "Arpeely: first-party acquisition and experimentation description, checked 10 September 2026",
        "url": "https://www.arpeely.com/"
      },
      {
        "label": "Arpeely: first-party mobile creative description, checked 10 September 2026",
        "url": "https://www.arpeely.com/dtc"
      }
    ],
    "section": "Decisions and experiments",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "One promise from the ad to the account",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "table",
        "values": [
          [
            "Transition",
            "The actual promise",
            "Decision it supports"
          ],
          [
            "Ad → landing",
            "A short, free reasoning test.",
            "Keep the task and effort promise continuous."
          ],
          [
            "Landing → quiz",
            "12 questions; free account at the end.",
            "Show the free/account boundary before effort."
          ],
          [
            "Quiz → result",
            "Counts and a sample explanation are free.",
            "Show what was produced before asking for identity."
          ],
          [
            "Account → reward",
            "Full review and local history.",
            "Deliver now; email links remain future work."
          ]
        ],
        "widths": [
          246,
          402,
          504
        ],
        "rowHeights": [
          55,
          98,
          98,
          98,
          98
        ],
        "x": 64,
        "y": 165,
        "w": 1152,
        "h": 447,
        "size": 24
      },
      {
        "type": "text",
        "text": "Search can bring explicit intent; display may need to create it. Treat this as a channel hypothesis.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "08",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 9,
    "title": "Why the flow could convert",
    "notes": "This is the proposed causal story for the post-quiz control, not an observed conversion result. A visitor must first recognize the promised activity, find the effort acceptable, see enough value to consider the offer and then complete the account step. The design attempts to answer a different uncertainty at each stage. Any stage can fail. A clearer promise might attract fewer starts but more qualified accounts, or simply reduce total conversion. The full funnel determines the outcome. In a single-visit toy path, accounts per visitor is the product of starts/visitor, completions/start, signup-screen views/completion and accounts/signup-screen view. Production verification adds a further quality distinction. Signup-first changes the ordering and must be measured separately. The subsequent tests challenge value allocation, effort and timing rather than treating this story as proof.\n\nReasoning behind the screens shown earlier:\nThe control discloses the account boundary before Start. Visitors answer twelve untimed questions across four areas. Back, Skip, progress and resume support navigation. These are design choices whose conversion effects remain unmeasured. The time estimate is an estimate rather than a human timing study.\n\nThe landing makes the commitment legible before asking for effort. Twelve is a bounded authoring choice, and the duration is an estimate. One question at a time keeps the immediate action clear. A real user could still find the task too long, the items too difficult or the offer unattractive. These are hypotheses for observation, not outcomes established by the screenshot.\n\nBefore an account, the control shows real correct, incorrect and skipped counts, one worked explanation and area counts. The email-only form creates a local simulated account. The account reveals an explicitly illustrative range/rank, the complete answer review and local history. Email delivery, ownership verification, cross-device recovery and an updating population rank are future functionality. The screenshot uses a synthetic demo email.\n\nThe free count acknowledges completed work. The Q1 explanation demonstrates the format of the review instead of asking visitors to trust a list of promised benefits. The account asks for identity in exchange for the remaining interpretation and complete review. A sample can also satisfy curiosity and reduce the reason to sign up. Area counts describe answers and are not an ability profile. The illustrative range and rank are not measured intelligence or a population comparison.",
    "sources": [
      {
        "label": "Official challenge brief",
        "url": "https://challenge.arpeely.com/index.html"
      },
      {
        "label": "Part 1: flow explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part1-flow-writeup.pdf"
      },
      {
        "label": "Final measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      },
      {
        "label": "Prospective experiment contracts",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/EXPERIMENT-CONTRACTS.md"
      }
    ],
    "section": "Decisions and experiments",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Why the flow could convert",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "table",
        "values": [
          [
            "Visitor question",
            "Design response",
            "Expected effect to test"
          ],
          [
            "Is this what I came for?",
            "The ad, landing and task match.",
            "More relevant starts."
          ],
          [
            "Is the effort manageable?",
            "A bounded, untimed quiz with recovery.",
            "More completed attempts."
          ],
          [
            "Is the account worth it?",
            "Real counts and a sample review before the ask.",
            "More visitors who choose the account."
          ],
          [
            "Can I finish the step?",
            "One email field and a clear local result.",
            "Fewer abandoned forms and more result views."
          ]
        ],
        "widths": [
          332,
          433,
          387
        ],
        "rowHeights": [
          58,
          93,
          93,
          93,
          93
        ],
        "x": 64,
        "y": 164,
        "w": 1152,
        "h": 430,
        "size": 24
      },
      {
        "type": "text",
        "text": "These mechanisms can fail or offset each other. The account rate across the whole path is the decision metric.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "09",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 10,
    "title": "The account has to earn the email",
    "notes": "The hypothesis is that explanation and continuity can make an account useful after a short test. In the control, the illustrative interpretation is also part of the account payload. This is a product judgment adopted by the candidate, not a discovered conversion law. The current account persists only in this browser when storage permits. A technically unnecessary email field is a valid challenge to the prototype. A production identity step would need actual continuity, recovery or another benefit. Email sign-in links and an updating population rank are future services and cannot support a claim of delivered value today. Qualitative observation can reveal whether the exchange is understood and why someone refuses it. A small interview sample cannot establish how often useful accounts are created. Test 1 estimates the behavioral comparison only after real assignment and verification exist. Review use, history use, return behavior and result delivery help explain whether the acquired accounts receive value.",
    "sources": [
      {
        "label": "Part 1: flow explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part1-flow-writeup.pdf"
      },
      {
        "label": "Decision log: historical choices and final corrections",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/DECISION-LOG.md"
      },
      {
        "label": "Shared prototype source",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/tools/template.html"
      },
      {
        "label": "Final measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      }
    ],
    "section": "Decisions and experiments",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "The account has to earn the email",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "The positive argument",
        "x": 64,
        "y": 171,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "A visitor may want to understand mistakes and revisit attempts. A sample explanation makes that value inspectable before the ask.",
        "x": 64,
        "y": 215,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "The strongest objection",
        "x": 672,
        "y": 171,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Local saving does not need an email. The prototype simulates identity; it cannot justify the ask through cross-device access or recovery.",
        "x": 672,
        "y": 215,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Why retain the exchange",
        "x": 64,
        "y": 390,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "The challenge asks for account conversion. This is a concrete starting offer, with a complete score-first alternative that can overturn it.",
        "x": 64,
        "y": 434,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "What would change the decision",
        "x": 672,
        "y": 390,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "If people understand the offer and still do not want it, reconsider anonymous results or the payload. Do not invent future benefits.",
        "x": 672,
        "y": 434,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Feature existence is verified. Account demand, retention and the value of saving remain unmeasured.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "10",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 11,
    "title": "Why I changed the control",
    "notes": "The supplied decision record credits the candidate with reopening the original score-first decision and adopting the disclosed gate. AI argued both sides and produced hypothetical break-even arithmetic. The arithmetic depended on assumed rates and did not establish superiority. The original score-first experience remains Test 1. Historical competitor architectures are observations rather than comparable conversion evidence.\n\nThe starting control was chosen under uncertainty. Giving the range away first could build trust and make the free-test promise more literal. The disclosed gate could preserve a stronger reason to create an account, but could also cause distrust or fake addresses. The candidate adopted the gate after AI developed both arguments. Neither competitor prevalence nor the illustrative rates prove it is better. The historical 16-of-19 prevalence assertion was withdrawn. Changing the starting policy while retaining its strongest rival is the defensible process claim.",
    "sources": [
      {
        "label": "Decision log",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/DECISION-LOG.md"
      },
      {
        "label": "AI worklog and attribution",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/AI-WORKLOG.md"
      },
      {
        "label": "A/B test explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part2-ab-tests-writeup.pdf"
      }
    ],
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Why I changed the control",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 46,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Original approach",
        "x": 64,
        "y": 164,
        "w": 538,
        "h": 38,
        "size": 25,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "Show the range\nbefore signup",
        "x": 64,
        "y": 222,
        "w": 540,
        "h": 151,
        "size": 43,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Adopted control",
        "x": 694,
        "y": 164,
        "w": 514,
        "h": 38,
        "size": 25,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "Give real counts,\nthen ask for an account",
        "x": 694,
        "y": 222,
        "w": 514,
        "h": 151,
        "size": 43,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "The judgment",
        "x": 64,
        "y": 410,
        "w": 1120,
        "h": 38,
        "size": 25,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "A free range might spend the main reason to register before the ask. A disclosed exchange deserved a direct comparison.",
        "x": 64,
        "y": 460,
        "w": 1125,
        "h": 111,
        "size": 32,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "The reversal did not prove the replacement better. Test 1 preserves the strongest competing approach.",
        "x": 64,
        "y": 615,
        "w": 1130,
        "h": 54,
        "size": 21,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "11",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ],
    "section": "Decisions and experiments"
  },
  {
    "number": 12,
    "title": "Why these three tests come first",
    "notes": "The portfolio was selected to challenge three different terms in the product argument: what is free, how much work precedes the result and when identity is requested. The third test evolved from disclosure prominence to signup timing. A prominent-versus-compact disclosure remains a valid future comparison, but the adopted choice asks a broader question about the account exchange. That does not establish that its effect is larger or that color and copy cannot matter. Signup after question three is another credible position; the early and late extremes do not dominate it. Question-first entry and a coarse free band were deferred, not disproved. These tests interact. In production, begin with the gate comparison, then generate a fresh control if a later test is run against its winner. The existing files all compare with the submitted control. AI reports informed the competing hypotheses; their agreement is not independent behavioral evidence.",
    "sources": [
      {
        "label": "Prospective experiment contracts",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/EXPERIMENT-CONTRACTS.md"
      },
      {
        "label": "Decision log: historical choices and final corrections",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/DECISION-LOG.md"
      },
      {
        "label": "AI worklog and final attribution",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/AI-WORKLOG.md"
      }
    ],
    "section": "Decisions and experiments",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Why these three tests come first",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Amount of value",
        "x": 64,
        "y": 171,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Score-first challenges the gate: does earlier free value earn enough verified accounts to justify giving up gated curiosity?",
        "x": 64,
        "y": 215,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Amount of effort",
        "x": 672,
        "y": 171,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Eight questions tests whether reduced effort outweighs any loss in perceived value. It also changes item composition and resolution.",
        "x": 672,
        "y": 215,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Moment of the ask",
        "x": 64,
        "y": 390,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Signup-first tests capture before quiz attrition against asking before demonstrated value. It can create accounts that never reach a result.",
        "x": 64,
        "y": 434,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Why defer smaller changes",
        "x": 672,
        "y": 390,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Copy, color and disclosure prominence remain plausible. The chosen portfolio addresses the core exchange; larger effects are not guaranteed.",
        "x": 672,
        "y": 434,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "These are three learning questions. The prototype has complete variants; no production A/B test has run.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "12",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 13,
    "title": "Three experiments around the same flow",
    "notes": "The four standalone files share the bank, scoring mapping and template. Test 1 changes free result content, Test 2 uses the existing eight-item subset, and Test 3 moves the same account step before the quiz. Necessary truthful copy and layout are coupled to those choices. The prototype is manually selected by file and has no production randomization. Run the tests as separate decisions. If an earlier winner becomes a later control, regenerate and verify that new comparison.",
    "sources": [
      {
        "label": "A/B test explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part2-ab-tests-writeup.pdf"
      },
      {
        "label": "Experiment contracts",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/EXPERIMENT-CONTRACTS.md"
      },
      {
        "label": "Measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      }
    ],
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Three experiments around the same flow",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 46,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "table",
        "values": [
          [
            "Flow",
            "Questions",
            "Account moment",
            "Value before the account"
          ],
          [
            "Control",
            "12",
            "After the quiz",
            "Counts and one explanation"
          ],
          [
            "Test 1: Result gating",
            "12",
            "After the quiz",
            "Counts, range and rank"
          ],
          [
            "Test 2: Quiz length",
            "8",
            "After the quiz",
            "Counts and one explanation"
          ],
          [
            "Test 3: Signup timing",
            "12",
            "Before question 1",
            "The disclosed offer"
          ]
        ],
        "widths": [
          301,
          147,
          290,
          414
        ],
        "rowHeights": [
          58,
          91,
          91,
          91,
          91
        ],
        "x": 64,
        "y": 158,
        "w": 1152,
        "h": 422,
        "size": 25
      },
      {
        "type": "text",
        "text": "One main choice per arm, with stated copy/layout coupling.\nShipping bounds below use variant/control rate ratios and two-sided 95% intervals.",
        "x": 64,
        "y": 614,
        "w": 1130,
        "h": 54,
        "size": 21,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "13",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ],
    "section": "Decisions and experiments"
  },
  {
    "number": 14,
    "title": "Test 1: Result gating",
    "notes": "The proposed production primary is seven-day verified accounts per eligible exposed new visitor. Use the lower endpoint of a two-sided 95% interval for the variant/control risk ratio. Test 1 preserves the policy that this lower bound must exceed 0.90 and account-quality guardrails must hold. The 10% loss tolerance is a policy for a possible trust benefit, not measured value or an MDE. Production still needs guardrail operating tolerances. A superiority-only alternative must be chosen and sized before enrollment.\n\nWhy tolerate a possible small loss? The chosen policy assigns possible value to a more generous free experience. That benefit has not been measured, so the tolerance needs an explicit business owner in production. A lower bound above 0.90 limits the loss compatible with the interval; it does not prove superiority or measure trust. Verified-email rate, disposable-domain share, result use and complaints remain quality checks, with operating tolerances agreed before enrollment. If the primary or a required guardrail is inconclusive, keep the control. If score-first passes, test the account payload next; if the gate remains, a coarse free band is a credible middle option.",
    "sources": [
      {
        "label": "A/B test explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part2-ab-tests-writeup.pdf"
      },
      {
        "label": "Experiment contracts",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/EXPERIMENT-CONTRACTS.md"
      },
      {
        "label": "Measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      }
    ],
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Test 1: Result gating",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 46,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "image",
        "file": "score-first-free-result.png",
        "alt": "Test 1 reveals the illustrative range and rank before signup",
        "x": 891,
        "y": 159,
        "w": 287,
        "h": 503
      },
      {
        "type": "text",
        "text": "Hypothesis",
        "x": 64,
        "y": 159,
        "w": 675,
        "h": 36,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "A free range may build trust while weakening the reason to create an account.",
        "x": 64,
        "y": 198,
        "w": 675,
        "h": 98,
        "size": 27,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Proposed shipping rule",
        "x": 64,
        "y": 319,
        "w": 675,
        "h": 36,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Primary ratio lower 95% bound > 0.90, with account-quality guardrails.",
        "x": 64,
        "y": 358,
        "w": 675,
        "h": 98,
        "size": 27,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Tradeoff",
        "x": 64,
        "y": 476,
        "w": 675,
        "h": 36,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "The 10% tolerance is a policy for a possible trust benefit. Free content and page height change together.",
        "x": 64,
        "y": 515,
        "w": 675,
        "h": 98,
        "size": 27,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Primary: seven-day verified accounts per eligible exposed visitor. No production test has run.",
        "x": 64,
        "y": 650,
        "w": 1100,
        "h": 54,
        "size": 21,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "14",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ],
    "section": "Decisions and experiments"
  },
  {
    "number": 15,
    "title": "Test 2: Quiz length",
    "notes": "The eight-item subset preserves coverage of all four areas and the intended difficulty tiers. Difficulty labels are authoring judgments. Composition and score resolution change with length, so the result is not a pure estimate of duration. The proposed rule requires the primary ratio lower 95% bound above 1.00 and the gate-entry ratio lower bound above 0.95. Gate entry is signup-screen views per result-teaser views. The +20% lift in sizing examples is a planning assumption, not a minimum shipping threshold. Fast completers remain in intention-to-treat.\n\nThe eight-item subset has two items per area and spans the intended easy, medium and hard tiers. These labels are authoring judgments. One answer changes the percentage by 12.5 points at eight versus about 8.3 at twelve. The common top-band rule permits at most one wrong in either arm, which removes one asymmetry without calibrating either form. A gate-entry decline may be consistent with weaker perceived value, but composition and selection provide other explanations. Do not label it proof of lost credibility. Hold acquisition constant with new count-neutral creative before a live length test; the supplied ads still promise twelve.",
    "sources": [
      {
        "label": "A/B test explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part2-ab-tests-writeup.pdf"
      },
      {
        "label": "Experiment contracts",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/EXPERIMENT-CONTRACTS.md"
      },
      {
        "label": "Measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      }
    ],
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Test 2: Quiz length",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 46,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "image",
        "file": "eight-question-four.png",
        "alt": "Test 2 shows question four of eight using the existing question subset",
        "x": 891,
        "y": 159,
        "w": 287,
        "h": 503
      },
      {
        "type": "text",
        "text": "Hypothesis",
        "x": 64,
        "y": 159,
        "w": 675,
        "h": 36,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Less effort may improve completion without making the result feel less worth an account.",
        "x": 64,
        "y": 198,
        "w": 675,
        "h": 98,
        "size": 27,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Proposed shipping rule",
        "x": 64,
        "y": 319,
        "w": 675,
        "h": 36,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Primary ratio lower 95% bound > 1.00.\nGate-entry ratio lower bound > 0.95.",
        "x": 64,
        "y": 358,
        "w": 675,
        "h": 98,
        "size": 27,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Tradeoff",
        "x": 64,
        "y": 476,
        "w": 675,
        "h": 36,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Eight items also change composition and score resolution. Fast completers stay in the analysis.",
        "x": 64,
        "y": 515,
        "w": 675,
        "h": 98,
        "size": 27,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Primary: seven-day verified accounts per eligible exposed visitor. No production test has run.",
        "x": 64,
        "y": 650,
        "w": 1100,
        "h": 54,
        "size": 21,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "15",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ],
    "section": "Decisions and experiments"
  },
  {
    "number": 16,
    "title": "Test 3: Signup timing",
    "notes": "Signup-first creates the account before quiz_start, so a common post-quiz funnel ordering would mismeasure the variant. Count accounts even when people do not start or finish the quiz. The primary rule requires a lower 95% ratio bound above 1.05. The full-result/account ratio lower bound must be at least 1.00 under the original strict no-loss policy. At exactly equal true quality, more traffic cannot provide 80% power to prove a positive quality margin. A tolerated-loss margin requires a separate pre-enrollment product decision. Also report full results per eligible visitor because conditional account groups change with treatment.\n\nThe +5% primary boundary requires an account gain worth pursuing under the chosen policy, rather than shipping any positive-looking estimate. The quality guardrail asks whether those accounts receive the result. Count signup-first non-finishers in the assigned primary denominator. Do not delete them or retroactively redefine an account to make the variant win. Since treatment changes who signs up, full-result/account compares different selected groups. Report full results per eligible visitor alongside it. A strict no-loss lower-bound rule can remain inconclusive at equal true quality; agree any alternative margin before enrollment.",
    "sources": [
      {
        "label": "A/B test explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part2-ab-tests-writeup.pdf"
      },
      {
        "label": "Experiment contracts",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/EXPERIMENT-CONTRACTS.md"
      },
      {
        "label": "Measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      }
    ],
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Test 3: Signup timing",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 46,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "image",
        "file": "signup-before-quiz.png",
        "alt": "Test 3 presents the local account step before question one",
        "x": 891,
        "y": 155,
        "w": 287,
        "h": 498
      },
      {
        "type": "text",
        "text": "Hypothesis",
        "x": 64,
        "y": 155,
        "w": 675,
        "h": 36,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "An earlier ask may create more accounts, while fewer account holders reach the result.",
        "x": 64,
        "y": 194,
        "w": 675,
        "h": 98,
        "size": 27,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Proposed shipping rule",
        "x": 64,
        "y": 304,
        "w": 675,
        "h": 36,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Primary ratio lower 95% bound > 1.05.\nFull-result/account ratio lower bound ≥ 1.00.",
        "x": 64,
        "y": 343,
        "w": 675,
        "h": 98,
        "size": 27,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Tradeoff",
        "x": 64,
        "y": 452,
        "w": 675,
        "h": 36,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "An early account is only the first step. Result delivery must justify the additional accounts.",
        "x": 64,
        "y": 491,
        "w": 675,
        "h": 98,
        "size": 27,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "The zero-loss quality rule is strict and can remain inconclusive at equal true quality. Set any tolerated-loss margin before enrollment.",
        "x": 64,
        "y": 619,
        "w": 1130,
        "h": 54,
        "size": 21,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "16",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ],
    "section": "Decisions and experiments"
  },
  {
    "number": 17,
    "title": "The first 1,000 visitors",
    "notes": "This is a proposed first-traffic plan, not a record of completed research. Begin with logging and assignment validation, potentially an A/A, before treating comparisons as evidence. Observe offer comprehension and collect a baseline. A small purposeful interview sample generates qualitative hypotheses, not causal conversion estimates. Choose one meaningful comparison and size all required guardrails before enrollment. The current fixed-horizon protocol requires at least two weekly cycles, its prespecified sample, and seven days for the last cohort to mature. Do not adapt the stopping rule after observing outcomes.\n\nThe first useful outcome may be evidence that instrumentation or offer comprehension is broken. A small purposeful interview sample can identify objections and misunderstood promises. It cannot estimate causal lift. After a baseline exists, choose a meaningful comparison and size both the primary and guardrails. There is no requirement to spread a thousand visitors across all three tests. The proposed fixed horizon includes two weekly cycles, the prespecified sample and a seven-day maturation window. This is a design policy, not a platform learning-period guarantee.\n\nThis is a prospective learning sequence. After instrumentation and an A/A check, use the baseline to decide which uncertainty deserves scarce traffic. Early loss could motivate comprehension or entry-friction investigation; loss at the result could motivate the value-boundary test; accounts without delivered results could motivate the timing guardrail. These patterns generate questions, not automatic causal diagnoses. Review keyword/device or campaign cohorts without claiming powered segment winners. If loss is a functional defect, fix and verify it before testing persuasive changes. A small comprehension sample can identify interpretations and objections; it cannot establish market demand. Statistical policies must be fixed before the chosen experiment enrolls anyone.",
    "sources": [
      {
        "label": "Measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      },
      {
        "label": "Experiment contracts",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/EXPERIMENT-CONTRACTS.md"
      }
    ],
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "The first 1,000 visitors",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 46,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "1  Validate the measurement",
        "x": 64,
        "y": 168,
        "w": 540,
        "h": 36,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Check exposure, assignment and each arm’s event order. Reconcile visits, sessions and visitors.",
        "x": 64,
        "y": 207,
        "w": 540,
        "h": 98,
        "size": 27,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "2  Establish a baseline",
        "x": 688,
        "y": 168,
        "w": 526,
        "h": 36,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Measure verification and result delivery by acquisition source. Locate the largest loss.",
        "x": 688,
        "y": 207,
        "w": 526,
        "h": 98,
        "size": 27,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "3  Study comprehension",
        "x": 64,
        "y": 378,
        "w": 540,
        "h": 36,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Ask visitors what “free” meant and what they expected the account to provide.",
        "x": 64,
        "y": 417,
        "w": 540,
        "h": 98,
        "size": 27,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "4  Choose one comparison",
        "x": 688,
        "y": 378,
        "w": 526,
        "h": 36,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Choose one comparison from the observed loss. Fix its rules and sample; let cohorts mature.",
        "x": 688,
        "y": 417,
        "w": 526,
        "h": 98,
        "size": 27,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "A thousand visitors can expose broken measurement or unclear value. It does not guarantee enough power for all three tests.",
        "x": 64,
        "y": 619,
        "w": 1130,
        "h": 54,
        "size": 21,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "17",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ],
    "section": "Learning and delivery"
  },
  {
    "number": 18,
    "title": "My decisions and AI’s contribution",
    "notes": "The supplied record attributes the constraints, reopening and adopting the control reversal, and the experiment portfolio to the candidate. Claude Code generated the research synthesis, competing arguments, question/code/creative drafts and earlier QA. Codex performed the final readiness audit and discovered further defects. The candidate did not personally discover every issue. This slide does not claim unrecorded interviews, revenue, coding authorship, biography or time spent.",
    "sources": [
      {
        "label": "AI worklog and attribution",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/AI-WORKLOG.md"
      },
      {
        "label": "Decision log",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/DECISION-LOG.md"
      }
    ],
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "My decisions and AI’s contribution",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 46,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Decisions I accepted",
        "x": 64,
        "y": 172,
        "w": 536,
        "h": 54,
        "size": 34,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "The project constraints\nThe disclosed-gate reversal\nThe three experiment choices\nThe evidence limits and final corrections",
        "x": 64,
        "y": 252,
        "w": 540,
        "h": 257,
        "size": 32,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Work AI produced",
        "x": 696,
        "y": 172,
        "w": 514,
        "h": 54,
        "size": 34,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Research synthesis and arguments\nQuestion, code and creative drafts\nVerification tooling\nAdditional audit discoveries",
        "x": 696,
        "y": 252,
        "w": 514,
        "h": 257,
        "size": 32,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Human oversight and earlier AI review both missed defects. I own the accepted choices and their limits.",
        "x": 64,
        "y": 574,
        "w": 1120,
        "h": 93,
        "size": 30,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "18",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ],
    "section": "Learning and delivery"
  },
  {
    "number": 19,
    "title": "What the final audit changed",
    "notes": "Codex reproduced an answer/Skip race in a real browser and corrected pending transitions and stale callbacks. It repaired malformed-state recovery, account deletion reachability and misleading future-feature wording. The vertical creative now fits its declared internal margins. Unsupported psychometric/causal claims and treatment-dependent speed exclusions were corrected. These are AI audit discoveries, not claimed personal discoveries. The preserved twelve-question bank, scoring mapping, control and three variables remain unchanged. Functional QA does not prove conversion, psychometric validity or physical-device compatibility.\n\nThe question bank, scoring mapping, adopted control and three experiment variables were preserved. The final audit corrected reproducible defects and claims, rather than converting the submission into another product. Earlier normal-flow passes did not cover rapid mixed actions. The old allwrong path retained one correct answer. Rendered images and behavior, not source declarations alone, determined the corrections. The remaining visual-only polyomino limitation is not resolved by keyboard support or width emulation.",
    "sources": [
      {
        "label": "AI worklog and attribution",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/AI-WORKLOG.md"
      },
      {
        "label": "Current functional QA",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/QA-CHECKLIST.md"
      },
      {
        "label": "Measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      }
    ],
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "What the final audit changed",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 46,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "table",
        "values": [
          [
            "Finding",
            "Bounded correction"
          ],
          [
            "Answer and Skip could race",
            "Guard pending navigation and cancel stale callbacks."
          ],
          [
            "Some account promises exceeded behavior",
            "Keep local review/history. Label future email/rank features."
          ],
          [
            "Vertical artwork exceeded its declared margins",
            "Refit the existing content and re-export the formats."
          ],
          [
            "Claims and analysis rules exceeded evidence",
            "Qualify unsupported claims and keep fast visitors in analysis."
          ]
        ],
        "widths": [
          491,
          661
        ],
        "rowHeights": [
          58,
          88,
          98,
          98,
          98
        ],
        "x": 64,
        "y": 157,
        "w": 1152,
        "h": 440,
        "size": 25
      },
      {
        "type": "text",
        "text": "Functional checks passed. Conversion impact and IQ validity remain unmeasured. Desktop emulation leaves a separate physical-phone check.",
        "x": 64,
        "y": 622,
        "w": 1130,
        "h": 54,
        "size": 21,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "19",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ],
    "section": "Learning and delivery"
  },
  {
    "number": 20,
    "title": "What would change the decisions",
    "notes": "A decision is useful only if the evidence that would change it is recognizable. For the gate, the primary behavioral challenge is the score-first contract; misunderstanding of the exchange is separately actionable. For length, both verified conversion and the declared gate-entry rule matter. For early signup, a raw account gain is insufficient if the verified primary or result-delivery rule fails. For illustrative measurement, observed misunderstanding could justify hiding the mapping even if it attracts accounts. For interface details, confusion or repeated mis-taps could support a compact disclosure or explicit Next without reopening the bank. These are prospective reversal conditions, not claims that any such signal has already occurred. The numeric margins and analysis method must be agreed before enrollment, and a failed or inconclusive rule does not prove inferiority.",
    "sources": [
      {
        "label": "Prospective experiment contracts",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/EXPERIMENT-CONTRACTS.md"
      },
      {
        "label": "Decision log: historical choices and final corrections",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/DECISION-LOG.md"
      },
      {
        "label": "Final measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      }
    ],
    "section": "Learning and delivery",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "What would change the decisions",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "table",
        "values": [
          [
            "Current choice",
            "Evidence that matters",
            "Possible response"
          ],
          [
            "Disclosed gate",
            "Score-first passes its rule, or the offer is misunderstood.",
            "Change the value boundary or clarify it."
          ],
          [
            "Twelve items",
            "Eight passes conversion and the required guardrails.",
            "Adopt the short form; investigate composition."
          ],
          [
            "Late account ask",
            "Early signup passes both primary and result-delivery rules.",
            "Move the ask with truthful acquisition copy."
          ],
          [
            "Illustrative range/rank",
            "People still read it as measured intelligence.",
            "Hide the mapping pending suitable evidence."
          ],
          [
            "Auto-advance / disclosure",
            "Repeated mis-taps or poor offer comprehension.",
            "Test explicit Next or a clearer compact layout."
          ]
        ],
        "widths": [
          246,
          518,
          388
        ],
        "rowHeights": [
          58,
          77,
          77,
          77,
          77,
          77
        ],
        "x": 64,
        "y": 165,
        "w": 1152,
        "h": 443,
        "size": 23
      },
      {
        "type": "text",
        "text": "Keep the control when the required evidence is inconclusive. A larger intermediate metric cannot overrule the policy.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "20",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 21,
    "title": "The arithmetic exposed the assumptions",
    "notes": "All rates on this slide are invented scenario inputs, not IQly observations. Define U as starts per visitor multiplied by completions per start and A as accounts per completion in a simplified single-visit post-quiz path. Account conversion is U times A. The upstream ratio that score-first needs to tie is A_gate divided by A_score-first. A 40% gate account rate and a 12% score-first account rate imply 3.333; a 30% score-first account rate implies 1.333; 40% implies one; 45% implies 0.889. These scenarios deliberately show that different assumptions can favor either architecture. If the gate upstream rate were 0.50, multiplying it by 3.333 would exceed one, so that particular hypothetical scenario cannot be rescued upstream. This is a constraint within assumed numbers, not evidence that the assumptions hold. The toy comparison also holds verification quality equal. A difference in verified-email or result-delivery quality could reverse its business interpretation. The appropriate response is to measure the uncertain terms.",
    "sources": [
      {
        "label": "Decision log: historical choices and final corrections",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/DECISION-LOG.md"
      },
      {
        "label": "Final measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      }
    ],
    "section": "Decision detail",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "The arithmetic exposed the assumptions",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Hypothetical scenarios. Gate account rate held at 40% of finishers.",
        "x": 64,
        "y": 153,
        "w": 1140,
        "h": 48,
        "size": 27,
        "color": "#4A5160"
      },
      {
        "type": "table",
        "values": [
          [
            "Score-first accounts / finishers",
            "Upstream improvement needed to tie"
          ],
          [
            "12%",
            "3.33× starts × completion"
          ],
          [
            "30%",
            "1.33× starts × completion"
          ],
          [
            "40%",
            "1.00×: equal upstream performance"
          ],
          [
            "45%",
            "0.89×: some upstream loss is affordable"
          ]
        ],
        "widths": [
          495,
          657
        ],
        "rowHeights": [
          58,
          70,
          70,
          70,
          80
        ],
        "x": 64,
        "y": 226,
        "w": 1152,
        "h": 348,
        "size": 26
      },
      {
        "type": "text",
        "text": "Changing the assumptions changes the preferred design. Verification quality is held equal in this toy calculation.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "21",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 22,
    "title": "How the work changed over time",
    "notes": "This sequence reconstructs documented changes, not a claim that the candidate personally implemented every artifact. The first direction favored score-first delivery. The competing gate argument was reopened and adopted, with score-first retained as a complete rival. The experiment portfolio then moved from a disclosure dial to signup timing, while the twelve-versus-eight question decision remained. Implementation review turned claimed history, storage fallback and deletion into behavior and improved the event taxonomy. Independent audit recommendations were checked against the actual code instead of automatically accepted. Final adversarial verification exposed races, malformed state, missing deletion paths, creative margins and stronger-than-supported claims. The process lesson is that argument quality, implementation correctness and outcome evidence are different checks. Agreement among AI reports is not a substitute for primary evidence or an experiment. No deadline or time-spent claim is added to this history.",
    "sources": [
      {
        "label": "Decision log: historical choices and final corrections",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/DECISION-LOG.md"
      },
      {
        "label": "AI worklog and final attribution",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/AI-WORKLOG.md"
      },
      {
        "label": "Current functional verification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/QA-CHECKLIST.md"
      }
    ],
    "section": "Decision detail",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "How the work changed over time",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "table",
        "values": [
          [
            "Stage",
            "Question reopened",
            "Resulting decision"
          ],
          [
            "Initial direction",
            "Give the interpretation first?",
            "Score-first favored immediate free value."
          ],
          [
            "Architecture review",
            "What makes the account worth creating?",
            "Adopt a disclosed gate; retain its strongest rival."
          ],
          [
            "Implementation review",
            "Does each promise have a behavior?",
            "Add history, verified storage and deletion; improve events."
          ],
          [
            "Final adversarial audit",
            "What did ordinary passes miss?",
            "Fix races and bounds; narrow claims and analysis rules."
          ]
        ],
        "widths": [
          230,
          408,
          514
        ],
        "rowHeights": [
          58,
          83,
          94,
          94,
          94
        ],
        "x": 64,
        "y": 166,
        "w": 1152,
        "h": 423,
        "size": 24
      },
      {
        "type": "text",
        "text": "A change in judgment can be defensible before its performance is known. The live tests must still decide.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "22",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 23,
    "title": "Why this question bank and length",
    "notes": "The adopted bank has twelve fixed items across four areas, with an intended easy-to-hard order. Variety and a bounded task are concrete design properties; a credibility gain or lower abandonment is a hypothesis. There is no validated construct coverage claim. Numerical and logical instructions still use English, and some spatial tasks remain visual, so omitting a verbal category does not establish fairness. The eight-item variant uses two items per area and all intended difficulty tiers, but changes which items appear, score resolution and milestone positions. Difficulty labels are not calibrated parameters. A sixteen-item version could be a credible follow-up if effort appears to buy perceived value; it needs four additional reviewed items and a fresh comparison. There is no verified deadline that makes it impossible. Six-item or adaptive versions are deferred because further shortening and unsupported adaptivity would add questions about result meaning. The displayed five- and three-minute durations are estimates to replace with observations. Completion time, per-item drop-off, skips, item ambiguity and account conversion would inform revision. Retaking identical items can reflect practice rather than improved ability.",
    "sources": [
      {
        "label": "Decision log: historical choices and final corrections",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/DECISION-LOG.md"
      },
      {
        "label": "Prospective experiment contracts",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/EXPERIMENT-CONTRACTS.md"
      },
      {
        "label": "Shared prototype source",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/tools/template.html"
      }
    ],
    "section": "Decision detail",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Why this question bank and length",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Why twelve",
        "x": 64,
        "y": 171,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "A bounded task with variety across four areas. Twelve gives room for progression without requiring a large authoring and review scope.",
        "x": 64,
        "y": 215,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Why these areas",
        "x": 672,
        "y": 171,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Pattern, numerical, logical and spatial tasks provide variety. Omitting a separate verbal category does not remove language or accessibility barriers.",
        "x": 672,
        "y": 215,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Why untimed",
        "x": 64,
        "y": 390,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "The task counts accuracy. A countdown would introduce speed pressure and change the experience without a validated reason to do so.",
        "x": 64,
        "y": 434,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Why defer longer or adaptive tests",
        "x": 672,
        "y": 390,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "A longer form needs more reviewed items. Adaptive testing needs calibrated items. Eight tests reduced effort using the supplied bank.",
        "x": 672,
        "y": 434,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Difficulty tiers and duration estimates are authored judgments. Neither form has measured reliability or norms.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "23",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 24,
    "title": "Why the interaction is recoverable",
    "notes": "One item at a time makes the current task explicit. A counter and linear bar communicate how much remains; they are not an established conversion lift. Easy-to-hard ordering is intended to introduce the task before harder items, but the difficulty labels are not calibrated. Back restores earlier answers and Skip avoids trapping someone on a difficult question. Auto-advance removes one repeated tap, at the cost of possible accidental activation. The 320 ms value is an authoring choice. The final correction binds pending callbacks to their originating state and temporarily blocks conflicting inputs. Reduced-motion mode removes the wait. The calculating screen marks a stage boundary; its current normal timer path is about 1.77 seconds, derived from four 380 ms waits and one 250 ms wait for three displayed steps. An older at-most-1.5-second description does not match that code. Scoring is deterministic and cheap, so this transition is pacing, not evidence of deep AI analysis. Observe scoring-stage exits before deciding whether to remove it. Resume, retake, storage fallback and deletion make interruption recoverable. Remaining visual-only content prevents a claim of complete assistive-technology access.",
    "sources": [
      {
        "label": "Shared prototype source",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/tools/template.html"
      },
      {
        "label": "Decision log: historical choices and final corrections",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/DECISION-LOG.md"
      },
      {
        "label": "Current functional verification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/QA-CHECKLIST.md"
      },
      {
        "label": "Final measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      }
    ],
    "section": "Decision detail",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Why the interaction is recoverable",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "table",
        "values": [
          [
            "Choice",
            "Reason to keep it",
            "Tradeoff and revision trigger"
          ],
          [
            "One question + progress",
            "Show the immediate action and remaining work.",
            "No measured lift; watch per-item loss."
          ],
          [
            "Back and Skip",
            "Recover mistakes or move past a difficult item.",
            "Skips reduce the evidence available."
          ],
          [
            "320 ms auto-advance",
            "Remove a repeated Next action.",
            "Mis-taps may favor explicit Next."
          ],
          [
            "Brief calculating transition",
            "Mark the move from answers to result.",
            "Pacing can add needless delay; inspect exits."
          ],
          [
            "Resume, retake, deletion",
            "Let a visitor interrupt, return or remove data.",
            "Local persistence may fail; disclose the fallback."
          ]
        ],
        "widths": [
          290,
          389,
          473
        ],
        "rowHeights": [
          56,
          77,
          77,
          77,
          77,
          77
        ],
        "x": 64,
        "y": 166,
        "w": 1152,
        "h": 441,
        "size": 23
      },
      {
        "type": "text",
        "text": "Functional recovery is verified. These interaction choices have not been optimized on real conversion traffic.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "24",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 25,
    "title": "Why disclose before asking for effort",
    "notes": "The starting principle is an informed exchange before effort. The visitor sees the free/account boundary and no-payment promise on the landing. The signup screen separately explains the local simulation. That makes the promise available, not necessarily understood. A collapsed section offers optional detail but is not equivalent to a read disclosure. Earlier layout work moved caveats and area counts below the main action to reduce visual competition. Historical fold offsets described particular viewports, not universal phone behavior; narrower screens still require scrolling. Sticky CTAs, modals or removing free content were not necessary for the chosen layout. A short visible disclosure is a credible alternative, and a question-first entry could preserve necessary context with a different composition. The previous rejection of one question-first layout reflected its conflict with disclosure space, not a rule in the brief or proof that all such designs fail. Ask visitors to explain the offer in their own words; use a prespecified live comparison for conversion. Historical hidden-payment complaints motivate checking comprehension but do not estimate the effect of this free email gate. This reasoning makes no legal or platform certification claim.",
    "sources": [
      {
        "label": "Decision log: historical choices and final corrections",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/DECISION-LOG.md"
      },
      {
        "label": "Part 1: flow explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part1-flow-writeup.pdf"
      },
      {
        "label": "Shared prototype source",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/tools/template.html"
      },
      {
        "label": "Current functional verification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/QA-CHECKLIST.md"
      }
    ],
    "section": "Decision detail",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Why disclose before asking for effort",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Reason for the visible boundary",
        "x": 64,
        "y": 171,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Let visitors know what is free, what the account unlocks and that no payment is required before they start.",
        "x": 64,
        "y": 215,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Reason for the hierarchy",
        "x": 672,
        "y": 171,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Keep the main action clear. Put supplementary explanation and area counts in expandable sections, while the offer remains visible.",
        "x": 672,
        "y": 215,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "The tradeoff",
        "x": 64,
        "y": 390,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Disclosure uses space. Expandable details may go unread. A viewport measurement does not prove everyone sees or understands a CTA.",
        "x": 64,
        "y": 434,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "The credible alternative",
        "x": 672,
        "y": 390,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "A compact, equally understood disclosure could work. Test comprehension and the full funnel before replacing the block.",
        "x": 672,
        "y": 434,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Disclosure could raise starts, lower starts or have little effect. Its availability does not prove comprehension.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "25",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 26,
    "title": "What the result can honestly mean",
    "notes": "Correct answers are scored deterministically against the bank. Skips and incorrect answers are distinguished, and the mapping uses the total item count. Fewer than half answered suppresses the band. These are transparent product rules, not psychometric validation. The same top-band cutoff permits at most one wrong at twelve or eight, which is consistency rather than calibration. The IQ ranges, rank labels and bell-shaped curve are illustrative. There are no population norms, measured reliability, validity study or standard error for these generated questions. Another test cannot supply those values, even under an inference label. The rejected ICAR/WAIS correlation claim remains excluded. A precise score might look persuasive but its conversion advantage is unmeasured, and commercial persuasiveness would not validate it. Three items per area support counts rather than strengths or weaknesses. Identical retakes can reflect learning the answers. A measured rank would need a defined population, sampling and retake rules and uncertainty; a few hundred self-selected visitors are not automatically representative norms. The strongest scientific alternative is raw-only output until appropriate evidence exists, and comprehension findings can trigger that change.",
    "sources": [
      {
        "label": "Official challenge brief",
        "url": "https://challenge.arpeely.com/index.html"
      },
      {
        "label": "Part 1: flow explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part1-flow-writeup.pdf"
      },
      {
        "label": "Decision log: historical choices and final corrections",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/DECISION-LOG.md"
      },
      {
        "label": "Shared prototype source",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/tools/template.html"
      }
    ],
    "section": "Decision detail",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "What the result can honestly mean",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "What is supported",
        "x": 64,
        "y": 171,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "The count follows the shipped answer keys. Area counts describe these responses; they do not establish an ability profile.",
        "x": 64,
        "y": 215,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Why keep a labelled range",
        "x": 672,
        "y": 171,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "The brief asks for an IQ result and rank. The prototype represents that concept through an explicitly illustrative mapping.",
        "x": 672,
        "y": 215,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "The strongest alternative",
        "x": 64,
        "y": 390,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Show raw performance only until validation and norms exist. A broad range or disclaimer does not make an IQ claim scientifically valid.",
        "x": 64,
        "y": 434,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "What would change the choice",
        "x": 672,
        "y": 390,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Hide the mapping if people misunderstand it. Any measured score or rank needs evidence for this bank and a defined reference population.",
        "x": 672,
        "y": 434,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "No exact IQ, reliability coefficient, error margin, measured percentile or general-population comparison is established.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "26",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 27,
    "title": "Why email-only, and what it leaves out",
    "notes": "The challenge requests a flow without a backend, so the submission does not fake successful network authentication. Email-only presents the intended account interaction with one requested field. No universal conversion gain follows from that choice. The separate unticked marketing option makes that request distinct from account creation, without claiming legal certification. Syntax validation admits plausible fake addresses and cannot establish ownership. A browser write is checked by read-back, and failed storage remains in memory with truthful wording. The raw email exists in the local account and on the result screen, but is excluded from event properties, console output and debug export. A domain hash is a diagnostic, not a guarantee of anonymity. Deletion requires confirmation, removes this variant’s data and reloads to a fresh anonymous state; it does not erase other variant namespaces or prevent new anonymous events. Cancellation preserves the account. A real service would need identity, recovery, security, consent and retention decisions. Anonymous results are a credible alternative if identity does not earn its role. Current functionality establishes only that the simulated exchange can be completed.",
    "sources": [
      {
        "label": "Official challenge brief",
        "url": "https://challenge.arpeely.com/index.html"
      },
      {
        "label": "Shared prototype source",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/tools/template.html"
      },
      {
        "label": "Final measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      },
      {
        "label": "Current functional verification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/QA-CHECKLIST.md"
      }
    ],
    "section": "Decision detail",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Why email-only, and what it leaves out",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "The chosen step",
        "x": 64,
        "y": 171,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "One email field, no password and a separate unchecked marketing choice. Fewer requested actions are a design property, not a guaranteed lift.",
        "x": 64,
        "y": 215,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "What the prototype does",
        "x": 672,
        "y": 171,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Check syntax, create local state and reveal the result. Verify storage by reading it back; disclose when only the current tab retains it.",
        "x": 672,
        "y": 215,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Alternatives and tradeoffs",
        "x": 64,
        "y": 390,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Anonymous saving avoids identity. Passwords and social login add a different account model. A real email link needs a service and recovery rules.",
        "x": 64,
        "y": 434,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "What should be measured",
        "x": 672,
        "y": 390,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Syntax errors here. Ownership verification, duplicates, result use and complaints in production. Keep raw email out of event and debug logs.",
        "x": 672,
        "y": 434,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "The local account contains the email. There is no server account, email delivery, cross-device history or ownership verification.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "27",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 28,
    "title": "One concept across three creatives",
    "notes": "The supplied creative concept uses the actual first question to connect acquisition to the quiz. The small banner communicates the free offer, count and estimated time. Square and vertical formats show the sample. All copies retain the no-payment promise. Exposure to Q1 can prime the answer. The submitted assets promote the twelve-question control, so a production comparison of lengths needs a shared count-neutral acquisition message. Creative performance has not been measured.",
    "sources": [
      {
        "label": "Creative explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part3-creatives-writeup.pdf"
      },
      {
        "label": "A/B test explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part2-ab-tests-writeup.pdf"
      }
    ],
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "One concept across three creatives",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 46,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "320 × 50",
        "x": 64,
        "y": 170,
        "w": 450,
        "h": 38,
        "size": 26,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "image",
        "file": "ad-320x50@2x.png",
        "alt": "The supplied 320 by 50 banner rendered from its optional two-times export",
        "x": 64,
        "y": 225,
        "w": 480,
        "h": 75
      },
      {
        "type": "text",
        "text": "250 × 250",
        "x": 592,
        "y": 170,
        "w": 310,
        "h": 38,
        "size": 26,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "image",
        "file": "ad-250x250.png",
        "alt": "The supplied square creative with the real sample question and no-payment wording",
        "x": 592,
        "y": 225,
        "w": 287,
        "h": 287
      },
      {
        "type": "text",
        "text": "1080 × 1920",
        "x": 951,
        "y": 170,
        "w": 276,
        "h": 38,
        "size": 26,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "image",
        "file": "ad-1080x1920.png",
        "alt": "The supplied vertical creative, with original copy and corrected internal margins",
        "x": 956,
        "y": 219,
        "w": 238,
        "h": 423
      },
      {
        "type": "text",
        "text": "The ad previews the task.",
        "x": 64,
        "y": 360,
        "w": 484,
        "h": 90,
        "size": 36,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "The landing carries the same free offer and explains the account exchange.",
        "x": 64,
        "y": 465,
        "w": 485,
        "h": 117,
        "size": 28,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "The sample can prime Q1. Future length tests need the same count-neutral acquisition message.",
        "x": 64,
        "y": 619,
        "w": 827,
        "h": 54,
        "size": 21,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "28",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ],
    "section": "Decision detail"
  },
  {
    "number": 29,
    "title": "Why this creative concept",
    "notes": "The concept uses the actual first puzzle to make the advertised experience concrete. This is a message-match hypothesis, not a measured acquisition advantage. The 320×50 banner spends its small area on the free offer, count, estimated duration and no-payment promise. The square shows the task, and the vertical can explain more of the exchange. Showing Q1 introduces prior exposure; it should not be ignored when interpreting answers. All submitted creatives promote the twelve-question control. A live length comparison requires new count-neutral creative held constant across arms. A timing test needs a common acquisition message without timing-specific promises. A different honest concept could outperform the puzzle. Fabricated personal results, certification badges, countdown urgency and unsupported “only 1%” claims were rejected because the product cannot substantiate them, not because their click rates are known. The square already visibly included no payment. The vertical exceeded its own margins and was refit within x=72..1008, y=270..1250. These are design bounds, not universal placement certification. Current source and exports agree under a recorded renderer; missing historic font/renderer metadata prevents attributing every old difference to stale files. Judge acquisition and post-click behavior together using aligned cohorts and attribution.",
    "sources": [
      {
        "label": "Part 3: creative explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part3-creatives-writeup.pdf"
      },
      {
        "label": "Decision log: historical choices and final corrections",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/DECISION-LOG.md"
      },
      {
        "label": "Prospective experiment contracts",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/EXPERIMENT-CONTRACTS.md"
      }
    ],
    "section": "Decision detail",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Why this creative concept",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Reason for the real puzzle",
        "x": 64,
        "y": 171,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Show the activity the visitor will actually reach. A matching promise can help attract people interested in the task.",
        "x": 64,
        "y": 215,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Why adapt the same concept",
        "x": 672,
        "y": 171,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "The banner carries the compact offer. Square and vertical formats show the sample; the landing explains the full account boundary.",
        "x": 672,
        "y": 215,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Tradeoffs and rejected claims",
        "x": 64,
        "y": 390,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Q1 exposure can prime the answer. Small text competes for attention. Invented certification, urgency and rarity claims lack support.",
        "x": 64,
        "y": 434,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "How to judge it",
        "x": 672,
        "y": 390,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Measure accounts per impression and acquisition cost. CTR and account conversion after the click explain why a creative wins or loses.",
        "x": 672,
        "y": 434,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Accounts / impressions = clicks / impressions × accounts / click, for the same attributed cohort and window.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "29",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 30,
    "title": "Alternatives that remain worth testing",
    "notes": "Deferral is a scope and information choice, not evidence that an alternative cannot convert. A coarse free band might balance immediate value and curiosity, but still requires honest illustrative labeling. Signup after question three might show enough value before identity; the current extremes do not dominate it. Question-first entry could reduce the distance to participation if it also makes the exchange understandable. A sixteen-item form might change perceived substance and reliability, but perceived substance and actual measurement validity must not be conflated. It needs new reviewed items and a separately specified comparison. A learning plan, real email report or dynamic rank would add product capability rather than merely reword the gate. Copy, color, disclosure prominence and explicit Next remain reversible follow-ups. The primary tests were chosen to address the core value exchange, not because their effects were proved larger. Hard undisclosed gates, invented urgency and unsupported precise IQ claims are rejected on the product’s truthful-promise constraint. No unsupported competitor prevalence or unpublished deadline is used to dismiss the alternatives.\n\nAn immediate-question comparison is a useful future entry-friction alternative; it is not the shipped signup-timing variant. First-answer rate would be diagnostic; full account conversion would still decide. A viable layout must retain an understandable free/account boundary. Prior rejection of one question-first composition does not show that the whole architecture fails. A shorter score-first baseline combines two credible alternatives. The submission preserves these challenges to the adopted control separately as Test 1 and Test 2, so they can be evaluated with their own defined changes.",
    "sources": [
      {
        "label": "Decision log: historical choices and final corrections",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/DECISION-LOG.md"
      },
      {
        "label": "Prospective experiment contracts",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/EXPERIMENT-CONTRACTS.md"
      },
      {
        "label": "Part 1: flow explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part1-flow-writeup.pdf"
      }
    ],
    "section": "Decision detail",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Alternatives that remain worth testing",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "table",
        "values": [
          [
            "Alternative",
            "Why it is credible",
            "Why it is deferred"
          ],
          [
            "Coarse free band",
            "A middle point between counts and full interpretation.",
            "First test the adopted gate against score-first."
          ],
          [
            "Signup after question 3",
            "Some demonstrated value before the account ask.",
            "Needs its own complete timing comparison."
          ],
          [
            "Question-first entry",
            "Participation begins immediately.",
            "Needs a composition that explains the exchange."
          ],
          [
            "Sixteen or more items",
            "May offer a more substantial experience.",
            "Requires additional reviewed items and fresh evidence."
          ],
          [
            "Learning plan / email report",
            "Could create a stronger account benefit.",
            "Requires real new functionality."
          ],
          [
            "Copy, color, disclosure dial",
            "Small changes can affect understanding and behavior.",
            "Prioritized the three core product uncertainties."
          ]
        ],
        "widths": [
          268,
          442,
          442
        ],
        "rowHeights": [
          53,
          73,
          73,
          73,
          73,
          73,
          73
        ],
        "x": 64,
        "y": 150,
        "w": 1152,
        "h": 491,
        "size": 23
      },
      {
        "type": "text",
        "text": "Deferred does not mean disproved. Evidence from the main comparisons should determine the next question.",
        "x": 64,
        "y": 652,
        "w": 1135,
        "h": 40,
        "size": 19,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "30",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 31,
    "title": "Three denominators, three uses",
    "notes": "The official objective counts accounts per page visit. Prototype conversion is separately defined over persistent sid identifiers, which are per browser and variant rather than unique people. Proposed production conversion counts verified accounts within seven days over all eligible exposed new visitors. Eligibility must be defined before exposure, and the denominator retains bounces, non-starters, invalid submissions and fast completers. Production assignment, verification and server identity have not been implemented.\n\nThe literal brief objective remains visible even though production verification is a proposed quality-aware addition. A reload changes page visits without necessarily changing the stored-session account numerator. A stored browser ID is not a person. Eligibility must be defined before exposure. Bounces, non-starters, invalid submissions, fast completers and early-signup non-finishers remain in the assigned production denominator. These rules prevent a treatment from improving its rate by changing who gets counted.",
    "sources": [
      {
        "label": "Official challenge brief",
        "url": "https://challenge.arpeely.com/index.html"
      },
      {
        "label": "Measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      }
    ],
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Three denominators, three uses",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 46,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "table",
        "values": [
          [
            "Use",
            "Metric",
            "Boundary"
          ],
          [
            "Official objective",
            "Account creations / page visits",
            "Page visits include reloads."
          ],
          [
            "Prototype diagnostic",
            "Sessions with signup / sessions with landing",
            "Persistent browser IDs, local simulation."
          ],
          [
            "Proposed production primary",
            "Seven-day verified accounts / eligible exposed visitors",
            "Stable assignment and real verification still need implementation."
          ]
        ],
        "widths": [
          270,
          476,
          406
        ],
        "rowHeights": [
          58,
          107,
          107,
          129
        ],
        "x": 64,
        "y": 165,
        "w": 1152,
        "h": 401,
        "size": 25
      },
      {
        "type": "text",
        "text": "Every eligible exposed visitor stays in the assigned denominator.",
        "x": 64,
        "y": 595,
        "w": 1120,
        "h": 64,
        "size": 31,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "31",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ],
    "section": "Measurement and implementation detail"
  },
  {
    "number": 32,
    "title": "Why the shipping thresholds differ",
    "notes": "Each threshold encodes a different product tradeoff. Test 1 permits a possible small verified-account loss for a hypothesized benefit of a more generous free experience. Its lower 95% ratio bound must exceed 0.90. The 10% tolerance is a policy, not an MDE or measured trust dividend; a superiority-only protocol is a legitimate alternative to choose and size before enrollment. Test 2 must establish an account gain above a 1.00 boundary while limiting the gate-entry loss compatible with its interval to 5%. Gate entry is signup-screen views divided by result-teaser views. It can indicate an offer problem, but it conditions on selected groups and does not causally measure credibility. Test 3 asks for a primary bound above 1.05 because creating accounts earlier has a meaningful quality risk; the retained full-result/account rule is a strict no-loss policy. It can remain inconclusive at equal true quality. The team would need to own any tolerated-loss alternative in advance. Complaint and disposable-domain operating tolerances, sparse-count intervals, traffic budgets and a portfolio multiplicity policy still require production decisions. If a required rule is inconclusive, keep the control. A failure to ship does not establish inferiority.",
    "sources": [
      {
        "label": "Prospective experiment contracts",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/EXPERIMENT-CONTRACTS.md"
      },
      {
        "label": "Final measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      }
    ],
    "section": "Measurement and implementation detail",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Why the shipping thresholds differ",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "table",
        "values": [
          [
            "Test",
            "Policy being expressed",
            "Lower 95% ratio boundaries"
          ],
          [
            "1  Score-first",
            "Allow a limited possible account loss for a hypothesized trust benefit.",
            "Primary >0.90; account-quality checks hold."
          ],
          [
            "2  Eight items",
            "Require more verified accounts without a material gate-entry loss.",
            "Primary >1.00; gate entry >0.95."
          ],
          [
            "3  Signup-first",
            "Require a worthwhile account gain and preserved result delivery.",
            "Primary >1.05; full result/account ≥1.00."
          ]
        ],
        "widths": [
          241,
          488,
          423
        ],
        "rowHeights": [
          58,
          125,
          125,
          125
        ],
        "x": 64,
        "y": 167,
        "w": 1152,
        "h": 433,
        "size": 25
      },
      {
        "type": "text",
        "text": "All ratios compare variant with control. These are prospective policies requiring production sign-off, not completed results.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "32",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 33,
    "title": "Why the analysis keeps everyone assigned",
    "notes": "The proposed production primary uses eligible new visitors assigned and exposed during enrollment. Eligibility, staff/QA exclusions and known bot signals are defined before exposure and applied without using behavior the treatment can change. Completion speed and unusual event order are diagnostic; signup-first intentionally changes that order. Stable assignment, server identity and verified ownership do not exist in the current local prototype. The stored sid survives reloads and retakes until deletion/reset, and once flags survive the capped event log. Neither a sid nor a hashed email establishes a unique person. The prototype records first-touch device and keyword context, but live segment comparisons need stable acquisition categories, their own assignment checks and adequate information. Segment results here are exploratory. Start with instrumentation validation and possibly an A/A. Investigate sample-ratio mismatch before interpreting outcome effects. Run the architecture tests as separate decisions with fresh traffic, and regenerate any later control that incorporates a previous winner. The current fixed horizon requires two weekly cycles, the computed sample and seven days for the last cohort. Any sequential alternative must be selected before enrollment. Multiple individual 95% intervals do not guarantee simultaneous 95% coverage for a whole portfolio.",
    "sources": [
      {
        "label": "Final measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      },
      {
        "label": "Prospective experiment contracts",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/EXPERIMENT-CONTRACTS.md"
      },
      {
        "label": "Shared prototype source",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/tools/template.html"
      }
    ],
    "section": "Measurement and implementation detail",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Why the analysis keeps everyone assigned",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Stable visitor assignment",
        "x": 64,
        "y": 171,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Randomize before showing treatment and keep assignment across visits. Four manually chosen files do not provide this in the prototype.",
        "x": 64,
        "y": 215,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Keep treatment consequences",
        "x": 672,
        "y": 171,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Retain bounces, invalid submissions, fast completers and signup-first non-finishers. Removing them can manufacture a favorable rate.",
        "x": 672,
        "y": 215,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Separate diagnosis from decisions",
        "x": 64,
        "y": 390,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Step rates and device/keyword cuts explain patterns. Conditional account groups can change; also report results per eligible visitor.",
        "x": 64,
        "y": 434,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Protect the comparison",
        "x": 672,
        "y": 390,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Hold acquisition constant, verify event order and assignment balance, then finish the declared sample and seven-day follow-up.",
        "x": 672,
        "y": 434,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Data-quality failures block interpretation. No outcome-driven stopping, denominator changes or unpowered segment ship calls.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "33",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 34,
    "title": "Why a small launch cannot settle every test",
    "notes": "These are the submission’s own planning calculations, not market benchmarks. With equal-sized arms, assumed control verified rate pC=0.10, two-sided 95% intervals and 80% power, the log-risk-ratio approximation is n=ceil((z0.975+z0.80)^2 × [(1-pT)/pT+(1-pC)/pC] / log(RR_true/RR_boundary)^2). Test 1 assumes equal true rates and a 0.90 boundary, giving 12,727 per arm. Test 2 assumes a true 20% lift against a 1.00 boundary, giving 3,857. Test 3 uses the same assumed true lift against a 1.05 boundary, giving 7,190. These do not include the additional sample needed for required quality guardrails. The assumed 20% effect is a planning input, not a forecast or the minimum shipping lift for Test 2. A strict zero-loss quality lower-bound rule cannot have 80% power when true quality is exactly equal. Final sizing must check the chosen interval method, including sparse/zero outcomes, and the operating characteristics of every required rule. An underpowered comparison cannot establish equivalence through a nonsignificant result. Baseline observation and comprehension work are useful first uses of limited traffic.",
    "sources": [
      {
        "label": "Final measurement specification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/MEASUREMENT-SPEC.md"
      },
      {
        "label": "Prospective experiment contracts",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/EXPERIMENT-CONTRACTS.md"
      }
    ],
    "section": "Measurement and implementation detail",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Why a small launch cannot settle every test",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Planning illustration: 10% control verified rate, 80% power, equal arms.",
        "x": 64,
        "y": 154,
        "w": 1140,
        "h": 50,
        "size": 26,
        "color": "#4A5160"
      },
      {
        "type": "table",
        "values": [
          [
            "Comparison",
            "Assumed true ratio / boundary",
            "Visitors per arm"
          ],
          [
            "Test 1: score-first",
            "1.00 / 0.90",
            "12,727"
          ],
          [
            "Test 2: eight items",
            "1.20 / 1.00",
            "3,857"
          ],
          [
            "Test 3: signup-first",
            "1.20 / 1.05",
            "7,190"
          ]
        ],
        "widths": [
          421,
          430,
          301
        ],
        "rowHeights": [
          59,
          87,
          87,
          87
        ],
        "x": 64,
        "y": 239,
        "w": 1152,
        "h": 320,
        "size": 26
      },
      {
        "type": "text",
        "text": "Approximate primary-only counts. Required guardrails may need more traffic; a thousand visitors is not a universal test budget.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "34",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 35,
    "title": "Why the implementation is packaged this way",
    "notes": "The offline boundary directly supports the challenge’s reviewer path. Plain HTML, CSS and JavaScript remove runtime infrastructure from that path, but do not establish production scalability or authentication. Shared generation reduces variant drift while standalone files preserve independent review. A diff demonstrates changes in source, while rendered checks catch coupled copy, placement and timing. The root public package uses an explicit allowlist so a clean public checkout packages assets and write-ups without relying on the old private authoring layout. A manifest proves only the listed bytes; a requirement checklist checks completeness, and behavioral/visual checks test the artifact. The original 44-file package’s matching hashes did not prove the packaging workflow could rebuild it. The corrected original release contains 46 files including its manifest. This expanded presentation remains in its own supplemental folder and does not silently change that ZIP. Public/private separation avoids leaking prompts, research drafts, correspondence or interview material. Browser emulation and native/PDF renderer inspection are named evidence, not physical-device or full assistive-technology certification. Future packaging changes should update the allowlist and all corresponding release comparisons deliberately.",
    "sources": [
      {
        "label": "Official challenge brief",
        "url": "https://challenge.arpeely.com/index.html"
      },
      {
        "label": "Public reviewer package",
        "url": "https://github.com/yosishe/iqly-flow"
      },
      {
        "label": "Decision log: historical choices and final corrections",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/DECISION-LOG.md"
      },
      {
        "label": "Current functional verification",
        "url": "https://github.com/yosishe/iqly-flow/blob/main/docs/QA-CHECKLIST.md"
      }
    ],
    "section": "Measurement and implementation detail",
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Why the implementation is packaged this way",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 44,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Offline and self-contained",
        "x": 64,
        "y": 171,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "The reviewer opens index.html without a server or build. No runtime framework, CDN, font download or analytics endpoint is required.",
        "x": 64,
        "y": 215,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "One template, complete variants",
        "x": 672,
        "y": 171,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Generate four standalone flows from shared source. Review diffs and render each arm so accidental differences are visible.",
        "x": 672,
        "y": 215,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "One public release",
        "x": 64,
        "y": 390,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Keep source, assets and write-ups together with a deterministic ZIP. Preserve stable URLs and exclude private preparation material.",
        "x": 64,
        "y": 434,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "Evidence beyond a manifest",
        "x": 672,
        "y": 390,
        "w": 536,
        "h": 38,
        "size": 23,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Hashes verify bytes. Fresh extraction, actual flow tests and rendered checks establish different parts of completeness and behavior.",
        "x": 672,
        "y": 434,
        "w": 536,
        "h": 158,
        "size": 26,
        "color": "#1C2331"
      },
      {
        "type": "text",
        "text": "This presentation is supplemental. The original quiz ZIP and its 46 release files retain their pinned bytes.",
        "x": 64,
        "y": 628,
        "w": 1135,
        "h": 59,
        "size": 20,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "35",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ]
  },
  {
    "number": 36,
    "title": "Explore the submission",
    "notes": "These are the public reviewer artifacts referenced throughout the case study. The original ZIP provides the offline submission at the pinned prototype release. This presentation is a supplemental walkthrough and does not replace the three required write-ups, four full flows or three required creatives. Private interview notes, prompts, email contents and raw audit evidence remain outside the public presentation.",
    "sources": [
      {
        "label": "Official challenge brief",
        "url": "https://challenge.arpeely.com/index.html"
      },
      {
        "label": "Flow explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part1-flow-writeup.pdf"
      },
      {
        "label": "A/B test explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part2-ab-tests-writeup.pdf"
      },
      {
        "label": "Creative explanation",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part3-creatives-writeup.pdf"
      }
    ],
    "background": "#F6F2EA",
    "elements": [
      {
        "type": "text",
        "text": "Explore the submission",
        "x": 64,
        "y": 46,
        "w": 1140,
        "h": 104,
        "size": 46,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Part 1  The flow",
        "x": 64,
        "y": 169,
        "w": 343,
        "h": 48,
        "size": 31,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Part 2  The experiments",
        "x": 447,
        "y": 169,
        "w": 359,
        "h": 80,
        "size": 31,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Part 3  The creatives",
        "x": 856,
        "y": 169,
        "w": 358,
        "h": 80,
        "size": 31,
        "color": "#1C2331",
        "bold": true
      },
      {
        "type": "text",
        "text": "Part 1 explanation",
        "x": 64,
        "y": 264,
        "w": 344,
        "h": 48,
        "size": 27,
        "color": "#2F7A4F",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part1-flow-writeup.pdf",
        "underline": true
      },
      {
        "type": "text",
        "text": "Control flow",
        "x": 64,
        "y": 332,
        "w": 344,
        "h": 48,
        "size": 27,
        "color": "#2F7A4F",
        "url": "https://yosishe.github.io/iqly-flow/",
        "underline": true
      },
      {
        "type": "text",
        "text": "Part 2 explanation",
        "x": 447,
        "y": 264,
        "w": 370,
        "h": 48,
        "size": 27,
        "color": "#2F7A4F",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part2-ab-tests-writeup.pdf",
        "underline": true
      },
      {
        "type": "text",
        "text": "Test 1: Score first",
        "x": 447,
        "y": 332,
        "w": 370,
        "h": 48,
        "size": 27,
        "color": "#2F7A4F",
        "url": "https://yosishe.github.io/iqly-flow/variant-1-score-first.html",
        "underline": true
      },
      {
        "type": "text",
        "text": "Test 2: Eight questions",
        "x": 447,
        "y": 400,
        "w": 370,
        "h": 48,
        "size": 27,
        "color": "#2F7A4F",
        "url": "https://yosishe.github.io/iqly-flow/variant-2-eight-questions.html",
        "underline": true
      },
      {
        "type": "text",
        "text": "Test 3: Signup first",
        "x": 447,
        "y": 468,
        "w": 370,
        "h": 48,
        "size": 27,
        "color": "#2F7A4F",
        "url": "https://yosishe.github.io/iqly-flow/variant-3-signup-first.html",
        "underline": true
      },
      {
        "type": "text",
        "text": "Part 3 explanation",
        "x": 856,
        "y": 264,
        "w": 355,
        "h": 48,
        "size": 27,
        "color": "#2F7A4F",
        "url": "https://yosishe.github.io/iqly-flow/writeups/part3-creatives-writeup.pdf",
        "underline": true
      },
      {
        "type": "text",
        "text": "320 × 50 banner",
        "x": 856,
        "y": 332,
        "w": 355,
        "h": 48,
        "size": 27,
        "color": "#2F7A4F",
        "url": "https://yosishe.github.io/iqly-flow/ads/ad-320x50.png",
        "underline": true
      },
      {
        "type": "text",
        "text": "250 × 250 creative",
        "x": 856,
        "y": 400,
        "w": 355,
        "h": 48,
        "size": 27,
        "color": "#2F7A4F",
        "url": "https://yosishe.github.io/iqly-flow/ads/ad-250x250.png",
        "underline": true
      },
      {
        "type": "text",
        "text": "1080 × 1920 creative",
        "x": 856,
        "y": 468,
        "w": 355,
        "h": 48,
        "size": 27,
        "color": "#2F7A4F",
        "url": "https://yosishe.github.io/iqly-flow/ads/ad-1080x1920.png",
        "underline": true
      },
      {
        "type": "text",
        "text": "Public source and supporting records",
        "x": 64,
        "y": 591,
        "w": 1050,
        "h": 48,
        "size": 29,
        "color": "#2F7A4F",
        "url": "https://github.com/yosishe/iqly-flow",
        "underline": true
      },
      {
        "type": "text",
        "text": "The ZIP supplies the offline release. These links open the corresponding public artifacts.",
        "x": 64,
        "y": 650,
        "w": 1130,
        "h": 54,
        "size": 21,
        "color": "#4A5160"
      },
      {
        "type": "text",
        "text": "36",
        "x": 1214,
        "y": 674,
        "w": 38,
        "h": 30,
        "size": 18,
        "color": "#4A5160",
        "align": "right"
      }
    ],
    "section": "Submission links"
  }
];
