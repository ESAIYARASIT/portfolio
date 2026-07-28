# Your Name — Portfolio

A single-page, mobile-friendly portfolio built with plain HTML, CSS and JavaScript.
No build tools, no npm install — just open it in a browser.

## Folder structure

```
portfolio/
├── index.html          # All sections: Home, About, Skills, Projects, Contact
├── resume.html          # Print-friendly resume page (fallback if the PDF download fails)
├── css/
│   └── style.css        # Theme (white + soft yellow + gold), layout, animations
├── js/
│   └── script.js         # Loader, typing effect, magnetic buttons, scroll reveals, form
└── assets/
    └── resume.pdf        # <-- ADD YOUR OWN RESUME FILE HERE (see below)
```

## Dependencies

None to install. It uses two CDN-hosted resources loaded via `<script>`/`<link>` tags, so an internet connection is needed in the browser:
- **Google Fonts** — Cormorant Garamond (display) + Poppins (body)
- **Lucide Icons** (`unpkg.com/lucide`) — the icon set used for the resume button, contact items, GitHub/live-demo links, certificate link, and the back-to-top button. Loaded with `defer` and initialized in `script.js` via `lucide.createIcons()`.
- `https://placehold.co` for placeholder project images — replace with your own images before publishing (see below).

No npm, no bundler, no framework — works by simply opening `index.html`, or serving the folder with any static server.

## Setup

1. **Add your resume**
   Place your real resume file at `assets/resume.pdf` (must be named exactly `resume.pdf`, or update the `href` in `index.html`'s Download Resume button to match your filename).

2. **Replace placeholder project images**
   In `index.html`, swap each `https://placehold.co/...` image URL under `.project-image img` with your own screenshots, e.g. `assets/images/project1.png`. Create an `assets/images/` folder for these.

3. **Update your real content**
   - Name, roles, avatar initials — in the hero card.
   - Skills, relevant projects per skill.
   - Experience details + certificate link (`href="#"` currently — point it to your certificate PDF or image).
   - Project descriptions, GitHub links, and live demo links.
   - About Me paragraph and quote.
   - Contact info: email, LinkedIn, GitHub, phone.

4. **Feedback form (currently front-end only)**
   Right now, submitting the form just shows a "Thanks!" message locally — it doesn't send anywhere. To actually receive feedback, wire it up to one of:
   - [Formspree](https://formspree.io) (easiest — just change the form's `action` and method, no backend needed)
   - [EmailJS](https://www.emailjs.com) (send straight to your inbox from client-side JS)
   - Your own backend endpoint (Node/Express, etc.)

5. **Open it**
   Just double-click `index.html`, or for the best experience (avoids some browser file:// restrictions), serve it locally:
   ```bash
   npx serve portfolio
   # or
   python3 -m http.server 8000
   ```

## Features included

- Page loader with progress bar animation on load.
- Sticky, blurred navbar with active-link highlighting and a mobile hamburger menu (slide-in panel).
- Anchor links scroll to the correct spot without being hidden behind the sticky navbar (`scroll-padding-top` + `scroll-margin-top`).
- Hero card: name in large elegant serif type, roles that type/delete in a loop, resume download button, plus a "View resume online" link.
- `resume.html` — a standalone, print-friendly resume page styled to match the site, with a "Print / Save as PDF" button. Acts as a fallback if `assets/resume.pdf` is missing or the download fails, and doubles as a quick way to keep your resume up to date without re-exporting a PDF every time.
- Glassmorphism cards throughout (skills, experience, projects, about, contact) with soft gold borders/shadows.
- Fade-in-on-scroll for every major section (IntersectionObserver).
- Image reveal animation for project screenshots as they scroll into view.
- Magnetic hover effect on buttons and contact links.
- Two-projects-per-row responsive grid, each with a GitHub link.
- Consistent icon set (Lucide) used everywhere instead of mixed emoji/text — resume, contact methods, GitHub/live-demo/certificate links, and the back-to-top button.
- Floating "back to top" button that fades in once you scroll past the hero card.
- Star rating + feedback form for visitors to rate the site.
- Fully responsive down to small mobile widths.

## Suggestions / next steps

- **Real resume & images**: swap the placeholders described above before sharing the link.
- **Accessibility**: the hamburger button and stars are keyboard-clickable by default; consider adding `aria-pressed` state to the star rating for screen readers if you want to polish further.
- **SEO**: add meta description/Open Graph tags in `<head>` if you plan to share this link on social media.
- **Deploy for free**: GitHub Pages, Netlify, or Vercel all work well for a static site like this — just push the `portfolio/` folder contents to a repo and connect it.
- **Custom domain**: once deployed, most of the above hosts let you attach a custom domain for free.
- **Dark mode (optional)**: if you'd like a toggle later, the CSS custom properties in `:root` make that straightforward to add.
