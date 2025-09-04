
import { skills, skillsContent, skillsText } from "@/lib/constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Image from "next/image";
import Heading from "./Heading";
import SplitText from "../ui/split-text";
import { GradientLightLeft } from "./design/Benefits";

const Skills = ({ crosses = true }: { crosses?: boolean }) => {
  return (
    <Section crosses={crosses} id="skills" crossesOffset="lg:translatfe-y-[5.25rem]"
    >
      <div className="container lg:flex max-lg:pb-16 pt-16">
        <div style={{ maxWidth: crosses ? '448px' : '' }}>
          <Heading hPosition="start" title="My Tech Stack & Expertise" />
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {skillsContent.map((item) => (
              <li className="mb-3 py-2" key={item.id}>
                <div className="flex items-center">
                  <img src={'/check.svg'} width={24} height={24} alt="check" />
                  <h6 className="text-xl ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="font-medium font-mono text-foreground/70 mt-3 text-sm">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button
            inNewTab
            href="https://www.fiverr.com/users/anas_ahmed_24?utm_source=anas_portfolio&utm_medium=website&utm_campaign=anas_portfolio_cta&utm_content=skill_button"
          >
            Try it now
          </Button>

        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="sr-only font-normal font-mono text-foreground/70 mb-8s md:msb-16 lg:msb-32 lg:w-[22rem] lg:mx-auto">
            {skillsText}
          </p>
          <SplitText
            text={skillsText}
            mode="words"
            className="font-normal font-mono text-foreground/70 mb-8 max-w-md md:mb-16 lg:mb-32"
            itemClassName="mx-[1px]"
            delayPerItem={0.03}
            duration={0.3}
            y={12}
          />
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-[conic-gradient(from_225deg,#FFC876,#79FFF7,#9F53FF,#FF98E2,#FFC876)] rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-background not-light:bg-[#0E0C15] rounded-full">
                  <Image
                    src={'/brainwave-symbol.svg'}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>

            </div>
            <GradientLightLeft />
            <ul>
              {skills.map((app, index) => (
                <li
                  key={app.id}
                  className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom"
                  style={{ rotate: `${index * 22.5}deg` }}
                >
                  <div
                    title={app.title}
                    className="relative cursor-pointer -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl"
                    style={{ rotate: `${-(index * 22.5)}deg` }}

                  >
                    <Image
                      className="m-auto transition-transform duration-500 ease-in-out hover:rotate-45"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
