import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaGithub,
} from "react-icons/fa6";

import { RiProfileFill } from "react-icons/ri";

import Button from "../../Button/Button";

const myInfo = {
	Age: 24,
	Occupation: "Frontend Developer",
	Website: "https://1020phug.github.io/",
	Country: "Vietnam",
	Address: "FPT, Hanoi",
	Phone: "+84 123 456 789",
	Email: "PqKb2@example.com",
};

const socials = [
	{
		href: "https://facebook.com/1020phug",
		icon: () => <FaFacebookF />,
	},
	{
		href: "https://instagram.com/1020phug",
		icon: () => <FaInstagram />,
	},
	{
		href: "https://linkedin.com/in/1020phug",
		icon: () => <FaLinkedinIn />,
	},
	{
		href: "https://github.com/1020phug",
		icon: () => <FaGithub />,
	},
];

const info = Object.keys(myInfo).map((key) => {
	return (
		<li key={key}>
			<span className="inline-block min-w-32 font-semibold">{key}</span>
			<span>{myInfo[key]}</span>
		</li>
	);
});

const Hero = () => {
	return (
		<div className="max-w-screen-lg min-h-full mx-auto flex flex-col items-center justify-center lg:flex-row gap-16">
			<div className="flex-1 flex flex-col gap-y-4">
				<h1 className="text-3xl md:text-5xl text-text font-bold">1020phug</h1>
				<h2 className="mb-4 max-w-lg text-text text-opacity-60">
					Frontend Developer
				</h2>
				<div className="flex items-center space-x-4">
					<Button href="../../../files/CV/CV.pdf">
						<RiProfileFill />
						<span className="ml-2">Resume</span>
					</Button>

					<span className="flex gap-x-4 items-center">
						{socials.map((social) => (
							<a
								href={social.href}
								key={social.href}
								className="text-lg text-text 
								text-opacity-60 hover:text-accent hover:-translate-y-2 transition-all"
							>
								{social.icon()}
							</a>
						))}
					</span>
				</div>
			</div>
			<div className="size-48">
				<img
					src="./src/assets/img/avatar.jpg"
					alt=""
					className="w-full h-full rounded-full"
				/>
			</div>
		</div>
	);
};

export default Hero;
