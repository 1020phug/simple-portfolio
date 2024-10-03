import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";
const Links = ({ variant, href, children, ...props }) => {
	return (
		<Link to={href} {...props} className={LinksCVA({ variant })}>
			{children}
		</Link>
	);
};

const LinksCVA = cva("text-text tracking-wide transition-colors", {
	variants: {
		variant: {
			active: "font-bold",
			original: "text-opacity-50",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

export default Links;
