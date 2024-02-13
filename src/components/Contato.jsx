import contato from "../assets/contato.svg";
import linkedin from "../assets/linkedin.svg";
import email from "../assets/email.svg";
import whatsapp from "../assets/whatsapp.svg";

export default function Contato() {
	return (
		<section className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-32">
			<div className="hidden sm:block w-[50%]">
				<img src={contato} alt="Contato" />
			</div>
			<div className="flex flex-col w-[100%] sm:w-[50%] gap-8">
        <h2 className="text-4xl text-white font-bold">Contato</h2>
				<div className="flex gap-4">
					<img className="w-7 h-7" src={email} alt="" />
					<h2 className="text-white">
						<a href="mailto:contatothiago1henrique@gmail.com" target="_blank">
							contatothiago1henrique@gmail.com
						</a>
					</h2>
				</div>

				<div className="flex gap-4">
					<img className="w-7 h-7" src={whatsapp} alt="" />
					<h2 className="text-white">+55 81 99185-5296</h2>
				</div>

				<div className="flex gap-4">
					<img className="w-7 h-7" src={linkedin} alt="Linkedin" />
					<h2 className="text-white">
						<a href="https://www.linkedin.com/in/thiago-henrique-97b559216/" target="_blank">
							https://www.linkedin.com/in/thiago-henrique-97b559216/
						</a>
					</h2>
				</div>
			</div>
		</section>
	);
}
