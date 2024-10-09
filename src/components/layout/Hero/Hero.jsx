import avatar from "../../../assets/img/avatar.jpg";
import Button from "../../Button/Button";
import Links from "../../Links/Links";
import { FaAddressCard } from "react-icons/fa6";
import { FiLinkedin, FiGithub, FiAtSign } from "react-icons/fi";

function Hero() {
	return (
		<section className="w-full flex flex-col-reverse md:flex-row text-text justify-start">
			<div className="flex-1 flex flex-col gap-y-4 mt-2">
				<h1 className="text-3xl md:text-5xl font-bold max-w-2xl">
					Phung Quang Anh
				</h1>
				<h2 className="mb-4 max-w-lg">
					Fullstack Developer - Vocalist at 1020phug
				</h2>
				<div className="flex items-center">
					<Button variant="outline">
						<Links href={"/about"} variant="outline">
							<FaAddressCard /> Resume
						</Links>
					</Button>
					<div className="flex items-center space-x-6 ml-6">
						<Links
							href={"mailto:1020phug@gmail.com"}
							isSocial="true"
							className="w-5 h-5"
						>
							<FiAtSign className="w-full h-full" />
						</Links>
						<Links
							href={"https://github.com/1020phug"}
							isSocial="true"
							className="w-5 h-5"
						>
							<FiGithub className="w-full h-full" />
						</Links>
						<Links
							href={"https://linkedin.com/1020phug"}
							isSocial="true"
							className="w-5 h-5"
						>
							<FiLinkedin className="w-full h-full" />
						</Links>
					</div>
				</div>
			</div>
			<div className="w-[80px] sm:w-[186px] relative mb-6 sm:mb-0 rounded-full">
				<img src={avatar} alt="" className="w-full h-full rounded-full" />
			</div>
		</section>
	);
}

export default Hero;
