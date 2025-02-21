import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const news = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		date: z.date(),
		thumbnail: z.string().optional(),
		body: z.string(),
	}),
});

export const collections = {
	news,
};
