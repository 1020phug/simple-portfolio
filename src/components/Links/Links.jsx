import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";
const Links = ({ variant, href, children, ...props }) => {
	return (
		<Link to={href} {...props} className={LinksCVA({ variant })}>
			{children}
		</Link>
	);
};

const LinksCVA = cva("tracking-wide flex items-center gap-2", {
	variants: {
		variant: {
			active: "font-bold",
			original: "text-opacity-50",
		},
	},
	defaultVariants: {
		variant: "original",
	},
});

export default Links;
