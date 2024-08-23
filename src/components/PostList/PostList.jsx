import { useState, useEffect } from "react";
import PostCard from "./PostCard";

const PostList = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(
				"https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections"
			);
			const data = await response.json();
			setPosts(() => data.data);
		};
		getData();
	}, []);

	useEffect(() => {
		console.log(posts);
	}, [posts]);

	return (
		<div className="max-w-screen-sm mx-auto flex flex-col gap-4 justify-start items-center">
			<h1 className="text-3xl text-bold">My Blog</h1>
			<ul className="flex flex-col items-center">
				{posts.length === 0 ? (
					<p>Loading...</p>
				) : (
					posts.map((post) => <PostCard key={post.name} {...post} />)
				)}
			</ul>
		</div>
	);
};

export default PostList;
