import book from "../assets/book.svg";
import hability from "../assets/hability.svg";

export default function Competencias() {
	return (
		<div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-32">
			<div className="hidden sm:block sm:min-w-[50%]" />
			<div className="w-[100%] sm:w-[50%] text-white">
				<div className="px-8 sm:px-0 flex items-center">
					<h2 className="font-bold pb-4 relative text-hability">
						<img className="absolute -left-8 top-1 motion-safe:animate-bounce" src={book} alt="Livro" />
						Curos Intensivos
					</h2>
				</div>

				<ul>
					<li className="flex justify-between">
						<span className="font-bold text-sm">UX Design & UI Design</span>{" "}
						<span className="text-hours">52 Horas</span>
					</li>
					<li className="flex justify-between">
						<span className="font-bold text-sm">UI Design Avançado</span> <span className="text-hours">30 Horas</span>
					</li>
					<li className="flex justify-between">
						<span className="font-bold text-sm">Front End Avançado</span> <span className="text-hours">42 Horas</span>
					</li>
					<li className="flex justify-between">
						<span className="font-bold text-sm">CSS Flex-Box</span> <span className="text-hours">06 Horas</span>
					</li>
					<li className="flex justify-between">
						<span className="font-bold text-sm">Javascript Avançado</span> <span className="text-hours">72 Horas</span>
					</li>
					<li className="flex justify-between">
						<span className="font-bold text-sm">User Experience (UX) Design - Google</span>{" "}
						<span className="text-hours">42 Horas</span>
					</li>
					<li className="flex justify-between">
						<span className="font-bold text-sm">Adobe XD</span> <span className="text-hours">06 Horas</span>
					</li>
				</ul>

				<div className="px-8 pt-8 sm:px-0 flex items-center">
					<h2 className="font-bold pb-4 relative text-hability">
						<img className="absolute -left-8 top-1 motion-safe:animate-bounce" src={hability} alt="Livro" />
						Tenho Habilidade com
					</h2>
				</div>

				<ul>
					<li className="flex justify-between">
						<span className="font-bold text-sm">Adobe Photoshop</span>
					</li>
					<li className="flex justify-between">
						<span className="font-bold text-sm">Adobe Illustraitor</span>
					</li>
					<li className="flex justify-between">
						<span className="font-bold text-sm">Adobe Premiere</span>
					</li>
					<li className="flex justify-between">
						<span className="font-bold text-sm">Adobe XD</span>
					</li>
					<li className="flex justify-between">
						<span className="font-bold text-sm">Figma</span>
					</li>
          <li className="flex justify-between">
						<span className="font-bold text-sm">TailwindCss</span>
					</li>
		
				</ul>
			</div>
		</div>
	);
}
