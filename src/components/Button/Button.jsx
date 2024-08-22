import { Link } from "react-router-dom";

const Button = ({ className, href, children }) => {
	return (
		<Link
			to={href || ""}
			className={`flex items-center justify-center ${className || ""}`}
		>
			{children}
		</Link>
	);
};

export default Button;
