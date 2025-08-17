import Section from "./Section";
import Heading from "./Heading";
import { feturedProjects, projectHighlights } from "@/lib/constants";
import { StickyScroll } from "../ui/sticky-scroll";
import { WobbleCard } from "../ui/wobble-card";
import SplitText from "../ui/split-text";


const FeaturedProjects = () => {
  const projects = [
    {
      title: feturedProjects[0].heading,
      description: (<div className="relative not-dark:max-md:text-white z-1 maxs-w-[19rem] ml-auto">
        <p className="text-sm font-normal mb-[2rem] text-n-3">
          {feturedProjects[0].text}
        </p>
        <ul className="body-2">
          {projectHighlights[0].map((i, _) => (
            <li key={_} className="flex items-start max-w-78 py-2 border-t border-n-6">
              <img width={24} height={24} src="/check.svg" />
              <p className="ml-4 text-sm">{i.p}<br /> </p>
            </li>
          ))}
        </ul>
      </div>),
      content: (
        <img
          src="https://i.ytimg.com/vi/SR4dFgdKUyI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpWCWIN4jQkW5QMj4yqb_Z6SIk8g"
          alt="Borcelle Store"
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      title: feturedProjects[1].heading,
      description:
        (<div className="relative not-dark:max-md:text-white z-1 max-sw-[19rem] ml-auto">
          <p className="text-sm font-normal mb-[3rem] text-n-3">
            {feturedProjects[1].text}
          </p>
        </div>), content: (
          <img
            src="https://conwrite-ai.vercel.app/hero.png"
            alt="ConWrite.ai"
            className="w-full h-full object-cover"
          />
        ),
    },
    {
      title: feturedProjects[2].heading,
      description:
        (<div className="relative not-dark:max-md:text-white z-1 max-ws-[19rem] ml-auto">
          <p className="text-sm font-normal mb-[2rem]">
            {feturedProjects[2].text}
          </p>

          <ul className="body-2">
            {projectHighlights[1].map((i, _) => (
              <li key={_} className="flex items-start py-2 max-w-78 border-t border-n-6">
                <img width={24} height={24} src="/check.svg" />
                <p className="ml-4 text-sm">{i.p}<br /> </p>
              </li>
            ))}
          </ul>
        </div>),
      content: (
        <img
          src="/ff.png"
          alt="Social Media App"
          className="w-full h-full object-cover"
        />
      ),
    },
  ];
  return (
    <Section
      crosses
      customPaddings="py-2"
      id="features"
    >
      <Heading
        className="pt-10 md:pt-5 xl:pt-0 text-center"
        title="What i have learned by making these complex real-world apps"
        text="From eCommerce to AI tools and social platforms, each project sharpened my skills in performance, SEO, UX, and scalability."
      />
      <div className="grid text-white/80 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <WobbleCard
          containerClassName="bg-pink-800 sm:col-span-2 lg:col-span-2 relative overflow-visible"
          className="relative flex flex-col justify-between h-full p-8"
        >
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-lg sm:text-2xl font-bold mb-4">{projects[0].title}</h3>
            {projects[0].description}
          </div>
          <div className="md:absolute bottom-0 right-[-40px] sm:max-w-[500px] sm:max-h-[400px] rounded-xl shadow-lg overflow-hidden">
            {projects[0].content}
          </div>
        </WobbleCard>

        <WobbleCard
          containerClassName="bg-blue-800 sm:col-span-2 lg:col-span-1"
          className="flex flex-col h-full"
        >
          <h3 className="text-lg sm:text-2xl font-bold mb-4">{projects[1].title}</h3>
          {projects[1].description}
          <div className="mt-auto overflow-hidden rounded-lg">
            {projects[1].content}
          </div>
        </WobbleCard>

        <WobbleCard
          containerClassName="bg-indigo-900 sm:col-span-2 lg:col-span-3"
          className="flex flex-col lg:flex-row gap-6 h-full"
        >
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-lg sm:text-2xl font-bold mb-4">{projects[2].title}</h3>
            {projects[2].description}
          </div>
          {/* <div className="flex-1 max-h-[300px] max-w-[450px] self-enfd overflow-hidden rounded-lg"> */}
          <div className="md:absolute bottom-[-40px] right-[-40px] sm:max-w-[600px] sm:max-h-[500px] rounded-xl shadow-lg overflow-hidden">
            {projects[2].content}
          </div>
        </WobbleCard>
      </div>
      {/* <StickyScroll content={stickyContent} /> */}
    </Section>

  );
};

export default FeaturedProjects;
