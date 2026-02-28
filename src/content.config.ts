import { defineCollection, z } from 'astro:content';

// Define a schema for each level
const levelCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    level: z.number(),
    subtitle: z.string(),
    readingTime: z.string(),
    topics: z.array(z.string()),
    quiz: z.array(z.object({
      question: z.string(),
      options: z.array(z.string()),
      correct: z.string(),
      explanation: z.string().optional(),
    })),
  }),
});

export const collections = {
  levels: levelCollection,
};
