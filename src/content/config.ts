import { defineCollection, z } from "astro:content";
import { date } from "astro:schema";

const newsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.date(),
		thumbnail: z.string(),
		alt: z.string(),
	}),
});

const policyCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.date(),
	}),
});

const committeeCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.date(),
	}),
});

const photoCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.date(),
		description: z.string(),
		image: z.string(),
		alt: z.string().optional(),
	}),
});

export const collections = {
	news: newsCollection,
	policies: policyCollection,
	committee: committeeCollection,
	photos: photoCollection,
};
