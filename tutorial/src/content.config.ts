// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod
import { z } from "astro/zod";
// Define a `loader` and `schema` for each collection
const cases = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/cases" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      authors: z.array(z.string()),
      image: z.optional(z.object({
        url: z.string(),
        alt: z.string()
      })),
      tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { cases };