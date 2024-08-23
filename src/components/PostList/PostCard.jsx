const PostCard = ({ name, description, image_url, created_at }) => {
	return (
		<li
			className={`flex flex-col items-center justify-center bg-[url(${image_url})] bg-cover bg-center rounded-lg hover:scale-105 transition-all`}
		>
			<h1>{name}</h1>
			<p>{description}</p>
			<p>{created_at}</p>
		</li>
	);
};

export default PostCard;
