import { Carousel } from "flowbite-react";
import hollow from "../assets/hollow.mp4";
import red from "../assets/red.mp4";
import login from "../assets/login.png";
import notas from "../assets/notas.mp4";
import app from "../assets/app.mp4";

export default function Component() {
	return (
		<div className="flex flex-col sm:flex-row max-w-7xl mx-auto h-[60vh] sm:h-64 xl:h-80 2xl:h-96 ">
			<div className="flex justify-center flex-col px-4 pb-8 gap-4 sm:pr-20 sm:w-[40%]">
				<h2 className="text-text text-right text-6xl font-bold relative">
					<div className="w-3 h-3 bg-javascript motion-safe:animate-bounce absolute top-2 right-[13.8rem]" />
					Projetos
				</h2>
				<div />
				<p className="text-text text-right sm:pl-30">
					Desenvolvo Apps e plataformas com {" "}
					<b
						className="
          text-html"
					>
						HTML
					</b>
					, <b className="text-css">CSS</b>, <b className="text-javascript">JavaScript</b> e <b>PHP</b>. Também já
					trabalho na área de <b>UI/UX Design</b>.
				</p>
			</div>
			<div className="z-10 sm:w-[50%] h-[100%] pb-44 sm:pb-0">
				<Carousel pauseOnHover slideInterval={8000}>
					<div className="relative">
						<a href="https://thiago1henrique.github.io/hollow_knight/" target="_blank">
							<video src={hollow} autoPlay loop></video>
						</a>
						<p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-4xl font-bold">
							Hollow Knight
						</p>
					</div>

					<div className="relative">
						<a
							href="https://www.figma.com/file/Ppcz9jyWSiOU5Y2YUXTXl7/Red-Dead-Redemption-2?type=design&node-id=0%3A1&mode=design&t=cHG0qmIpIsH6py9V-1"
							target="_blank"
						>
							<video src={red} autoPlay loop></video>
						</a>
						<p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-1xl sm:text-2xl font-bold">
							Red Dead Redemption 2
						</p>
					</div>

					<div className="relative">
						<a
							href="https://www.figma.com/file/NBMXhUGhI0SOgrMgwwxlee/UI-day-%3D%3E-1?type=design&node-id=0%3A1&mode=design&t=p7GqJkxhSVEm8hZ3-1"
							target="_blank"
						>
							<img src={login}></img>
						</a>
						<p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-1xl sm:text-2xl font-bold">
							Login Screen
						</p>
					</div>

					<div className="relative">
						<a
							href="https://www.figma.com/file/Ppcz9jyWSiOU5Y2YUXTXl7/Red-Dead-Redemption-2?type=design&node-id=0%3A1&mode=design&t=cHG0qmIpIsH6py9V-1"
							target="_blank"
						>
							<video src={notas} autoPlay loop></video>
						</a>
						<p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-1xl sm:text-2xl font-bold">
							Site para salvar notas
						</p>
					</div>

					<div className="relative">
						<a
							href="https://www.figma.com/file/Ppcz9jyWSiOU5Y2YUXTXl7/Red-Dead-Redemption-2?type=design&node-id=0%3A1&mode=design&t=cHG0qmIpIsH6py9V-1"
							target="_blank"
						>
							<video src={app} autoPlay loop></video>
						</a>
						<p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-1xl sm:text-2xl font-bold">
							App Delivery
						</p>
					</div>
				</Carousel>
			</div>
		</div>
	);
}
