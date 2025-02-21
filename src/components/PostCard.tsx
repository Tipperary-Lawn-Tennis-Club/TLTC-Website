import type { IPost } from "../types";
const PostCard = (post: IPost) => {
	return (
		<div className="card card-side bg-base-100 shadow-sm">
			<figure>
				<img src={post.data.thumbnail} alt="Movie" />
			</figure>
			<div className="card-body">
				{JSON.stringify(post)}
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
