# Web Accessibility Challenge Lab

A hands-on mini-lab to learn practical web accessibility (a11y) by fixing intentionally flawed pages.

## What you will practice

- Semantic HTML and landmarks
- Forms and labels
- Keyboard navigation and focus management
- Color contrast and readable typography
- Motion sensitivity and reduced-motion support
- ARIA usage (and when not to use it)

## Recommended workflow

1. Start with one challenge in `challenges/`.
2. Run the page locally in a browser.
3. Use keyboard only (`Tab`, `Shift+Tab`, `Enter`, `Space`, arrow keys).
4. Use browser accessibility tooling (Accessibility tree, Lighthouse, axe extension).
5. Fix issues directly in each challenge file.
6. Compare with examples in `examples/good/` only after you attempt your own solution.

## Project layout

- `docs/good-practices.md`: documented accessibility patterns and anti-patterns.
- `docs/challenge-tasks.md`: challenge goals, constraints, and acceptance criteria.
- `challenges/`: broken pages for you to fix.
- `examples/good/`: reference implementations using good practices.

## How to run

From this folder, run:

```bash
python3 -m http.server 8080
```

Then open:

- `http://localhost:8080/challenges/01-landmarks-form/index.html`
- `http://localhost:8080/challenges/02-keyboard-modal/index.html`
- `http://localhost:8080/challenges/03-media-motion/index.html`

## Challenge rules

- Try to solve each challenge before opening the reference example.
- Favor native HTML semantics before adding ARIA.
- Keep interactions usable with keyboard only.
- Do not remove functionality to "pass" accessibility checks.

## Success checklist

- All interactive controls are keyboard reachable.
- Every form control has a visible label.
- Focus is always visible and never trapped unexpectedly.
- Color contrast passes WCAG AA for normal text.
- Motion-heavy effects respect `prefers-reduced-motion`.
- Page structure is understandable through landmarks and headings.

Good luck. The goal is not just passing tools, but creating pages that are actually usable for real people.
