This is a fresh Git repository that will replace an old Jekyll website. The old site and local Git history have intentionally been removed. Build the Astro website from scratch in the current directory.

# Personal Website — Milestone 0 Implementation Brief

## 1. Goal

Build the initial framework of my personal website.

This milestone is **infrastructure-first**. Do not attempt to finish the visual design of the website yet.

The website will eventually serve three purposes:

1. Personal homepage / academic identity
2. Research introduction
3. Personal publishing space for notes, essays, and art writing

The site will primarily be in English, with optional Chinese pages.

The final site will be hosted on **GitHub Pages**.

Use:

- Astro
- Markdown / MDX
- plain CSS
- TypeScript where appropriate
- npm
- GitHub Actions for deployment

Do **not** introduce React, Vue, Tailwind, Bootstrap, a component UI framework, or a ready-made Astro theme unless there is a compelling technical necessity.

---

# 2. Important design constraints

Do not generate personal content for me.

In particular, do not invent:

- biography text
- personal statements
- research descriptions
- research titles
- project summaries
- art criticism
- essays
- notes
- publication entries
- personal interests

Use clearly marked placeholder text only where content is required for testing.

The site should not use the stereotypical modern AI/SaaS visual style.

Avoid:

- rounded cards
- colored rounded rectangles
- pill-shaped buttons
- gradients
- glassmorphism
- strong shadows
- floating cards
- generic AI startup aesthetics

The visual system should initially remain minimal and neutral.

Current broad visual direction:

- light off-white background
- black text
- editorial / publication-oriented typography
- English body text may initially use Times New Roman
- Chinese may initially use a sans-serif system font
- subtle motion only
- hard edges rather than rounded containers
- horizontal rules, typography and spacing should provide structure

IMPORTANT: You should understand this is experimental / postmodern aesthetic style, and more layouts will be added later.

Do not over-design Milestone 0.

---

# 3. Information architecture

Top-level sections:

```text
/
About
Research
Publications & Talks
Notes
Beyond
```

English is the default language.

Chinese pages use:

```text
/zh/
```

Examples:

```text
/about/
/research/
/publications/
/notes/
/beyond/

/zh/about/
/zh/research/
/zh/publications/
/zh/notes/
/zh/beyond/
```

Not every English page must have a Chinese translation.

Not every Chinese page must have an English translation.

The two language trees must therefore be able to exist independently.

---

# 4. Homepage

For Milestone 0, only create the structural shell.

The final homepage will eventually contain:

- my name
- an image that I will provide myself
- short personal information in list form
- contact information
- ORCID
- GitHub
- CV link
- a short statement
- a self-written introduction
- top-right navigation

Do not invent any of these contents.

Use placeholders only.

Do not show research projects, recent posts, latest notes, or feeds on the homepage.

The homepage should eventually function as a personal cover page rather than a dashboard.

---

# 5. Content model philosophy

The filesystem should correspond as closely as practical to the content structure and URLs.

General principle:

```text
filesystem ≈ content hierarchy ≈ website hierarchy
```

Ordinary new articles should be addable without editing Astro source code.

The expected workflow should eventually be approximately:

```bash
mkdir ...
create index.md or index.mdx
add local images
git add .
git commit
git push
```

The site should automatically discover the new content.

---

# 6. Recommended project structure

Use approximately the following architecture.

You may make small technical adjustments if Astro conventions make them clearly preferable, but preserve the conceptual separation.

