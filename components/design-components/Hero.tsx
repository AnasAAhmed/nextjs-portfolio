
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient, Parallax } from "./design/Hero";
import Image from "next/image";
import SplitText from "../ui/split-text";
import { SplitText2 } from "../ui/split-text-ssr";

const Hero = () => {

  return (
    <Section
      className=" sm:pb-10 pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings='s'
      id="hero"
    >
      <div className="container pb-10 mt-1 sm:mt-20 md:mt-30 relative " >
        <div className="relative z-1 max-w-[76rem] mx-auto text-center mb-[4rem] ">
          <h1 className="text-4xl font-semibold md:texts-4xl lg:text-7xl mbf-6">
            Hi, <br /> i am
            <span className="bg-clip-text bg-gradient-to-tl from-blue-400 to-violet-600  text-transparent">
              &nbsp;Anas Ahmed
            </span>
          </h1>
          <br />
          <SplitText2
            text="A Full Stack Developer"
            mode="words"
            className="text-xl font-semibold md:text-2xl lg:text-4xl mb-3 sm:mb-6"
            itemClassName="mx-[1px]"           
            delayPerItem={0.07}
            duration={0.3}
            y={12}
          />
          <SplitText2
            text=" I craft responsive, high-performance web applications using Next.js, React.js, and Node.js. Currently expanding my expertise in Agentic AI and Web 3.0."
            mode="words"
            className="max-w-4xl font-normal mx-auto mb-6 text-sm md:text-lg lg:text-[21px] "
            itemClassName="mx-[1px]"          
            delayPerItem={0.02}           
            duration={0.2}
            y={7}
          />
          <br />
          <Button className="mr-3 btns-fade" white title="Dont need to download, Just View in a tab" inNewTab href="/anas-ahmed-resume.pdf" >
            View Resume
          </Button>
          <Button className="btns-fade max-sm:mt-4" inNewTab href="https://www.fiverr.com/users/anas_ahmed_24?utm_source=anas_portfolio&utm_medium=website&utm_campaign=anas_portfolio_cta&utm_content=skill_button" >
            Hire Me
          </Button>
        </div>
        <div className="relative mx-auto md:max-w-6xl">
          <div className="hero-img-fadeUp relative z-1 p-1 rounded-2xl bg-[conic-gradient(from_225deg,#FFC876,#79FFF7,#9F53FF,#FF98E2,#FFC876)]">
            <div className="relative bg-[#19142b] rounded-[1rem]">
              <div className="rounded-[0.9rem] overflow-hidden">
                <Image
                   src="/code.webp"
                  className="w-full aspect-[4/3] sm:aspect-[16/9] object-cover"
                  width={1224}
                  height={890}
                  loading="eager"
                  alt="AI"
                />
                <Parallax />
              </div>
            </div>

            <Gradient />
          </div>
          {/* <div className="light:hidden absolute -z-50 -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <Image
              src={'/hero/hero-background.webp'}
              className="w-full rounded-b-[400px]"
              width={1440}
              height={1800}
              loading="eager"
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

