# Accessibility Good Practices (With Examples)

This document shows practical patterns you can apply immediately.

## 1) Prefer semantic HTML

Use built-in elements before ARIA.

Good:

```html
<button type="button">Save</button>
<nav aria-label="Primary">
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>
```

Avoid:

```html
<div role="button" tabindex="0">Save</div>
<div onclick="goHome()">Home</div>
```

Why: Native elements include keyboard behavior, semantics, and assistive tech support by default.

## 2) Labels and form instructions

Good:

```html
<label for="email">Email address</label>
<input id="email" name="email" type="email" autocomplete="email" required>
<p id="email-help">Use your work email.</p>
```

Better with help linkage:

```html
<input aria-describedby="email-help" ...>
```

Avoid placeholder-only labels.

## 3) Keyboard and visible focus

Good:

```css
:focus-visible {
  outline: 3px solid #0b57d0;
  outline-offset: 2px;
}
```

Avoid removing outlines globally:

```css
*:focus { outline: none; }
```

## 4) Headings and landmarks

Good page skeleton:

```html
<header>...</header>
<nav aria-label="Primary">...</nav>
<main id="main-content">
  <h1>Page title</h1>
  <section>
    <h2>Section title</h2>
  </section>
</main>
<footer>...</footer>
```

Use one `<h1>` that describes the page. Do not skip heading levels for visual style.

## 5) Color contrast

- Normal text: contrast ratio at least 4.5:1.
- Large text (18pt regular or 14pt bold+): at least 3:1.

Tip: pick colors with enough contrast first, then design around them.

## 6) Accessible images and media

- Informative images need meaningful `alt`.
- Decorative images should have empty `alt=""`.
- Video/audio should provide captions or transcript where possible.
- Avoid autoplay with sound.

## 7) Dialogs and focus management

- Use `<dialog>` when possible.
- Move focus into the dialog when opened.
- Keep focus inside while open.
- Return focus to trigger when closed.
- Support `Escape` to close.

## 8) Motion and reduced-motion preferences

Good:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

Do not force parallax or flashing effects for all users.

## 9) ARIA guideline

First rule of ARIA: if you can use a native element or attribute, do that.

Common useful ARIA:

- `aria-label` for icon-only controls.
- `aria-describedby` for supplementary instructions.
- `aria-live="polite"` for async status updates.

Common misuse:

- Adding redundant roles (`<button role="button">`).
- Using ARIA to patch broken semantics instead of fixing HTML.
