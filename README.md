# Personal website

## Development

```bash
npm install
npm run dev
```

## Production preview

```bash
npm run build
npm run preview
```

## Formatting

Format all supported project files with:

```bash
npm run format
```

Use `npm run format:check` in CI or before committing to verify that the project is already formatted.

## Editing the cover and templates

The English homepage content lives in `src/pages/index.astro`, and the Chinese homepage content lives in `src/pages/zh/index.astro`. Both pages pass their text, personal information, and links to the shared layout in `src/components/HomeCover.astro`. The component controls presentation only, so changing the page content still changes the layout through its natural text height. The avatar is displayed in full from `public/images/avatar.png`.

Bracketed text and “Writing template” labels are reference prompts, not biographical claims or actual publications. Replace them with authored text before publishing. The CV is plain text until a real file is supplied; add the file under `public/files/` and replace that text with a link. About and Publications templates live in their respective page files; article templates remain in `src/content/`.

Shared typography, spacing, and colors are in `src/styles/`. The site uses system fonts, plain CSS, and no client-side UI framework. Article language links appear only when a translation is available.

## Adding a new Note

Create a folder and `index.md` (or `index.mdx`) under `src/content/notes/`. The folder hierarchy becomes the URL hierarchy: for example, `src/content/notes/physics/qft/example/index.md` becomes `/notes/physics/qft/example/`.

Use the article frontmatter fields `id`, `title`, `date`, and `lang`; `description`, `translation`, and `draft` are optional. Each `id` should remain stable, even if the content location changes later.

## Adding a new Beyond article

Create the same folder-and-`index.md` (or `.mdx`) structure under `src/content/beyond/`. It is automatically listed and routed under `/beyond/`.

## Adding a Research item

Create a Markdown or MDX file under `src/content/research/` with frontmatter for `id`, `title`, `date` (`YYYY-MM`), `image`, `description`, and `links`. `links` is an array of `{ label, href }` objects. The research index renders each item through the shared `ResearchEntry` component.

## Chinese content

Chinese notes and Beyond articles live under `src/content/zh/notes/` and `src/content/zh/beyond/`; they are routed below `/zh/`. Chinese top-level pages are separate Astro files under `src/pages/zh/`, so the two language trees can grow independently.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml` and deploys to GitHub Pages. This repository name is configured as the user site at `https://vmoonlightv.github.io/`. If it is moved to a project repository or a custom domain is added, update `site` (and, if required, `base`) in `astro.config.mjs`.
