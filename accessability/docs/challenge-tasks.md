# Challenge Tasks

Each challenge starts intentionally broken. Your job is to make it usable and standards-aligned.

## Challenge 1: Landmarks + Forms

File: `challenges/01-landmarks-form/index.html`

### Your tasks

1. Replace non-semantic structures with semantic landmarks (`header`, `nav`, `main`, `footer`).
2. Ensure heading hierarchy is logical and sequential.
3. Fix form labeling so every input has a visible label.
4. Connect help/error text via `aria-describedby` when needed.
5. Ensure focus styles are visible.
6. Improve color contrast where text is hard to read.

### Acceptance criteria

- Keyboard users can complete and submit the form.
- Screen reader users can identify each field purpose.
- Visual focus is obvious on all controls.

## Challenge 2: Keyboard Modal

File: `challenges/02-keyboard-modal/index.html`

### Your tasks

1. Make the modal open and close accessibly.
2. Move focus into modal on open.
3. Trap focus while modal is open.
4. Return focus to trigger on close.
5. Allow closing with Escape.
6. Prevent background content from being focusable while modal is open.

### Acceptance criteria

- Keyboard cannot tab into background while dialog is open.
- Focus returns to the button that launched modal.
- Modal has a proper accessible name.

## Challenge 3: Media + Motion

File: `challenges/03-media-motion/index.html`

### Your tasks

1. Remove inaccessible autoplay behavior and flashing effects.
2. Add meaningful alt text strategy for images.
3. Add captions/transcript guidance for media.
4. Add reduced-motion support for animations.
5. Ensure interactive controls have accessible names.

### Acceptance criteria

- Page remains usable with reduced motion enabled.
- Media and images expose useful alternatives.
- No rapid flashing or forced motion patterns.

## Stretch goals

1. Add a skip link in each challenge.
2. Add a lightweight automated audit script (Lighthouse or axe).
3. Create a short changelog for each challenge describing what you fixed and why.
