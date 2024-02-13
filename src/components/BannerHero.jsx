import profile from "../assets/profile.png";
// No início do seu componente
import "tailwindcss/tailwind.css";

export default function BannerHero() {
	return (
		<div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-32">
			<div className="flex flex-col sm:flex sm:flex-row gap-14">
				<div className="flex justify-center sm:pl-20 object-cover">
					<img src={profile} width={352} height={352} title="Thiago Henrique" alt="Thiago Henrique" />
				</div>

				<div className="flex flex-col justify-center gap-8">
					<h1 className="text-left text-4xl font-bold text-text relative">
				<div className="w-3 h-3 bg-squareHero animate-spin absolute top-0 -left-1" />
						THIAGO HENRIQUE <br /> FRONT END DEVELOPER
					</h1>
					<p className="text-xl text-text max-ch max-w-[64ch]">
					Olá, Thiago! Prazer em conhecê-lo! Sou um entusiasta do Front-End de 24 anos, apaixonado por criar experiências incríveis na web e em dispositivos móveis. Domino desde as bases sólidas de <code>HTML</code> e <code>CSS</code> para a construção de landing pages até a implementação de soluções mais avançadas com frameworks poderosos como <b>React.JS</b>💻 e <b>React Native</b>📱. Estou sempre em busca de aprimorar minhas habilidades e criar interfaces inovadoras. Vamos construir algo incrível juntos! 🚀
					</p>
				</div>
			</div>

			<div className="flex justify-end pt-[7rem] font-medium pb-28">
				<p className="text-text">Recife | Pernambuco 🏖️</p>
			</div>
		</div>
	);
}
