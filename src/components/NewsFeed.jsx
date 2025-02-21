import { useEffect, useState } from "react";

const NewsFeed = () => {
	const repo = "cmattless/tennis-test";
	const path = "pages/news";

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch(
					`https://api.github.com/repos/${repo}/contents/${path}`
				); // Adjust API path if needed
				const data = await response.json();
				// Sort posts by date and get the latest three
				const sortedPosts = data
					.sort((a, b) => new Date(b.date) - new Date(a.date))
					.slice(0, 3);
				setPosts(sortedPosts);
			} catch (error) {
				console.error("Error fetching posts:", error);
			}
		};

		fetchPosts();
	}, []);

	return (
		<div className="latest-posts">
			<h2 className="text-3xl font-bold mb-4">Latest Posts</h2>
			<div className="grid gap-6">
				{posts.map((post) => (
					<div
						key={post.id}
						className="p-4 border rounded-lg shadow-md hover:shadow-lg transition"
					>
						<h3 className="text-xl font-semibold">{post.title}</h3>
						<p className="text-gray-600 text-sm">
							{new Date(post.date).toLocaleDateString()}
						</p>
						<p className="text-gray-700">{post.excerpt}</p>
						<a
							href={`/posts/${post.slug}`}
							className="text-blue-500 font-medium hover:underline"
						>
							Read More
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default NewsFeed;
