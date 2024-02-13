export default function CardExperiencia() {
	return (
		<section className="sm:mx-6 px-6 py-6 sm:mt-0 flex flex-col sm:flex-row gap-16 bg-card-bg border-solid border-2 border-card-outline max-w-[840px] rounded-md">
			<div className="flex flex-col gap-4">
				<h2 className="text-4xl text-white font-bold">Agência Lo</h2>
				<p className="max-w-[60ch] text-white">
					No meu meio de trabalho uso HTML, CSS e JavaScript. 
          Para aplicativos web utilizo PHP (com Elementor). Também
					utilizo pacote Adobe para edição de imagens.
				</p>
			</div>

			<div className="flex flex-col gap-4">
				<h2 className="text-3xl text-white font-bold">Desenvolvedor Front-End</h2>
        <div className="flex flex-wrap gap-4">
          <span className="bg-text py-2 px-4 rounded-md font-bold">HTML</span> <span className="bg-text py-2 px-4 rounded-md font-bold">CSS</span> <span className="bg-text py-2 px-4 rounded-md font-bold">JavaScript</span> <span className="bg-text py-2 px-4 rounded-md font-bold">PHP</span>
          <span className="bg-text py-2 px-4 rounded-md font-bold">Figma</span> <span className="bg-text py-2 px-4 rounded-md font-bold">Photoshop</span> <span className="bg-text py-2 px-4 rounded-md font-bold">Adobe XD</span> <span className="bg-text py-2 px-4 rounded-md font-bold">Wordpress</span>
          <span className="bg-text py-2 px-4 rounded-md font-bold">E-mail Marketing</span>
          
        </div>
			</div>
		</section>
	);
}
