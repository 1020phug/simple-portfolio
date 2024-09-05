import { Link } from "react-router-dom";

const Button = ({ className, href, type, children }) => {
	if (type === "link") {
		return (
			<Link
				to={href || ""}
				className={`flex justify-center items-center w-fit px-4 py-1 text-secondary cursor-pointer transition-all hover:text-accent ${
					className || ""
				}`}
			>
				{children}
			</Link>
		);
	}
	return (
		<Link
			to={href || ""}
			className={`flex justify-center items-center w-fit px-4 py-1 text-primary border cursor-pointer border-accent rounded-md transition-all hover:text-accent ${
				className || ""
			}`}
		>
			{children}
		</Link>
	);
};

export default Button;
