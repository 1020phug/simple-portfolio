import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";

const Logo = ({ size, ...props }) => {
	return (
		<Link
			aria-label="Website logo, go back to homepage."
			to="/"
			{...props}
			className={LogoCVA({ size })}
		>
			<div className="overflow-hidden transition ease-in-out rounded-full  hover:opacity-60">
				<span>1020phug</span>
				<span className="text-primary">.dev</span>
			</div>
		</Link>
	);
};

const LogoCVA = cva(
	"flex items-center border-white group focus-visible:outline-accent",
	{
		variants: {
			size: {
				small: "text-sm",
				medium: "text-md",
				large: "text-lg",
			},
		},
		defaultVariants: {
			size: "medium",
		},
	}
);
Object.assign(Logo, {
	CVA: LogoCVA,
});

export default Logo;
