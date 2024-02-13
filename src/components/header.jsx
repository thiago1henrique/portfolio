import imagemLogo from "../assets/logo.svg";
import linkedin from "../assets/linkedin.svg";
import gitHub from "../assets/github.svg";
import behance from "../assets/behance.svg";

export default function Header() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16">
			<div className="flex justify-center sm:justify-between items-center">
				<a href="https://www.linkedin.com/in/thiago-henrique-97b559216/" target="_blank">
					<img src={imagemLogo} width={48} alt="Logo Thiago Henrique" />
				</a>

				<div className="hidden sm:flex gap-4">
					<a href="https://www.linkedin.com/in/thiago-henrique-97b559216/" target="_blank">
						<img className="motion-safe:animate-bounce" src={linkedin} width={32} alt="Linkedin" />
					</a>
					<a href="https://github.com/thiago1henrique" target="_blank">
						<img src={gitHub} width={32} alt="Github" />
					</a>
					<a href="https://www.behance.net/thiagoenrique" target="_blank">
						<img src={behance} width={32} alt="Behance" />
					</a>
				</div>
			</div>
		</div>
	);
}