```text
project-root/
├── public/
│   ├── images/
│   ├── files/
│   │   └── .gitkeep
│   └── favicon.svg
│
├── src/
│   ├── pages/
│   │   ├── index.astro
│   │
│   │   ├── about/
│   │   │   └── index.astro
│   │
│   │   ├── research/
│   │   │   └── index.astro
│   │
│   │   ├── publications/
│   │   │   └── index.astro
│   │
│   │   ├── notes/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │
│   │   ├── beyond/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │
│   │   └── zh/
│   │       ├── index.astro
│   │       ├── about/
│   │       │   └── index.astro
│   │       ├── research/
│   │       │   └── index.astro
│   │       ├── publications/
│   │       │   └── index.astro
│   │       ├── notes/
│   │       │   ├── index.astro
│   │       │   └── [...slug].astro
│   │       └── beyond/
│   │           ├── index.astro
│   │           └── [...slug].astro
│   │
│   ├── content/
│   │   ├── research/
│   │   │   └── ...
│   │
│   │   ├── notes/
│   │   │   ├── physics/
│   │   │   ├── machine-learning/
│   │   │   └── ...
│   │
│   │   ├── beyond/
│   │   │   ├── essays/
│   │   │   ├── art/
│   │   │   └── ...
│   │
│   │   └── zh/
│   │       ├── notes/
│   │       └── beyond/
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── IndexLayout.astro
│   │   └── ArticleLayout.astro
│   │
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Statement.astro
│   │   ├── Figure.astro
│   │   ├── Contents.astro
│   │   └── ResearchEntry.astro
│   │
│   ├── styles/
│   │   ├── reset.css
│   │   ├── tokens.css
│   │   ├── typography.css
│   │   └── global.css
│   │
│   └── content.config.ts
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

Keep `src/pages/` relatively thin.

Its main responsibility should be routing and composition.

Long-term content should primarily live in `src/content/`.

---

# 7. Markdown / MDX

Support both Markdown and MDX.

Use Markdown for ordinary articles.

Use MDX when custom visual components are required.

Example ordinary content:

```markdown
---
id: gauge-theory
title: Gauge Theory
date: 2026-09-27
lang: en
description: ""
translation:
---

# Gauge Theory

Placeholder.
```

Do not populate the site with large amounts of example content.

Only create the minimum number of placeholder files required to verify routing.

---

# 8. Content schemas

Use Astro Content Collections with typed schemas.

Keep schemas intentionally small.

## General article

Suggested fields:

```text
id
title
date
lang
description
translation
draft
```

Guidelines:

- `id` should be a stable content identifier independent of URL.
- `lang` should support at least `en` and `zh`.
- `translation` should be optional.
- `draft` may default to false.
- do not add unnecessary metadata yet.

Do not introduce tags, categories, authors, SEO metadata, series IDs, status fields, etc. unless technically necessary.

---

# 9. Notes

Notes are currently an **article collection**, not a full wiki.

However, the structure should support topic landing pages.

Example:

```text
notes/
└── physics/
    ├── index.md
    └── qft/
        ├── index.md
        ├── gauge-theory/
        │   └── index.md
        └── electroweak/
            └── index.md
```

Potential URL structure:

```text
/notes/
/notes/physics/
/notes/physics/qft/
/notes/physics/qft/gauge-theory/
/notes/physics/qft/electroweak/
```

A topic `index.md` may contain:

- introduction
- table of contents
- links to child articles

Build a reusable `Contents` component, but keep its first version simple.

Do **not** implement a complex wiki system.

---

# 10. Future backlinks

The site should eventually support bidirectional links / backlinks between Notes.

Do not implement the full backlink system unless it is trivial and robust.

However:

- do not choose an architecture that would make backlinks difficult later
- preserve stable content IDs
- preserve predictable internal URLs
- keep content discoverable via Astro content collections

A future article may contain a normal Markdown internal link such as:

```markdown
See [Yang–Mills theory](/notes/physics/qft/yang-mills/).
```

The system may later generate:

```text
Referenced by
- Gauge Theory
- Electroweak Theory
```

This is future work, not required for Milestone 0.

---

# 11. Beyond

`Beyond` is the personal writing / art-writing area.

It may eventually contain:

```text
Beyond
├── essays
└── art
```

Ordinary entries should use the standard article template.

The architecture must allow an individual article to opt into a custom layout later.

General rule:

```text
default article → no code changes required
special article → custom Astro/MDX layout allowed
```

Do not implement elaborate experimental layouts now.

---

# 12. Research

Research is intentionally flat in the first version.

Do not build nested research project subsites.

The Research index should eventually render one entry per research project.

Each research entry needs only:

```text
image
title
year/month
description
links
```

Use a schema similar to:

```yaml
---
id: example-project
title: ""
date: 2026-09
image: ""
description: ""
links: []
---
```

The actual text will be written by me.

Do not generate descriptions or titles.

Create a reusable:

```text
ResearchEntry.astro
```

component.

Its first layout should be structurally similar to:

```text
------------------------------------------------------

