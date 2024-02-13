import CardFormacao from "./CardFormacao";

export default function Formacao() {
	return (
		<section className="flex flex-col sm:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16">
			<div className="hidden sm:block sm:w-[50%]">
				<h2 className="hidden sm:block font-bold sm:text-[9rem] sm:leading-[10rem] text-[#292929]">
					FORM <br /> AÇÃO
				</h2>
			</div>

      <div className="sm:hidden pt-16">
        <h2 className="font-bold text-white text-4xl">FORMAÇÃO</h2>
      </div>

			<div className="sm:w-[50%] flex flex-col gap-4">
				<p className="max-w-[40ch] sm:max-w-[60ch] text-text pt-4 sm:pt-8">
					Minha mais recente experiência acadêmica está sendo cursar <b>Análise e Desenvolvimento de Sistemas</b>🎓 no <b>Instituto Federal de Pernambuco</b>.
					Além disso, me mantenho atualizado com cursos intensivos online.
				</p>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-4">
          <CardFormacao subtitle="Superior" title="Analise e Desenvolvimento de Sistemas" footerInfo="IFPE 2022 | 2025"/>
          <CardFormacao subtitle="Técnico" title="Informática Para Internet" footerInfo="IFPE 2021 | 2024"/>
        </div>
			</div>
		</section>
	);
}
