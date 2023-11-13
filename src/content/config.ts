import { defineCollection, z } from "astro:content";
import { author } from "../data/socials";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60).min(10),
      hero: image(),
      heroAlt: z.string(),
      description: z.string().max(160).min(10),
      pubDate: z.date(),
      author: z.string(),
    }),
});

export const collections = {
  blog: blogCollection,
};