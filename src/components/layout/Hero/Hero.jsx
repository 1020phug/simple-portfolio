import avatar from "../../../assets/img/avatar.jpg";
import Button from "../../Button/Button";
import Links from "../../Links/Links";
import { FaAddressCard } from "react-icons/fa6";

function Hero() {
	return (
		<section className="w-full flex flex-col-reverse md:flex-row text-text justify-start">
			<div className="flex-1 flex flex-col gap-y-4">
				<h1 className="text-3xl md:text-5xl font-bold max-w-2xl">
					Phung Quang Anh
				</h1>
				<h2 className="mb-4 max-w-lg">Fullstack Developer</h2>
				<div className="flex items-center">
					<Button variant="outline">
						<Links href={"/about"} variant="outline">
							<FaAddressCard /> Resume
						</Links>
					</Button>
				</div>
			</div>
			<div className="w-[80px] sm:w-[186px] relative mb-6 sm:mb-0 rounded-full">
				<img src={avatar} alt="" className="w-full h-full rounded-full" />
			</div>
		</section>
	);
}

export default Hero;
