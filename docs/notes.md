# Tracktify – Development Notes

## ♿ Accessibility Notes

### Already implemented

- Semantic regions are used throughout the layout:
  - `<header>`, `<main>`, `<nav>`, `<section>`, and `<footer>`.
- The main player area is exposed as a named region:
  - `role="region"` with an appropriate `aria-label`.
- The primary navigation has an `aria-label` to make its purpose clear to screen readers.
- The “Now Playing” text container uses `aria-live="polite"` so updates to the song/artist are announced without being intrusive.
- Keyboard focus indicators are present on all interactive elements:
  - Navigation buttons, player links, album covers, and track cards.
- The marquee animation respects the user’s motion preferences:
  - If `prefers-reduced-motion: reduce` is set, the animation is disabled.
- The progress bar is treated as decorative:
  - Marked with `aria-hidden="true"` and removed from the tab order with `tabindex="-1"`.

### Planned accessibility work

- Refine the tabbed navigation semantics:
  - Consider using `role="tablist"`, `role="tab"`, and `role="tabpanel"` and announcing tab changes.
- Re-audit color contrast with Lighthouse/axe and adjust token colors if needed.
- Validate tooltip behavior with keyboard + screen readers to ensure it remains non-essential, purely informational.

---

## 🔮 Roadmap / Future Work

### Data & API

- Replace static data with the **Spotify Web API**:
  - Implement user authentication.
  - Fetch real **top tracks**, **playlists**, and **artists**.
  - Populate the UI dynamically from API responses.

### Views & Navigation

- Implement real content for:
  - **“Your Playlists”** view.
  - **“Artists”** view.
- Hook up tab switching logic so each button shows its corresponding section and manages focus correctly.

### Player Features

- Live current time and duration updates.

### Theming & UX

- Add a **dark / light theme toggle**:
  - Use CSS variables plus `prefers-color-scheme` as a default.
- Add more micro-interactions (subtle transitions on tab change, hover states, etc.).

### Quality & Architecture

- Add unit tests for:
  - Marquee overflow detection logic.
  - Basic accessibility checks (e.g. using axe-core or similar tools).
- Explore migrating the prototype to a component-based framework:
  - React or similar, while keeping the same visual design.
