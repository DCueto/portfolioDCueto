import { z, defineCollection } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()).optional(),
  image: z.object({
    url: z.string(),
    alt: z.string().optional(),
  }).optional(),
  language: z.enum(['en', 'es']), // languages defined
  slug: z.string(),
  publication_date: z.date(),
  publication_day: z.string().optional(),
  publication_month: z.string().optional(),
  publication_year: z.string().optional(),
});

const blog = defineCollection({
  type: 'content',
  schema: blogSchema,
});


export const collections = {
  'blog': blog
};
