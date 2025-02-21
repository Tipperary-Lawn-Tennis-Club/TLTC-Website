import { useEffect, useState } from "react";

const NewsFeed = ({ data }) => {
	return (
		<div className="container latest-posts bg-gray-200">
			<h2 className="text-3xl font-bold mb-4">Latest Posts</h2>
			<div className="grid gap-6"></div>
		</div>
	);
};

export default NewsFeed;
