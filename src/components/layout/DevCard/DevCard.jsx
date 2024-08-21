import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const cardContent = {
	thumbails: "/src/assets/img/avatar.jpg",
	name: "1020phug",
	job: "Fullstack Developer",
	bio: "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
};

const socials = [
	{
		href: "https://github.com/1020phug",
		icon: <FaGithub />,
	},
	{
		href: "https://www.linkedin.com/in/1020phug/",
		icon: <FaLinkedin />,
	},
	{
		href: "https://www.facebook.com/1020phug/",
		icon: <FaFacebook />,
	},
	{
		href: "https://www.instagram.com/1020phug/",
		icon: <FaInstagram />,
	},
];

const DevCard = () => {
	return (
		<div className="flex flex-col gap-10 p-6 w-80 md:w-1/2 lg:w-full drop-shadow bg-slate-50 rounded-lg shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] items-center">
			<div className="flex flex-col gap-6 items-center md:items-start">
				<div className="flex flex-col justify-center items-center md:flex-row md:gap-6">
					<div className="w-16 h-16 rounded-full overflow-hidden">
						<img
							src="/src/assets/img/avatar.jpg"
							alt=""
							className="w-full h-full object-cover object-center"
						/>
					</div>
					<p className="flex flex-col items-center md:items-start">
						<span className="text-xl font-bold">{cardContent.name}</span>
						<span className="text-sm ">{cardContent.job}</span>
					</p>
				</div>
				<p className="text-sm">{cardContent.bio}</p>
			</div>
			<div className="flex flex-col gap-6 items-center w-full">
				<a
					href="https://github.com/1020phug"
					className="flex justify-center items-center gap-2 w-full py-2 px-6 bg-slate-800 text-slate-50 rounded-md shadow-md shadow-slate-500 hover:-translate-y-1 hover:shadow-sm hover:shadow-slate-300 transition-all duration-200 active:translate-y-1 active:shadow-md active:shadow-slate-500"
				>
					Contact me
				</a>
				<ul className="w-full flex justify-center items-center gap-4 ">
					{socials.map((social) => {
						const logo = social.icon;
						return (
							<li key={social.href}>
								<a
									href="{social.href}"
									className="w-8 h-8 rounded-full hover:bg-slate-300 hover:text-slate-800 transition-all duration-200"
								>
									{logo}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default DevCard;
