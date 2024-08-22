import { FaDownload, FaRegPaperPlane } from "react-icons/fa6";

const myInfo = {
	Age: 24,
	Occupation: "Frontend Developer",
	Website: "https://1020phug.github.io/",
	Country: "Vietnam",
	Address: "FPT, Hanoi",
	Phone: "+84 123 456 789",
	Email: "PqKb2@example.com",
};

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
		<div className="w-full h-full max-w-2xl lg:max-w-4xl mx-auto my-20 shadow-lg">
			<div className="bg-slate-600 text-slate-50 flex flex-col items-center justify-center gap-6 md:flex-row p-8 rounded-t-xl">
				<div className="md:-translate-x-24 md:translate-y-12 shadow-lg hover:translate-y-10 hover:shadow-2xl transition-all">
					<img
						src="./src/assets/img/avatar.jpg"
						alt=""
						className="w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 border border-slate-100"
					/>
				</div>
				<div className="flex flex-col items-center justify-center space-y-4">
					<h1 className="text-7xl font-bold">1020phug</h1>
					<p className="text-slate-300">Frontend Developer</p>
					<div className="flex justify-center items-center gap-2">
						<button className="flex items-center bg-slate-50 text-slate-600 p-4 rounded-full">
							<FaDownload />
						</button>
						<button className="flex items-center bg-slate-50 text-slate-600 p-4 rounded-full">
							<FaRegPaperPlane />
						</button>
					</div>
				</div>
			</div>
			<div className="bg-slate-50 text-slate-600 p-8 flex flex-col space-y-12 md:gap-10 md:flex-row">
				<div className="flex flex-col md:max-w-[45%]">
					<h1 className="text-3xl font-bold">
						About <span className="text-lime-950">Me</span>
					</h1>
					<p className="mt-4">
						I am a frontend developer with 2 years of experience. I have a
						passion for creating beautiful and functional websites.
					</p>
				</div>
				<ul className="flex flex-col gap-2">{info}</ul>
			</div>
		</div>
	);
};

export default Hero;
