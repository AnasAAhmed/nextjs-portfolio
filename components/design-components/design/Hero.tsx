'use client'
import PlusSvg from "@/assets/svg/PlusSvg";
import { useEffect, useRef, useState } from "react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import Notification from "../Notification";
import { heroIcons } from "@/lib/constants";
import MovingLines from "@/assets/svg/MovingLines";


export const ImaheBtm = () => {
  return (
    <>
      <div className="relative bg-slate-800 z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative bg-slate-900 z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

export const Parallax = () => {
  const parallaxRef = useRef(null);

  return (
    <div ref={parallaxRef} className="masx-sm:hidden scale-75 lg:scale-100">
      < ScrollParallax isAbsolutelyPositioned >
        <ul className="absolute -left-[10rem] sm:-left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-foreground/50 rounded-2xl flex">
          {heroIcons.map((icon, index) => (
            <li title={icon} className="p-5" key={index}>
              <img src={icon} width={24} height={25} alt={icon} />
            </li>
          ))}
        </ul>
      </ScrollParallax >

      <ScrollParallax isAbsolutelyPositioned>
        <Notification
          className="absolute border border-foreground/50 -right-[10rem] sm:-right-[5.5rem] bottom-[11rem] w-[18rem] flex"
          title="30+ projects"
        />
      </ScrollParallax>
    </div >
  );
};

export const BackgroundCircles = ({ parallaxRef }: { parallaxRef?: any }) => {
  const [mounted, setMounted] = useState(false);
  const [enableParallax, setEnableParallax] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setMounted(true);
      setEnableParallax(false);
    } else {
      setMounted(true);
    }
  }, []);
  return (
    <div className="absolute -z-30 -top-[32rem] sm:-top-[38.5rem] md:-top-[42.375rem] left-1/2 w-[46rem] md:w-[68rem] sm:w-[58rem] aspect-square bordser border-n-2/5 rounded-full -translate-x-1/2 xl:-top-[37rem]">
      {/* MovingLines Svg */}

      <MovingLines
        className="absolute w-[46rem] max-ssm:hidden md:w-[68rem] sm:w-[48rem] top-1/2 left-1/2 w-s[ss65.875rem] aspect-square borsder bsorder-n-2/10 rousnded-full -translate-x-1/2 -translate-y-1/2"
      />

      {/* Moving background colored circle balls */}
      {enableParallax && (

        <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
            <div
              className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
            <div
              className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
            <div
              className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
            <div
              className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
            <div
              className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            />
          </div>

          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
            <div
              className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            />
          </div>
        </MouseParallax>
      )}
    </div>
  );
};
