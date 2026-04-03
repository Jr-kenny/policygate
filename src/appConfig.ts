export const appConfig = {
  "slug": "policygate",
  "name": "PolicyGate",
  "oneLiner": "Check ad copy or public claims before a team ships a compliance risk.",
  "pitch": "Paste the copy and the policy. The contract decides whether the message is safe, needs edits, or should be blocked.",
  "mode": "nonComparative",
  "primaryLabel": "Ad copy, product claim, or announcement",
  "secondaryLabel": "Compliance or brand policy",
  "primaryPlaceholder": "Our supplement cures burnout in 48 hours and doubles focus. Trusted by doctors worldwide.",
  "secondaryPlaceholder": "Do not claim guaranteed medical outcomes. Avoid unsupported authority statements or hidden conditions.",
  "task": "Review the copy against the policy and decide whether it should be approved, reviewed, or rejected.",
  "criteria": "Output must be valid JSON with keys headline, verdict, score, reasons, next_action, proof_of_advantage. verdict must be APPROVE, REVIEW, or REJECT. score must be an integer 0-100. reasons must contain exactly 3 short strings tied to policy fit, missing proof, or risk.",
  "judgingPoints": [
    "Very clear real-world pain.",
    "Non-comparative checks make the consensus rule easy to explain.",
    "Fast to demo with dramatic before and after inputs."
  ],
  "theme": {
    "accent": "#7c3aed",
    "accentSoft": "#ede9fe",
    "surface": "#f7f5ff",
    "ink": "#1f1338"
  },
  "modeLabel": "Non-comparative equivalence"
} as const;
