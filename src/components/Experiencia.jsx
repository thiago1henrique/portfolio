import CardExperiencia from "./CardExperiencias";

export default function Experiencia() {
  return (
    <div className="px-4 sm:py-20 flex flex-col-reverse justify-between sm:flex-row gap-4 items-center">
      <div className="flex items-center gap-2">
      <div className="w-1 h-1 bg-javascript motion-safe:animate-bounce" />
      <h2 className="text-[#292929]">2022 - ...</h2>
      </div>
      <CardExperiencia/>
      <h2 className="sm:hidden text-white text-4xl font-bold pt-8">EXPERIÊNCIA</h2>
      <h2 className="hidden sm:block font-bold sm:text-[9rem] sm:leading-[10rem] text-[#292929]">EXP <br /> ERIÊ <br /> NCIA</h2>
    </div>
  )
}