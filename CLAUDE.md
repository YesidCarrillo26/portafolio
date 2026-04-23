# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

There are no tests or linters configured in this project.

## Architecture

Single-page React portfolio built with Vite and React Router v6. The entire app renders on one route (`/`) — `BrowserRouter` wraps the layout in `App.jsx`, which persistently renders `Navbar` and `Footer` around the `<Routes>` outlet.

**Data flow:** `src/data/projects.js` exports a plain `projects` array. `Projects.jsx` imports it directly and `.map()`s over it — no state, no context, no fetching. To add or modify projects, edit only that file.

**Styling:** A single global stylesheet at `src/styles/globals.css` covers all components using plain CSS class names (no CSS modules, no Tailwind). All section IDs (`#home`, `#projects`, `#skills`, `#contact`) are used as anchor targets by `Navbar.jsx`.

**Sections on the Home page:** Hero → Projects (from `projects.js`) → Skills (hardcoded in `Home.jsx`) → Contact (email hardcoded in `Home.jsx`). Skills and Contact sections live directly in `src/pages/Home.jsx`, not in separate component files.

## Customization touchpoints

| What to change | Where |
|---|---|
| Name / headline | `src/components/Hero.jsx` |
| Nav logo text | `src/components/Navbar.jsx` |
| Projects list | `src/data/projects.js` |
| Skills list | `src/pages/Home.jsx` (inline JSX) |
| Contact email | `src/pages/Home.jsx` |
| Social links | `src/components/Footer.jsx` |
| Colors / fonts | `src/styles/globals.css` |
| Page title / lang | `index.html` |

## Project data shape

Each entry in `src/data/projects.js` must follow this shape:

```js
{
  id: number,         // unique key for React
  title: string,
  description: string,
  image: string,      // URL
  tags: string[],
  github: string,     // URL
  live: string        // URL
}
```
