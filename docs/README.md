# Tracktify - Modern Spotify Dashboard (UI Prototype)

Tracktify is a front-end UI prototype inspired by Spotify's "Your Top Tracks" section.
It focuses on  **clean visual design**, **good accessibility practices**, and **responsive layout**, using only HTML, CSS and vanilla JavaScript.

> ⚠️ This is a **static demo**. All tracks and links are hard-coded; there is no real Spotify authentication or API integration yet.

---

## ✨ Features

- **Now Playing card**
  - Large album cover with subtle hover animation and tooltip with song + artist.
  - Song title and artist with overflow handling using marquee effect and providing accessibility for users using prefered **prefers-reduced-motion**.
  - Disabled (read-only) progress bar with time labels.

- **Main Navigation**
  - "Top Tracks", "Your Playlists", and "Artists" tabbed navigation.
  - Active tab pill with soft shadow and keyboard focus support.
  - Prepared to swap content dynamically in the future (currently only Top Tracks is available with static data).

- **Top Tracks grid**
  - Responsive cards showing:
    - Album artwork.
    - Song name.
    - Artist Name.
    - Extra metadata on smaller screens and in the future for bigger screens (album, duration, times played).
  - Each card is full clickable link (opens the song on Spotify in a new tab).
  - Index number in the bottom-right corner pointing the ranking (1-5) with subtle shadow.

- **Tooltips**
  - Custom tooltip on album covers using a `data-tooltip` attribute.
  - Shows "Song · Artist" when hovering/focusing the cover.

- **Accessibility / a11y**
  - Semantic HTML: `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`.
  - ARIA attributes where needed:
    - `role="region"` and `aria-label` for the player.
    - `aria-live="polite"` for the “Now Playing” text container.
    - `aria-label` for the main nav and `aria-current="page"` on the active tab.
  - Keyboard navigation:
    - Tab through nav, player links, and all track cards.
    - Custom focus styles on cards, nav buttons and album covers.
  - Disabled progress bar is removed from the tab order (`tabindex="-1"`) and marked `aria-hidden="true"`.

---

## 🧱 Tech Stack

- **HTML5**
  - Semantic structure.
  - Hard-coded data for tracks and artists.
- **CSS3**
  - Custom design system using CSS variables in `theme.css`:
    - Colors, shadows, font sizes, border radius.
  - Split Styles:
    - `base.css` - reset + global typography & body background.
    - `layout.css` - layout, flexbox structure, responsive breakpoints.
    - `components.css` - player, cards, navigation, text styles.
    - `utils.css` - utilities (active states, tooltips, marquee logic hooks).
    - `theme.css` - design tokens (colors, border radius, font scales, shadows).
  - Responsive design with multiple breakpoints (desktop, tablet, mobile).
- **JavaScript (vanilla)**
  - `ui.js`:
    - Marquee detection (`scrollWidth > clientWidth`) and class toggling.
    - Recalculation of marquee on window resize.
    - Dynamic footer year.

---

## 📁 Project Structure

Spotify-dashboard/
│
├─ index.html
├─ docs/
│  ├─ README.md # General information about the proyect.
│  └─ notes.md # Future features, pending tasks, etc.
│
└─ assets/
   ├─ css/
   │  ├─ base.css        # Reset + base typography & body styles
   │  ├─ utils.css       # Utilities (active state, tooltip, marquee)
   │  ├─ components.css  # Player, nav, content cards, text styles
   │  ├─ layout.css      # Layout, flexbox, responsive behavior
   │  └─ theme.css       # Design tokens (colors, border radius, shadows, fonts)
   ├─ img/
   │  ├─ sicko_mode_portrait.jpg
   │  ├─ highestintheroom_portrait.jpg
   │  ├─ sitepillara_portrait.jpg
   │  ├─ raindrops_portrait.jpg
   │  ├─ journey_portrait.jpg
   │  ├─ shiawase_portrait.jpg
   │  └─ spotify-logo.png
   └─ js/
      ├─ api.js # Nothing here yet
      ├─ app.js # Nothing here yet
      ├─ auth.js # Nothing here yet
      ├─ state.js # Nothing here yet
      └─ ui.js # Marquee logic + footer year

---

## 🚀 Getting Started

1. Clone / download this repository.
2. Open index.html directly in your browser or run a small local server.
3. Hover and tab around:
   - Try long titles to see the marquee effect.
   - Navigate with Tab and Shift + Tab.
   - Inspect tooltips on album covers.

No build step is required: it’s 100% static.
