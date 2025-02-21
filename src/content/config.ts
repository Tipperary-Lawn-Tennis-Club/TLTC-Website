import { defineCollection, z } from "astro:content";

const newsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.date(),
		thumbnail: z.string().optional(),
	}),
});

export const collections = {
	news: newsCollection,
};
