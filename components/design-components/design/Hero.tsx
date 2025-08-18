'use client'
import PlusSvg from "@/assets/svg/PlusSvg";
import { useEffect, useRef, useState } from "react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import Notification from "../Notification";
import { heroIcons } from "@/lib/constants";


export const Gradient = () => {
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
    <div ref={parallaxRef}>
      < ScrollParallax isAbsolutelyPositioned >
        <ul className="absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl flex">
          {heroIcons.map((icon, index) => (
            <li title={icon} className="p-5" key={index}>
              <img src={icon} width={24} height={25} alt={icon} />
            </li>
          ))}
        </ul>
      </ScrollParallax >

      <ScrollParallax isAbsolutelyPositioned>
        <Notification
          className="absolute -right-[5.5rem] bottom-[11rem] w-[18rem] flex"
          title="30+ projects"
        />
      </ScrollParallax>
    </div >
  );
};

export const BackgroundCircles = ({ parallaxRef }: { parallaxRef?: any }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute -z-30 -top-[29rem] sm:-top-[38.5rem] md:-top-[42.375rem] left-1/2 w-[46rem] md:w-[68rem] sm:w-[58rem] aspect-square bordser border-n-2/5 rounded-full -translate-x-1/2 xl:-top-[32rem]">
      {/* <Rings /> */}

      {/* Moving background colored circle balls */}
      <svg className="absolute w-[46rem] md:w-[68rem] sm:w-[48rem] top-1/2 left-1/2 w-s[ss65.875rem] aspect-square borsder bsorder-n-2/10 rousnded-full -translate-x-1/2 -translate-y-1/2" viewBox="0 0 602 602" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.15"><path fillRule="evenodd" clipRule="evenodd" d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z" stroke="url(#paint0_radial)" id="path_0"></path><path d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z" stroke="url(#paint1_radial)" id="path_1"></path><path d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z" stroke="url(#paint2_radial)" id="path_2"></path></g><ellipse cx="295.027" cy="193.118" transform="translate(-295.027 -193.118)" rx="1.07306" ry="1.07433" fill="#945DD6"><animateMotion dur="10s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#path_2"></mpath></animateMotion></ellipse><path d="M294.685 193.474L268.932 219.258" transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)" stroke="url(#paint3_linear)"><animateMotion dur="10s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#path_2"></mpath></animateMotion></path><ellipse cx="295.027" cy="193.118" transform="translate(-295.027 -193.118)" rx="1.07306" ry="1.07433" fill="#46737"><animateMotion dur="5s" begin="1" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#path_2"></mpath></animateMotion></ellipse><path d="M294.685 193.474L268.932 219.258" transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)" stroke="url(#paint7_linear)"><animateMotion dur="5s" begin="1" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#path_2"></mpath></animateMotion></path><ellipse cx="476.525" cy="363.313" rx="1.07433" ry="1.07306" transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)" fill="#945DD6"><animateMotion dur="10s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#path_0"></mpath></animateMotion></ellipse><path d="M476.171 362.952L450.417 337.168" transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)" stroke="url(#paint4_linear)"><animateMotion dur="10s" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#path_0"></mpath></animateMotion></path><ellipse cx="382.164" cy="155.029" rx="1.07433" ry="1.07306" transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)" fill="#F46737"><animateMotion dur="10s" begin="1" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#path_0"></mpath></animateMotion></ellipse><path d="M381.81 154.669L356.057 128.885" transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)" stroke="url(#paint5_linear)"><animateMotion dur="10s" begin="1" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#path_0"></mpath></animateMotion></path><ellipse cx="333.324" cy="382.691" rx="1.07306" ry="1.07433" transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)" fill="#F46737"><animateMotion dur="5s" begin="0" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#path_1"></mpath></animateMotion></ellipse><path d="M333.667 382.335L359.42 356.551" transform="scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)" stroke="url(#paint6_linear)"><animateMotion dur="5s" begin="0" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#path_1"></mpath></animateMotion></path><ellipse cx="165.524" cy="93.9596" rx="1.07306" ry="1.07433" transform="translate(-165.524 -93.9596)" fill="#F46737"><animateMotion dur="10s" begin="3" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#path_0"></mpath></animateMotion></ellipse><path d="M165.182 94.3159L139.429 120.1" transform="translate(-165.182 -94.3159) rotate(45 165.182 94.3159)" stroke="url(#paint7_linear)"><animateMotion dur="10s" begin="3" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#path_0"></mpath></animateMotion></path><ellipse cx="476.525" cy="363.313" rx="1.07433" ry="1.07306" transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)" fill="#13ADC7"><animateMotion dur="12s" begin="4" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#path_0"></mpath></animateMotion></ellipse><path d="M476.171 362.952L450.417 337.168" transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)" stroke="url(#paint11_linear)"><animateMotion dur="12s" begin="4" repeatCount="indefinite" rotate="auto"><mpath xlinkHref="#path_0"></mpath></animateMotion></path><defs><radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 301) rotate(90) scale(300)"><stop offset="0.333333" stopColor="#FBFBFB"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 301) rotate(90) scale(300)"><stop offset="0.333333" stopColor="#FBFBFB"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 301) rotate(90) scale(300)"><stop offset="0.333333" stopColor="#FBFBFB"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></radialGradient><linearGradient id="paint3_linear" x1="295.043" y1="193.116" x2="269.975" y2="218.154" gradientUnits="userSpaceOnUse"><stop stopColor="#945DD6"></stop><stop offset="1" stopColor="#945DD6" stopOpacity="0"></stop></linearGradient><linearGradient id="paint4_linear" x1="476.529" y1="363.31" x2="451.461" y2="338.272" gradientUnits="userSpaceOnUse"><stop stopColor="#945DD6"></stop><stop offset="1" stopColor="#945DD6" stopOpacity="0"></stop></linearGradient><linearGradient id="paint5_linear" x1="382.168" y1="155.027" x2="357.1" y2="129.989" gradientUnits="userSpaceOnUse"><stop stopColor="#F46737"></stop><stop offset="1" stopColor="#F46737" stopOpacity="0"></stop></linearGradient><linearGradient id="paint6_linear" x1="333.309" y1="382.693" x2="358.376" y2="357.655" gradientUnits="userSpaceOnUse"><stop stopColor="#F46737"></stop><stop offset="1" stopColor="#F46737" stopOpacity="0"></stop></linearGradient><linearGradient id="paint7_linear" x1="165.54" y1="93.9578" x2="140.472" y2="118.996" gradientUnits="userSpaceOnUse"><stop stopColor="#F46737"></stop><stop offset="1" stopColor="#F46737" stopOpacity="0"></stop></linearGradient><linearGradient id="paint8_linear" x1="414.367" y1="301.156" x2="439.435" y2="276.118" gradientUnits="userSpaceOnUse"><stop stopColor="#13ADC7"></stop><stop offset="1" stopColor="#13ADC7" stopOpacity="0"></stop></linearGradient><linearGradient id="paint9_linear" x1="515.943" y1="288.238" x2="541.339" y2="291.454" gradientUnits="userSpaceOnUse"><stop stopColor="#13ADC7"></stop><stop offset="1" stopColor="#13ADC7" stopOpacity="0"></stop></linearGradient><linearGradient id="paint10_linear" x1="117.001" y1="230.619" x2="117.36" y2="258.193" gradientUnits="userSpaceOnUse"><stop stopColor="#945DD6"></stop><stop offset="1" stopColor="#945DD6" stopOpacity="0"></stop></linearGradient><linearGradient id="paint11_linear" x1="476.529" y1="363.31" x2="451.461" y2="338.272" gradientUnits="userSpaceOnUse"><stop stopColor="#13ADC7"></stop><stop offset="1" stopColor="#13ADC7" stopOpacity="0"></stop></linearGradient></defs></svg>
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
    </div>
  );
};
