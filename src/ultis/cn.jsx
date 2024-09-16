import { twMerge } from "tw-merge";
import { clsx } from "clsx";
const cn = ({ ...inputs }) => {
	return twMerge(clsx(inputs));
};

export default cn;
