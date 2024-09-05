import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

const menu = [
	{ name: "Homepage", href: "/" },
	{ name: "Projects", href: "/projects" },
	{ name: "Blog", href: "/blog" },
	{ name: "Contact", href: "/contact" },
];

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<header className="fixed bg left-0 top-0 right-0 max-w-screen-lg mx-auto py-2 px-8 text-slate-50 flex justify-between items-center">
			<div className="w-12 h-12">
				<img
					src="/src/assets/img/avatar.jpg"
					alt=""
					className="w-full rounded-full"
				/>
			</div>
			<Link to={"/"} className="text-3xl font-bold max-sm:hidden">
				1020phug
			</Link>
			<nav>
				<span
					className={`cursor-pointer md:hidden ${isOpen ? "hidden" : ""}`}
					onClick={toggle}
				>
					<FaBars />
				</span>
				<ul
					className={`flex w-full items-center gap-12 max-md:gap-12 ${
						isOpen ? "max-md:block" : "max-md:hidden"
					}`}
				>
					{menu.map((item) => (
						<li
							key={item.name}
							onClick={toggle}
							className="relative cursor-pointer after:contents-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-1500 hover:after:w-full"
						>
							<Button type="link" href={item.href}>
								{item.name}
							</Button>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