[ IMAGE ]              Title

                       YYYY.MM

                       Description paragraph

                       Link ↗
                       Link ↗

------------------------------------------------------
```

No rounded container.

No colored card background.

No shadow.

Structure should come from typography, image, spacing and rules.

For desktop, image-left / text-right is acceptable.

Keep the CSS easy to adapt later so mobile can use something like:

```text
TITLE

IMAGE

DESCRIPTION

LINKS
```

Do not spend substantial effort on mobile art direction in this milestone.

Basic responsive usability is still required.

---

# 13. Publications & Talks

For Milestone 0, create the page shell only.

Do not invent publication or talk data.

The future implementation may use structured data rather than Markdown.

Leave this easy to extend later.

---

# 14. Layout architecture

Start with only:

```text
BaseLayout
├── IndexLayout
└── ArticleLayout
```

## BaseLayout

Responsible for:

- `<html>`
- `<head>`
- metadata basics
- site navigation
- main content wrapper
- footer
- global CSS
- language attribute

## IndexLayout

For section landing pages such as:

- Notes
- Beyond
- possibly Research

## ArticleLayout

For ordinary Markdown/MDX content.

Do not create many specialized layouts yet.

Future layouts may include:

```text
BeyondLayout
ExperimentalLayout
```

but these are not necessary now.

---

# 15. Statement component

Create a very lightweight:

```text
Statement.astro
```

It should be a typography component, not a card.

Example future MDX use:

```mdx
<Statement>My own statement text goes here.</Statement>
```

It may control:

- font size
- max line width
- spacing
- font family

It should not introduce:

- rounded box
- colored background
- large decorative quotation marks
- unnecessary styling

Use placeholder content only in the demo.

---

# 16. Figure component

Create a basic reusable Figure component.

Default principle:

**images should be shown fully rather than cropped.**

It should support:

- image
- alt text
- optional caption

Do not automatically crop images.

More specialized future image components may include:

```text
FullBleedImage
CroppedImage
BackgroundImage
```

but do not implement them unless needed.

---

# 17. Navigation

Desktop navigation should be text-based and placed toward the upper-right area.

Initial items:

```text
About
Research
Publications & Talks
Notes
Beyond
```

Do not use:

- pills
- rounded navigation items
- colored button backgrounds

A subtle underline or text-color transition on hover is acceptable.

Chinese navigation should lead to the corresponding Chinese top-level sections.

Do not assume every article has a translation.

---

# 18. Language architecture

English is the default language.

English URLs should not require `/en/`.

Chinese URLs should use `/zh/`.

Example:

```text
/notes/physics/qft/
/zh/notes/...
```

Content translation should be optional.

A future article may use:

```yaml
translation: some-other-id
```

Only show a language switch for an individual article when a translation actually exists.

Do not force parallel content trees.

---

# 19. Typography

For the first implementation only:

English body:

```css
"Times New Roman", Times, serif
```

Chinese:

use a reasonable system sans-serif stack.

Keep heading fonts abstracted behind CSS variables because a different heading font may be selected later.

Use CSS variables such as:

```css
--font-body-en
--font-body-zh
--font-heading
--font-mono
```

English headings should use conventional publication-like title capitalization in actual authored content.

Do not automatically transform headings to uppercase.

Uppercase may later be used only for small metadata labels when explicitly desired.

---

# 20. CSS design tokens

Create a minimal `tokens.css`.

Initial direction:

```css
:root {
  --color-background: #f7f6f2;
  --color-text: #000000;

  --font-body-en: "Times New Roman", Times, serif;
  --font-body-zh:
    "Noto Sans CJK SC", "PingFang SC", "Microsoft YaHei", sans-serif;

  --font-heading: var(--font-body-en);

  --page-width: 1200px;
  --text-width: 720px;

  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 4rem;
  --space-xl: 8rem;
}
```

You may improve technical details but do not establish a large design system yet.

Do not choose a final accent color.

The system should make it easy to add several manually selected accent colors later.

---

# 21. Animation

Keep motion minimal.

Allowed examples:

- subtle link underline transition
- subtle opacity change
- slight image transition
- short entrance transition if unobtrusive

Avoid:

- scroll hijacking
- parallax
- cursor-following effects
- glitch effects
- large scaling animations
- animated gradients
- flashy page transitions

Respect:

```css
@media (prefers-reduced-motion: reduce);
```

---

# 22. Mobile

Do not create an elaborate mobile-specific visual design yet.

However:

- the site must remain readable on phones
- navigation must remain usable
- text must not overflow
- research entries must stack vertically when necessary
- images must scale correctly

Do not assume that desktop horizontal research banners can simply remain horizontal on narrow screens.

Design the component CSS so a future dedicated mobile composition is easy to add.

---

# 23. Comments

Do not implement comments now.

The site may later use Giscus or Waline.

Stable content IDs should make that possible without redesigning the content system.

---

# 24. Local development

Configure standard Astro scripts so the normal workflow is:

```bash
npm install
npm run dev
```

Local preview should work at Astro's normal development address.

Also support:

```bash
npm run build
npm run preview
```

The production build must succeed without warnings that indicate broken content routing.

---

# 25. GitHub Pages deployment

Configure GitHub Actions deployment for GitHub Pages.

Use the current recommended Astro/GitHub Pages deployment approach.

The configuration should work for either:

```text
username.github.io
```

or a repository-based Pages site with minimal adjustment.

If the current repository name makes the correct `site` or `base` value inferable, configure it correctly.

Do not invent a custom domain.

Document in the README where to change configuration later if a custom domain is added.

---

# 26. README

Create a concise README that explains:

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

Explain where to create the folder and `index.md`.

## Adding a new Beyond article

Explain the equivalent workflow.

## Adding a Research item

Explain the required frontmatter fields.

## Chinese content

Explain `/zh/` content organization.

## Deployment

Explain that pushing to the configured branch triggers GitHub Pages deployment.

Do not write promotional prose in the README.

---

# 27. Minimal test content

Create only enough placeholder content to verify that everything works.

For example:

```text
one English Note
one nested English Note/topic
one Chinese Note
one Beyond entry
one Research placeholder
```

Use obvious placeholders such as:

```text
Placeholder note used to verify routing.
```

Do not create realistic personal or research content.

---

# 28. Acceptance criteria

Milestone 0 is complete only if all of the following work:

```text
/
```

loads successfully.

These pages load:

```text
/about/
/research/
/publications/
/notes/
/beyond/
```

Chinese top-level routes load:

```text
/zh/
/zh/about/
/zh/research/
/zh/publications/
/zh/notes/
/zh/beyond/
```

Nested Markdown Notes can generate URLs such as:

```text
/notes/physics/
/notes/physics/qft/
/notes/physics/qft/example/
```

Beyond Markdown/MDX entries generate pages automatically.

Research items are read from structured content and rendered through `ResearchEntry`.

The site has:

- shared header
- shared footer
- shared base layout
- basic typography
- basic responsive behavior
- no rounded UI-card aesthetic

These commands succeed:

```bash
npm run dev
npm run build
npm run preview
```

GitHub Pages deployment configuration exists and is valid.

---

# 29. Implementation behavior

Before modifying anything:

1. Inspect the current repository.
2. Preserve existing useful files if this is not an empty repository.
3. Check the current package manager and Astro state.
4. Do not overwrite unrelated user work.
5. If the repository is empty, initialize the project cleanly.

While implementing:

- prefer the simplest maintainable solution
- do not over-engineer
- avoid premature abstraction
- keep components small
- keep content separate from presentation
- keep generated placeholder content minimal

After implementation:

1. Run the build.
2. Fix all build errors.
3. Verify representative routes.
4. Review the resulting file tree.
5. Report exactly what was created or changed.
6. Mention any assumptions that may need later adjustment.

Do not proceed into detailed homepage visual design, custom art layouts, backlink generation, comments, or publication automation unless required for the framework to function.

The goal of this milestone is a **clean, stable foundation that can be visually designed later without restructuring the content system**.

NOTE: Do not make aesthetic or content decisions beyond what is explicitly specified. When multiple technically valid implementations exist, prefer the simplest architecture that preserves future flexibility.
