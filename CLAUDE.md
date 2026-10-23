# CLAUDE.md

This file guides Claude Code when working in this project.

## Overview

A three-page marketing website for **HabitTrail**, a habit-tracking app. It uses plain HTML, CSS, and JavaScript only, with no framework, build step, or package manager. The plan for the site (visitors, site map, page content, success criteria) is in `WEBSITE-BRIEF.md`. Read it before adding page content.

## Structure

```
index.html      Home: what HabitTrail is, main features, a clear next step
support.html    Support: answers to common new-user questions
privacy.html    Privacy: what data is collected, why, how to request deletion
css/style.css   One shared stylesheet for all pages (design tokens + base styles)
js/main.js      One shared script for all pages (empty for now)
notes/          The user's own notes (empty)
```

- Every page links `css/style.css` and loads `js/main.js` with `defer` in `<head>`. Keep this the same on all three pages.
- Planned links: Home links to Support and Privacy, and Support and Privacy each link back to Home. They don't exist yet.
- Put images in an `images/` folder when they're needed.

## Commands

There's no build or install step. To view a page, open it in a browser with `open index.html` or by double-clicking it in Finder.

## Conventions

- Pages are in Korean. Keep `lang="ko"` and `<meta charset="UTF-8">`.
- Tab titles use the format `페이지명 | HabitTrail`. The home page's title is just `HabitTrail`.
- Each page has exactly one `<h1>`.
- Use relative paths (`css/style.css`, `support.html`) so pages work when opened straight from disk.

## Design system

The design tokens are CSS variables on `:root` in `css/style.css`. Use them instead of raw values.

- Colors: primary Trail Green `#2F7D5B` for the `<h1>`, buttons, and links. Secondary Streak Amber `#F2A93B` for accents only, since it's too light for text. Its pale tint `#FDF1DC` is the section background.
- Fonts: Jua for headings and Noto Sans KR for body text, both loaded from Google Fonts in every page's `<head>` before `style.css`.
- Spacing: 8 / 16 / 32 / 64px (`--space-s/m/l/xl`). Sections inside `<main>` are 64px apart.
- Corner radius: 12px (`--radius`) for buttons and cards.
- Mark call-to-action links with `class="button"`.

## Secrets

`.env` is in `.gitignore`, along with `.env.*` and `.DS_Store`, so it is never committed. A static site can't read `.env`, and any key written into HTML or JS is visible to every visitor. Never put secrets in page code.

## Working with this user

- The user is new to coding. Explain things in plain, non-technical language.
- Reply in the language the user writes in (often Korean).
- Build in small steps and add only what is asked. Ask before adding styling, scripts, or extra pages.
- Explain the cause of a bug before fixing it, and keep fixes minimal.
- Commit only when the user asks.
