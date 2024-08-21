import { FaDownload, FaRegPaperPlane } from "react-icons/fa6";

const Hero = () => {
	return (
		<main className="w-full h-full max-w-2xl lg:max-w-4xl mx-auto mt-24">
			<div className="flex flex-col space-y-10 justify-between items-center lg:flex-row-reverse lg:gap-10">
				<div className="w-96 h-auto lg:w-full lg:h-96 rounded-full overflow-hidden">
					<img
						src="/src/assets/img/avatar.jpg"
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="flex flex-col gap-10 justify-center items-center">
					<h1 className="text-6xl lg:text-7xl">Bitter is Better</h1>
					<p className="w-1/2 lg:w-full text-sm lg:text-md text-slate-500 text-wrap leading-8">
						Nếu phải lựa chọn nơi có thể xàm xí về cuộc sống, nhân sinh, triết
						lý, đây có thể là phương án tồi nếu như bạn đang tìm kiếm một địa
						điểm nơi mà quan điểm của bạn có giá trị 😎
					</p>
					<div className="flex flex-col gap-2 w-1/2 justify-center lg:justify-start items-center md:w-full md:flex-row">
						<a
							href="https://drive.google.com/file/d/1b2a7q5tQk9eXjwCZ5u2gXt1YrHb0E7D1/view?usp=sharing"
							target="_blank"
							rel="noopener"
							className="w-full flex justify-center items-center gap-2 md:w-fit py-2 px-6 bg-slate-800 text-slate-50 rounded-md shadow-md shadow-slate-500 hover:-translate-y-1 hover:shadow-sm hover:shadow-slate-300 transition-all duration-200 active:translate-y-1 active:shadow-md active:shadow-slate-500"
						>
							Download CV
							<FaDownload />
						</a>
						<a
							href="#contact"
							className="w-full flex justify-center items-center gap-2 md:w-fit py-2 px-6 bg-slate-50 text-slate-800 rounded-md hover:-translate-y-1 hover:shadow-sm hover:shadow-slate-300 transition-all duration-200 border border-slate-300 active:translate-y-1 active:shadow-sm active:shadow-slate-500"
						>
							Get in Touch
							<FaRegPaperPlane />
						</a>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hero;
