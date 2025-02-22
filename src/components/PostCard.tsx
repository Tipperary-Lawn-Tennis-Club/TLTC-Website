import type { IPost } from "../types";
const PostCard = (post: IPost) => {
	return (
		<div className="card card-side bg-base-100 shadow-sm">
			<figure>
				<img
					className="max-w-lg"
					src={post.data.thumbnail}
					alt={post.data.alt}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{post.data.title}</h2>
				<p>{new Date(post.data.date).toLocaleDateString()}</p>
				<div className="card-actions justify-end">
					<a href={`/news/${post.slug}`} className="btn btn-primary">
						Read More
					</a>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
