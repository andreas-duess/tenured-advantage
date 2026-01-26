import { defineCollection, z } from 'astro:content';

const howToThrive = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Andreas Duess'),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const podcastWisdom = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    guest: z.string(),
    episode: z.string(),
    youtubeUrl: z.string().url(),
    categories: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'how-to-thrive': howToThrive,
  'podcast-wisdom': podcastWisdom,
};
