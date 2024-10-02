import { cva } from "class-variance-authority";

const Button = ({ variant, ...props }) => {
	return <button {...props} className={ButtonCVA({ variant })} />;
};

const ButtonCVA = cva(
	"flex justify-center items-center gap-2 py-2 px-4 rounded hover:scale-105 transition-all",
	{
		variants: {
			variant: {
				primary: "bg-primary hover:bg-primary/80 text-white",
				secondary: "bg-secondary hover:bg-secondary/80 text-white",
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	}
);

export default Button;
