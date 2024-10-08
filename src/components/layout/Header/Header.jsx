import { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import cn from "../../../ultis/cn";
import Logo from "../../Logo/Logo";
import Links from "../../Links/Links";

const Header = () => {
	const { theme, toggleTheme: handleToggleTheme } = useContext(
		ThemeContext
	) ?? {
		theme: "light",
		toggleTheme: () => {},
	};
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			{!isMenuOpen && (
				<div className="mt-12 p-2 md:mt-0 text-center text-text border-b bg-secondary text-sm">
					Hello October, Happy birthday to me 🎁
				</div>
			)}
			<header className="flex flex-col-reverse md:flex-col text-text w-full md:pt-4 md:px-12 lg:px-20">
				<nav
					className="hidden relative w-full md:flex justify-start items-center h-full mt-auto space-x-6 text-sm lg:justify-start backdrop-filter backdrop-blur-sm bg-opacity-30 container max-w-screen-lg m-auto"
					aria-label="Main Navigation"
				>
					<Logo size="small" />

					<div className="hidden md:flex flex-grow items-center justify-start space-x-6">
						<Links variant="active" href="/">
							Home
						</Links>
						<Links href="/posts">Posts</Links>
						<Links href="/projects">Works</Links>
						<Links href="/about">About</Links>
					</div>
					<div className="flex-1 ml-auto flex justify-end">
						<button
							className={cn("block h-4 w-4 rounded-full", {
								"bg-black": theme === "light",
								"bg-white": theme === "dark",
							})}
							onClick={handleToggleTheme}
						></button>
					</div>
				</nav>
				<nav className="fixed top-0 h-12 w-full md:hidden bg-bg backdrop-filter backdrop-blur-sm bg-opacity-30 z-50">
					<button
						className="absolute top-3 right-2 z-50"
						aria-label="Open Menu"
						onClick={() => setIsMenuOpen((prev) => !prev)}
					>
						{isMenuOpen ? (
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
					{isMenuOpen && (
						<Menu
							theme={theme}
							toggleTheme={handleToggleTheme}
							isMenuOpen={isMenuOpen}
							setIsMenuOpen={setIsMenuOpen}
						/>
					)}
					{!isMenuOpen && (
						<div className="absolute top-3 left-2 block">
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
					)}
				</nav>
			</header>
		</>
	);
};

const Menu = ({ theme, toggleTheme, open, setOpen }) => {
	return (
		<div className="flex flex-col z-40 h-screen w-full bg-bg overflow-hidden px-4 pt-16 mb-12">
			<ul className="flex flex-col gap-y-12">
				<li
					className="border-b border-b-accent border-opacity-30 pb-2"
					onClick={() => setOpen(false)}
				>
					<Links href="/">Home</Links>
				</li>
				<li
					className="border-b border-b-accent border-opacity-30 pb-2"
					onClick={() => setOpen(false)}
				>
					<Links href="/posts">Posts</Links>
				</li>
				<li
					className="border-b border-b-accent border-opacity-30 pb-2"
					onClick={() => setOpen(false)}
				>
					<Links href="/projects">Works</Links>
				</li>
				<li
					className="border-b border-b-accent border-opacity-30 pb-2"
					onClick={() => setOpen(false)}
				>
					<Links href="/about">About</Links>
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
	);
};

export default Header;
