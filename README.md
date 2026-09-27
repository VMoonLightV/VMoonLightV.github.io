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

## Adding a new Note

Create a folder and `index.md` (or `index.mdx`) under `src/content/notes/`. The folder hierarchy becomes the URL hierarchy: for example, `src/content/notes/physics/qft/example/index.md` becomes `/notes/physics/qft/example/`.

Use the article frontmatter fields `id`, `title`, `date`, and `lang`; `description`, `translation`, and `draft` are optional. Each `id` should remain stable, even if the content location changes later.

## Adding a new Looking article

Create the same folder-and-`index.md` (or `.mdx`) structure under `src/content/looking/`. It is automatically listed and routed under `/looking/`.

## Adding a Research item

Create a Markdown or MDX file under `src/content/research/` with frontmatter for `id`, `title`, `date` (`YYYY-MM`), `image`, `description`, and `links`. `links` is an array of `{ label, href }` objects. The research index renders each item through the shared `ResearchEntry` component.

## Chinese content

Chinese notes and Looking articles live under `src/content/zh/notes/` and `src/content/zh/looking/`; they are routed below `/zh/`. Chinese top-level pages are separate Astro files under `src/pages/zh/`, so the two language trees can grow independently.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml` and deploys to GitHub Pages. This repository name is configured as the user site at `https://vmoonlightv.github.io/`. If it is moved to a project repository or a custom domain is added, update `site` (and, if required, `base`) in `astro.config.mjs`.
