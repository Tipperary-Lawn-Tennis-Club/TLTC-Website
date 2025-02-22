import React from "react";
import type { IPost } from "../types";

const Article = (post: IPost) => {
	return (
		<article className="max-w-4xl mx-auto p-4">
			{/* Hero section with image */}
			<div className="hero min-h-[400px] bg-base-200 rounded-lg overflow-hidden mb-8">
				{post.data.thumbnail && (
					<img
						src={post.data.thumbnail}
						alt={post.data.alt}
						className="w-full h-full object-cover"
					/>
				)}
			</div>

			{/* Article content */}
			<div className="prose lg:prose-xl max-w-none">
				<h1 className="text-4xl font-bold mb-4">{post.data.title}</h1>
				<div className="flex items-center gap-4 mb-8">
					<small className="text-base-content/60">
						{new Date(post.data.date).toDateString()},
						{new Date(post.data.date).toLocaleTimeString()}
					</small>
				</div>

				<div className="divider"></div>

				{/* Article body */}
				<div className="mt-8 prose">{post.body}</div>
			</div>
		</article>
	);
};

export default Article;
