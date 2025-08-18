
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient, Parallax } from "./design/Hero";
import Image from "next/image";
import SplitText from "../ui/split-text";

const Hero = () => {

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
          <h1 className="srb-only text-4xl font-semibold md:text-5xl lg:text-6xl mbf-6">
            Hi' i am
            <span className="bg-clip-text bg-gradient-to-tl from-blue-400 to-violet-600  text-transparent">
              &nbsp;Anas Ahmed
            </span>
          </h1>
          <br />
          <h1 className="sr-only text-2xl font-semibold md:text-3xl lg:text-4xl mb-6">
            A Full Stack Developer
          </h1>
          <SplitText
            text="A Full Stack Developer"
            mode="words"
            className="text-2xl font-semibold md:text-3xl lg:text-4xl mb-6"
            itemClassName="mx-[1px]"           // slight spacing
            delayPerItem={0.03}
            duration={0.3}
            y={12}
          />
          <SplitText
            text=" I craft responsive, high-performance web applications using Next.js, React.js, and Node.js.
            Currently expanding my expertise in Agentic AI and Web 3.0."
            mode="words"
            className="max-w-4xl font-normal mx-auto mb-6 text-sm md:text-lg lg:text-[21px] "
            itemClassName="mx-[1px]"           // slight spacing
            delayPerItem={0.03}
            duration={0.3}
            y={10}
          />
          <br />
          <p style={{ fontWeight: '300' }} className="sr-only max-w-4xl mx-auto mb-6 text-sm md:text-xl lg:text-2xl  lg:mb-8">
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
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl ">
          <div className="relative z-1 p-0.5 rounded-2xl bg-[conic-gradient(from_225deg,#FFC876,#79FFF7,#9F53FF,#FF98E2,#FFC876)]">
            <div className="relative bg-[#19142b] rounded-[1rem]">
              {/* <div className="h-[1.4rem] bg-[#0E0C15] rounded-t-[0.9rem]" /> */}

              <div className="aspect-[33/40] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <Image
                  src={'/hero/robot.jpg'}
                  className="w-full  scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <Parallax />
              </div>
            </div>

            <Gradient />
          </div>
          <div className="not-dark:hidden absolute -z-50 -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <Image
              src={'/hero/hero-background.jpg'}
              className="w-full rounded-b-[400px]"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;