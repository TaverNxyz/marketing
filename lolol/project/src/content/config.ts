import { defineCollection, z } from 'astro:content';

export const collections = {
  products: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      imageUrl: z.string(),
      amazonUrl: z.string(),
      price: z.string().optional(),
      rating: z.number().optional(),
      category: z.string(),
      featured: z.boolean().default(false),
      publishDate: z.date()
    })
  })
};