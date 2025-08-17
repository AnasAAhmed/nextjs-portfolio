import PlusSvg from "./PlusSvg";

const SectionSvg = ({ crossesOffset }: { crossesOffset?: string }) => {
  return (
    <>
      <PlusSvg
        className={`hidsden absolute -top-[0.3125rem] left-[1.5625rem] 
         ${crossesOffset && crossesOffset} lg:block xl:left-[2.1875rem] 
    transition-transform duration-500 ease-in-out hover:rotate-90`}
      />

      <PlusSvg
        className={`hiddden absolute -top-[0.3125rem] right-[1.5625rem] 
    ${crossesOffset && crossesOffset} lg:block xl:right-[2.1875rem] 
    transition-transform duration-500 ease-in-out hover:rotate-90`}
      />
    </>
  );
};

export default SectionSvg;
