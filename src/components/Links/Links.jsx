import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";
import cn from "../../ultis/cn";
const Links = ({ variant, isSocial, href, children, ...props }) => {
	return (
		<Link
			to={href}
			{...props}
			className={cn(LinksCVA({ variant, isSocial }), props.className)}
		>
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
		isSocial: {
			true: "text-text opacity-70 hover:opacity-100 hover:-translate-y-2 transition-all",
		},
	},
	defaultVariants: {
		variant: "original",
	},
});

export default Links;
