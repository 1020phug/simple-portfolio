import { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import cn from "../../../ultis/cn";

const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [open, setOpen] = useState(false);
	return (
		<header className="text-text container md:pt-4 max-w-screen-lg m-auto md:px-12 lg:px-20 bg-sub h-12 flex items-center">
			<nav
				className="hidden md:flex justify-start items-center h-full mt-auto space-x-6 text-sm lg:justify-start backdrop-filter backdrop-blur-sm bg-opacity-30"
				aria-label="Main Navigation"
			>
				<a
					aria-label="Website logo, go back to homepage."
					className="flex items-center border-white group focus-visible:outline-accent"
					href="/"
				>
					<div className="overflow-hidden transition ease-in-out rounded-full  hover:opacity-60">
						<span className="text-sm">1020phug</span>
						<span className="text-sm text-primary">.dev</span>
					</div>
				</a>

				<div className="md:flex flex-grow items-center justify-start space-x-6">
					<a
						href="/"
						className="text-text font-bold tracking-wide transition-colors"
					>
						Home
					</a>
					<a
						href="/"
						className="text-text text-opacity-50 tracking-wide transition-colors"
					>
						About
					</a>
					<a
						href="/"
						className="text-text text-opacity-50 tracking-wide transition-colors"
					>
						Projects
					</a>
					<a
						href="/"
						className="text-text text-opacity-50 tracking-wide transition-colors"
					>
						Contact
					</a>
				</div>
				<div className="flex justify-between">
					<button
						className={cn("block h-4 w-4 rounded-full", {
							"bg-black": theme === "light",
							"bg-white": theme === "dark",
						})}
						onClick={toggleTheme}
					></button>
				</div>
			</nav>
			<nav className="fixed top-0 h-12 w-full md:hidden bg-secondary backdrop-filter backdrop-blur-sm bg-opacity-30 z-50">
				<button
					className="absolute top-3 right-2 z-50"
					aria-label="Open Menu"
					onClick={() => setOpen(!open)}
				>
					{open ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="1.6em"
							width="1.6em"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							></path>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="1.6em"
							width="1.6em"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 8h16M4 16h16"
							></path>
						</svg>
					)}
				</button>
				<div
					className={`flex flex-col h-screen w-full bg-secondary overflow-hidden px-4 pt-16 mb-12 ${
						open ? "block" : "hidden"
					}`}
				>
					<ul className="flex flex-col gap-y-12">
						<li className="border-b border-b-accent border-opacity-30 pb-2">
							Home
						</li>
						<li className="border-b border-b-accent border-opacity-30 pb-2">
							About
						</li>
						<li className="border-b border-b-accent border-opacity-30 pb-2">
							Projects
						</li>
						<li className="border-b border-b-accent border-opacity-30 pb-2">
							Contact
						</li>
					</ul>
					<div className="flex justify-between mt-12">
						<button
							className={cn("block h-4 w-4 rounded-full", {
								"bg-black": theme === "light",
								"bg-white": theme === "dark",
							})}
							onClick={toggleTheme}
						></button>
					</div>
				</div>
				<div className={`absolute top-3 left-2 ${open ? "hidden" : "block"}`}>
					<a
						aria-label="Website logo, go back to homepage."
						className="flex items-center border-white group focus-visible:outline-accent"
						href="/"
					>
						<div className="overflow-hidden transition ease-in-out rounded-full  hover:opacity-60">
							<span className="text-sm">1020phug</span>
							<span className="text-sm text-primary">.dev</span>
						</div>
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Header;
