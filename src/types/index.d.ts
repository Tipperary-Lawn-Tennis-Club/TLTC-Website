export interface IPost extends Record<string, any> {
	id: string;
	body: string;
	filepath: string;
	digest: string;
	rendered: {
		html: string;
		metadata: {
			headings: [];
			imagePaths: [];
			frontmatter: {
				layout: string;
				title: string;
				date: string;
				thumbnail: string;
				slug: string;
			};
		};
	};
	collection: string;
	slug: string;
}

export interface ISectionTransitionProps {
	bgColor: string;
	scrollId: string;
}
