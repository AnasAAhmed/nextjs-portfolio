// 'use client'
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient, Parallax } from "./design/Hero";
// import { ScrollParallax } from "react-just-parallax";
// import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import { heroIcons } from "@/lib/constants";
import Image from "next/image";
import SplitText from "../ui/split-text";

const GradientRight = () => {
  return (
    <div className="absolute top-[18.25rem] left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
      <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
        <img
          className="w-full"
          src={'/gradient.png'}
          width={942}
          height={942}
          alt="Gradient"
        />
      </div>
    </div>
  );
};

const Hero = () => {
  // const parallaxRef = useRef(null);

  return (
    <Section
      className=" sm:pb-10 pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings='s'
      id="hero"
    >
      <div className="container pb-10 mt-10 sm:mt-20 md:mt-40 relative " >
        {/* <GradientRight /> */}
        {/* <GradientLeft/> */}

        <div className="relative z-1 max-w-[76rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 text-3xl font-semibold md:text-5xl lg:text-6xl mb-6">
            Hi' i am<span className="bg-clip-text bg-gradient-to-tl from-blue-400 to-violet-600  text-transparent">&nbsp;Anas Ahmed</span> A {` `}
            <span className="inline-block relative">
              Full Stack {" "}
              <Image
                src={'/hero/curve.png'}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>Developer
          </h1>
          {/* <TextGenerateEffect duration={0.1} className="max-w-3xl mx-auto mb-6 text-sm md:text-xl lg:text-2xl  lg:mb-8" words="Revolutionize your content creation with our AI-Agents, delivering engaging and high-quality text in seconds."/> */}
          {/* <SplitText
            text=" I craft responsive, high-performance web applications using Next.js, React.js, and Node.js.
            Currently expanding my expertise in Agentic AI and Web 3.0."
            mode="words"
            className="max-w-4xl font-light mx-auto mb-6 text-sm md:text-lg lg:text-xl  lg:mb-8"
            itemClassName="mx-[1px]"           // slight spacing
            delayPerItem={0.03}
            duration={0.3}
            y={14}
          /> */}
          <br />
          <p style={{ fontWeight: '300' }} className="sr-onsly max-w-4xl mx-auto mb-6 text-sm md:text-xl lg:text-2xl  lg:mb-8">
            I craft responsive, high-performance web applications using Next.js, React.js, and Node.js.
            Currently expanding my expertise in <strong>Agentic AI</strong> and Web&nbsp;3.0.
          </p>
          <Button download href="/anas-ahmed-resume.pdf" white className="mr-3">
            My Resume
          </Button>
          <Button inNewTab href="https://www.fiverr.com/users/anas_ahmed_24?utm_source=anas_portfolio&utm_medium=website&utm_campaign=anas_portfolio_cta&utm_content=skill_button" >
            Hire Me
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <Image
                  src={'/hero/robot.jpg'}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                <Parallax/>
                {/* <ScrollParallax isAbsolutelyPositioned>
                  <ul className="absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="absolute -right-[5.5rem] bottom-[11rem] w-[18rem] flex"
                    title="30+ projects"
                  />
                </ScrollParallax> */}
              </div>
            </div>

            <Gradient />
          </div>
          {/* <div className="absolute -z-50 -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <Image
              src={'/hero/hero-background.jpg'}
              className="w-full rounded-b-[400px]"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div> */}

          <BackgroundCircles />
        </div>

      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;