export default function CardFormacao({ subtitle, title, footerInfo }) {
  const isIFPEIncluded = footerInfo.includes("IFPE");
  
  return (
    <div className="flex flex-col py-4 px-4 w-[100%] sm:w-[200px] bg-gradient-to-t from-card-formTwo to-card-formOne rounded-md border-solid border-2 border-card-outline min-h-[80px] sm:min-h-[160px]">
      <h2 className="text-white">{subtitle}</h2>
      <h2 className="text-white font-bold">{title}</h2>
      <p className="text-white">
        {isIFPEIncluded ? (
          <span className="font-bold">IFPE</span>
        ) : (
          "IFPE"
        )}{' '}
        | <span className="font-medium text-white">{footerInfo.split(' | ')[1]}</span>
      </p>
    </div>
  );
}
