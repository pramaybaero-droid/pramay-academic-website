# Pramay Academic Website

A production-ready personal academic website for granular mechanics, constitutive modelling, wave propagation, DEM, contact mechanics, triaxial simulation, and scientific computing.

Built with:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Structured content files under `src/content`
- Local placeholder assets under `public/assets`
- Vercel-ready configuration

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For production:

```bash
npm run build
npm run start
```

## Main Content Files

Edit these files to update the website without redesigning pages:

- Profile, identity, social links: `src/content/profile.ts`
- Research themes: `src/content/research.ts`
- Publications: `src/content/publications.ts`
- Projects and software: `src/content/projects.ts`
- News and updates: `src/content/news.ts`
- Media gallery items: `src/content/media.ts`
- CV sections: `src/content/cv.ts`
- Research notes or future blog MDX: `src/content/notes/`

## Replace Key Placeholders

### Name and Academic Profile

Update `src/content/profile.ts`:

- `name`
- `email`
- `department`
- `affiliation`
- Google Scholar URL
- ORCID URL
- LinkedIn URL
- GitHub URL
- institutional profile URL

### CV

Replace:

```text
public/cv/pramay-cv-placeholder.pdf
```

Keep the same filename if you want all existing download buttons to work automatically, or update `profile.cvPath` in `src/content/profile.ts`.

### Portrait

Replace:

```text
public/assets/portrait-placeholder.svg
```

Recommended dimensions: portrait crop around 4:5, at least 1200px tall. If using a JPG or PNG, update `profile.portrait`.

### Publications

Add real publication records in `src/content/publications.ts`.

Each record supports:

- title
- authors
- venue
- year
- type
- topics
- selected / featured flags
- DOI
- PDF
- preprint
- BibTeX

The current publication is intentionally marked as a placeholder and should be replaced before launch.

### Projects and Software

Edit `src/content/projects.ts`.

Each project card supports:

- title
- short and long description
- status
- tags
- tech stack
- preview image
- GitHub link
- live demo link
- documentation link

The triaxial simulator card is already configured as the featured project.

### Simulations

The main simulator launch section is in:

```text
src/app/simulations/page.tsx
```

Replace the placeholder launch target with the deployed simulator URL when ready. If the simulator lives inside this site later, add a route such as `src/app/simulations/triaxial/page.tsx`.

### Media and Videos

Add optimized media under:

```text
public/media/
```

Then update `src/content/media.ts`.

Use WebM or MP4 for animations. Keep large files compressed and provide a lightweight thumbnail under `public/assets/`.

## Page Structure

- `/` Home
- `/about`
- `/research`
- `/publications`
- `/projects`
- `/simulations`
- `/media`
- `/cv`
- `/contact`

## Design System Notes

The site uses a dark default theme with an optional light mode. Core visual tokens live in `src/app/globals.css`, and the Tailwind token mapping lives in `tailwind.config.ts`.

Reusable components are organized under:

- `src/components/layout`
- `src/components/sections`
- `src/components/ui`
- `src/components/visuals`

## SEO

Global metadata, Open Graph data, Twitter cards, and JSON-LD Person schema are defined in `src/app/layout.tsx`.

Also update:

- `siteUrl` in `src/content/profile.ts`
- `public/assets/og-image.svg` or replace it with a PNG/JPG preview
- page-specific metadata in each `src/app/**/page.tsx`

## Accessibility and Performance

The implementation includes:

- semantic landmarks
- accessible labels on controls
- reduced-motion handling for animations
- responsive images
- lazy image loading by default
- keyboard-friendly command palette and filters
- printable CV styles

Keep future videos lazy-loaded and compressed. Prefer short loops or poster images for heavy simulation media.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Confirm:

```text
Install Command: npm install
Build Command: npm run build
Output: Next.js default
```

The included `vercel.json` already matches these defaults.

## Pre-Launch Checklist

- Replace surname placeholder.
- Replace institutional email.
- Replace portrait placeholder.
- Replace CV PDF.
- Replace profile links.
- Replace placeholder publications with real records.
- Update `siteUrl`.
- Add real simulator links.
- Add real media files and thumbnails.
- Run `npm run build`.
