import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    location: z.string(),
    country: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    heroImage: image(),
    gallery: z.array(image()).default([]),
    description: z.string().optional(),
    completedYear: z.number().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
