import { Link } from "react-router-dom";

const Button = ({ className, href, type, children }) => {
	if (type === "link") {
		return (
			<Link
				to={href || ""}
				className={`flex justify-center items-center w-fit px-4 py-1 text-sm text-text cursor-pointer ${
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
			className={`flex justify-center items-center w-fit px-4 py-1 text-text border cursor-pointer border-primary hover:border-accent hover:text-primary rounded-md ${
				className || ""
			}`}
		>
			{children}
		</Link>
	);
};

export default Button;
