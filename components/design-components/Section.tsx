import SectionSvg from "@/assets/svg/SectionSvg";
import { ReactNode } from "react";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}: {
  className?: string,
  id?: string,
  crosses?: boolean,
  crossesOffset?: string,
  customPaddings?: string,
  children: ReactNode,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        // customPaddings ||
        `lg:py-12 xl:py-24 sm:px-16`
        } 
      ${className || ""}`}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-foreground/20 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-foreground/20 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={`hidsden absolute top-0 left-7.5 right-7.5 h-0.25 bg-foreground/20  ${crossesOffset && crossesOffset
              } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
