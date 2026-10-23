# Personal portfolio

Portfolio site for **Dhana Sekaran Chellamuthu** — Senior Full Stack Engineer.

Built with React 19, TypeScript, Vite and Tailwind CSS v4. Static single-page site, deployed to
GitHub Pages at <https://dhanasekaranc.github.io/personal-portfolio/>.

## Development

```bash
npm install
npm run dev
```

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the Vite dev server         |
| `npm run build`   | Type-check and build to `dist/`   |
| `npm run preview` | Preview the production build      |
| `npm run lint`    | Run oxlint                        |

## Editing content

All copy lives in typed files under `src/content/` — no component changes needed:

| File               | Contents                                    |
| ------------------ | ------------------------------------------- |
| `profile.ts`       | Name, role, summary, stats, contact details |
| `experience.ts`    | Companies, roles and achievement bullets    |
| `projects.ts`      | Anonymised client case studies              |
| `skills.ts`        | Grouped skills                              |
| `education.ts`     | Education and certifications                |
| `socials.ts`       | GitHub, LinkedIn, email, phone links        |

Achievement bullets support `**bold**` for emphasising metrics.

## Structure

```
src/
  components/
    layout/     Header, Footer, ThemeToggle
    sections/   Hero, About, Experience, Projects, Skills, Education, Contact
    theme/      Theme context and provider
    ui/         Reveal, SectionHeading, RichText
  content/      Typed portfolio content
  hooks/        useActiveSection
  index.css     Tailwind theme tokens and base styles
```

Theming uses CSS variables defined in `src/index.css` (`:root` for light, `.dark` for dark).
The inline script in `index.html` applies the saved theme before paint to avoid a flash.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages. One-time setup: in the repository, go to **Settings → Pages → Build and deployment**
and set **Source** to **GitHub Actions**.

`vite.config.ts` sets `base: '/personal-portfolio/'` to match the project-page URL. If the
repository is renamed or a custom domain is added, update `base` and the absolute URLs in
`index.html`, `public/robots.txt` and `public/sitemap.xml`.
