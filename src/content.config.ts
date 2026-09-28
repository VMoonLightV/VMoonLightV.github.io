import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  date: z.coerce.date(),
  lang: z.enum(["en", "zh"]),
  description: z.string().default(""),
  translation: z.string().optional(),
  draft: z.boolean().default(false),
});

const researchSchema = z.object({
  id: z.string(),
  title: z.string(),
  date: z.string(),
  image: z.string().default(""),
  description: z.string().default(""),
  links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  lang: z.enum(["en", "zh"]).default("en"),
  translation: z.string().optional(),
  draft: z.boolean().default(false),
});

export const collections = {
  notes: defineCollection({
    loader: glob({ base: "./src/content/notes", pattern: "**/*.{md,mdx}" }),
    schema: articleSchema,
  }),
  beyond: defineCollection({
    loader: glob({ base: "./src/content/beyond", pattern: "**/*.{md,mdx}" }),
    schema: articleSchema,
  }),
  zhNotes: defineCollection({
    loader: glob({ base: "./src/content/zh/notes", pattern: "**/*.{md,mdx}" }),
    schema: articleSchema,
  }),
  zhBeyond: defineCollection({
    loader: glob({
      base: "./src/content/zh/beyond",
      pattern: "**/*.{md,mdx}",
    }),
    schema: articleSchema,
  }),
  research: defineCollection({
    loader: glob({ base: "./src/content/research", pattern: "**/*.{md,mdx}" }),
    schema: researchSchema,
  }),
};
