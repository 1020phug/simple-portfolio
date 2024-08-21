import { FaBars, FaGithub, FaRegUser, FaDiagramProject } from "react-icons/fa6";

const Header = () => {
	return (
		<header className="max-w-full py-2 px-8 bg-slate-800 text-slate-50 flex justify-between items-center">
			<div className="w-12 h-12">
				<img
					src="/src/assets/img/avatar.jpg"
					alt=""
					className="w-full rounded-full"
				/>
			</div>
			<h1 className="text-3xl font-bold max-sm:hidden">1020phug</h1>
			<nav>
				<span className="cursor-pointer md:hidden">
					<FaBars />
				</span>
				<ul className="flex w-full items-center gap-8 max-md:hidden">
					<li>
						<a
							href="https://github.com/1020phug"
							target="_blank"
							rel="noopener"
							className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-slate-300 hover:text-slate-800 transition-all duration-200"
						>
							<FaGithub />
						</a>
					</li>
					<li>
						<a
							href="#user"
							className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-slate-300 hover:text-slate-800 transition-all duration-200"
						>
							<FaRegUser />
						</a>
					</li>
					<li>
						<a
							href="#projects"
							className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-slate-300 hover:text-slate-800 transition-all duration-200"
						>
							<FaDiagramProject />
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
