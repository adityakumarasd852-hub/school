# Greenfield School Website

Premium, animated, responsive school website built with Next.js, Tailwind CSS, GSAP, Framer Motion, Swiper, and Lenis.

## Local Run

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Live on GitHub Pages

This project is configured for GitHub Pages static deployment.

- Repository expected: `https://github.com/adityakumarasd852-hub/school`
- Workflow file: [.github/workflows/deploy.yml](C:\Users\Adity\OneDrive\Desktop\swebsite\.github\workflows\deploy.yml)
- `next.config.ts` already includes static export + repo base path.

After pushing to `main`, enable:

1. GitHub repo -> `Settings`
2. `Pages`
3. Source = `GitHub Actions`

Your live URL will be:

`https://adityakumarasd852-hub.github.io/school/`

## Enquiry Form (Email)

Admissions enquiry uses FormSubmit (works on static hosting) and sends to:

`adityakumarasd852@gmail.com`

On first live submission, FormSubmit may send a one-time activation email. Confirm it once, then all enquiries will arrive normally.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- GSAP
- Framer Motion
- Swiper.js
- Lenis smooth scroll
- Lucide icons
