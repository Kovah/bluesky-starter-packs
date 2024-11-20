import { defineCollection, reference, z } from 'astro:content';

const packs = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string().nullable(),
    url: z.string(),
    author: z.string(),
    tags: z.array(reference('tags')),
  })
});

const tags = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
  })
});

export const collections = { packs, tags };
