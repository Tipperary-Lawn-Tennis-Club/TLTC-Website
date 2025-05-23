import { defineCollection, z } from "astro:content";

const newsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.date(),
			thumbnail: image(),
			alt: z.string(),
		}),
});

const policyCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.date(),
	}),
});

const ruleCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.date(),
	}),
});

const committeeCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			position: z.string(),
			image: image(),
			alt: z.string(),
			email: z.string(),
		}),
});

const photoCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.date(),
			images: z.array(
				z.object({
					image: image(),
					alt: z.string().optional(),
					description: z.string().optional(),
				})
			),
		}),
});

export const collections = {
	news: newsCollection,
	policies: policyCollection,
	rules: ruleCollection,
	committee: committeeCollection,
	photos: photoCollection,
};
