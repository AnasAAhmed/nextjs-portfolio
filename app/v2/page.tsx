import UiHero from "@/components/design-components/design/hero-ui";
import EducationItem from "@/components/design-components/design/TimelineContent";
import FeaturedProjects from "@/components/design-components/Features";
import Heading from "@/components/design-components/Heading";
import Projects from "@/components/design-components/Projects";
import Testimonial from "@/components/design-components/Testimonial";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import SplitText from "@/components/ui/split-text";
import { Timeline } from "@/components/ui/timeline";
import { projects } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Cloud, Box, Lock, Search, Settings, Sparkles, DollarSign, Heart, HelpCircle, LampWallDown, Route, Settings2, Terminal, Layers, BookOpen, Bot, Brain, Server } from "lucide-react";
import { Metadata } from "next";

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "Anas Ahmed Portfolio V2",
  description:
    "A full-stack web developer skilled in AI-Agents, Next.js, React, Node.js, MongoDB, PostgreSQL, and API integrations. Building scalable, high-performance web applications with modern technologies.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
      title: "Anas Ahmed Portfolio V2",
    description:
      "Discover Anas Ahmed’s portfolio v2 showcasing projects in Next.js, React, Node.js, Python, MongoDB/PostgresSql/MySql, and scalable web development solutions.",
    url: `https://anasahmed-portfolio.vercel.app/v2`,
    images: [
      {
        url: "/v2.webp",
        width: 1200,
        height: 630,
        alt: "v2 hero preview",
      }
    ],
    siteName: "Anas Ahmed | Portfolio",
  },
};

function Page() {
    return (
        <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
            {/* <Navbar /> */}
            <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 not-light:bg-neutral-800/80">
                <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 not-light:bg-neutral-800/80">
                <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 not-light:bg-neutral-800/80">
                <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="px-4 flex flex-col items-center space-ys-3 py-10 md:py-20 text-center">
                <SplitText
                    text="Hi I am Anas Ahmed A Full Stack Developer"
                    mode="words"
                    className="relative self-center z-10 mx-auto max-w-4xl  text-2xl font-bold text-slate-700 md:text-4xl lg:text-6xl not-light:text-slate-300"
                    itemClassName="mx-[1px]"           // slight spacing
                    delayPerItem={0.03}
                    duration={0.3}
                    y={12}
                />
                <h1 className="sr-only relative mb-4 z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl not-light:text-slate-300">
                    Hi I am Anas Ahmed <br /> A Full Stack Developer
                </h1>
                <UiHero />
            </div>
            <div id="service" className="px-8">
                <h6 className="sr-only text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black not-light:text-white">
                    Packed with thousands of features
                </h6>
                <p className="sr-only">From Image generation to video generation, Everything AI has APIs for
                    literally everything. It can even create this website copy for you.</p>
                <Heading
                    title=" Packed with thousands of features"
                    text="From Image generation to video generation, Everything AI has APIs for
                    literally everything. It can even create this website copy for you."
                />
            </div>
            <FeaturesSectionDemo />
            <TimelineDemo />
            <FeaturedProjects crosses={false} />
            <Projects crosses={false} data={projects} />
            <GlowingEffectDemo />
            <Testimonial isCrosses={false}/>
        </div>
    );
}
export default Page;

function TimelineDemo() {
    const projects = [
        {
            title: 'Late 2023 - Present',
            content: (
                <EducationItem
                    logo="/giaic.png"
                    institution="Governor Sindh Initiative for GenAI, Web3, and Metaverse"
                    field="Computer Science"
                    date="Feb 2024 - Present"
                    grade="A"
                    activities="Milestones, Hackathons, Coding Quiz"
                    skills="Front-End Development, Back-End Development, AI Agents and AI SDKs, Langraph & LiteLLm."
                    whatILearn={[
                        {
                            title: 'Advanced TypeScript',
                            desc: 'Mastered TypeScript at an advanced level with practical implementations.',
                            Icon: Brain,
                            phase: "Quarter 1",
                            status: 'complete'
                        },
                        {
                            title: 'Next.js ( Frontend Development )',
                            desc: 'Comprehensive study of Next.js framework and modern web development.',
                            Icon: Layers,
                            phase: "Quarter 2",
                            status: 'complete'
                        },
                        {
                            title: 'Python for backend & Agentic AI',
                            desc: 'Currently focusing on Python for backend development, Agents & Ai Automation.',
                            Icon: BookOpen,
                            phase: "Quarter 3",
                            status: 'complete'
                        },
                        {
                            title: 'Agentic AI with OpenAI Agents SDK',
                            desc: 'Currently working on Agentic AI development using the OpenAI Agents SDK.',
                            Icon: Bot,
                            phase: "Quarter 3.1",
                            status: 'Ongoing'
                        },
                    ]}
                />

            ),
        },
        {
            title: '2024 - Present',
            content: (
                <EducationItem
                    heading="Hands-on Experience"
                    logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyV7eZimAn7TUfB7EKqjnrV32rmVuwfdEp5w&s"
                    field="Full-Stack Web Development, AI Agents, SEO Optimization & UI/UX"
                    date="Dec 2023 - present"
                    institution='Self Taught'
                    whatILearn={[
                        {
                            title: "JavaScript Mastery",
                            desc: "Enhanced project reliability by applying advanced TypeScript patterns, strict typing, and reusable interfaces in both frontend and backend code.",
                            Icon: Brain,
                            phase: "Phase 1",
                            status: "Achieved"
                        },
                        {
                            title: "UI/UX Implementation",
                            desc: "Designed responsive, accessible, and user-friendly interfaces using Tailwind CSS and Figma. Improved user flows and reduced bounce rates in test projects.",
                            Icon: Brain,
                            phase: "Phase 2",
                            status: "Achieved"
                        },
                        {
                            title: "SEO & Performance Optimization",
                            desc: "Implemented SSR and dynamic metadata for SEO-friendly pages. Optimized asset loading and reduced page load times by over 40% in personal projects.",
                            Icon: Brain,
                            phase: "Phase 3",
                            status: "Achieved"
                        },
                        {
                            title: "Full-Stack Web Development",
                            desc: "Built production-ready applications using Next.js, React, Node.js, MongoDB and Different Databases. Implemented secure authentication, API integrations, and real-time features.",
                            Icon: Server,
                            phase: "Phase 4",
                            status: "Achieved"
                        },
                        {
                            title: "CDN, client side, backend Caching",
                            desc: "Built production-ready applications using Next.js, Vercel Edge cdn, Node.js, and Different Databases and Basic knowledge of DevOps.",
                            Icon: Server,
                            phase: "Phase 5",
                            status: "Achieved"
                        },
                    ]}
                />
            ),
        },
        {
            title: '2021 - 2023',
            content: (
                <EducationItem
                    logo="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqoOAhs2vhlZ1goYhs6R8UOPnP2AgYdRfTI3j2lCTFxKQeUlZTXrqj_tUoxQd-rfbRlgTvE3iBYxMjhd6uFGHkKy497PAxeCt_dvDO1lkvbN-6Z2L7RoPYdLawQ_It9PjZZml5wPw=s680-w680-h510-rw"
                    institution="S.M. College Karachi"
                    field="Intermediate, Business/Commerce, General"
                    date="Jun 2021 - Nov 2023"
                    grade="B"
                    whatILearn={[
                        {
                            title: "Business Fundamentals",
                            desc: "Studied core subjects including Accounting, Economics, and Business Mathematics, developing strong analytical and problem-solving skills.",
                            Icon: Brain,
                            phase: "Year 1",
                            status: "Complete"
                        },
                        {
                            title: "Time Management & Self-Learning",
                            desc: "Balanced academic responsibilities with independent learning in technology, building discipline and adaptability.",
                            Icon: Brain,
                            phase: "Throughout",
                            status: "Achieved"
                        }
                    ]}
                />
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={projects} />
        </div>
    );
}
function GlowingEffectDemo() {
    return (
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
                area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                icon={<Box className="h-4 w-4 text-black not-light:text-neutral-400" />}
                title="Do things the right way"
                description="Running out of copy so I'll write anything."
            />

            <GridItem
                area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                icon={<Settings className="h-4 w-4 text-black not-light:text-neutral-400" />}
                title="The best AI code editor ever."
                description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
            />

            <GridItem
                area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                icon={<Lock className="h-4 w-4 text-black not-light:text-neutral-400" />}
                title="You should buy Aceternity UI Pro"
                description="It's the best money you'll ever spend"
            />

            <GridItem
                area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                icon={<Sparkles className="h-4 w-4 text-black not-light:text-neutral-400" />}
                title="This card is also built by Cursor"
                description="I'm not even kidding. Ask my mom if you don't believe me."
            />

            <GridItem
                area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                icon={<Search className="h-4 w-4 text-black not-light:text-neutral-400" />}
                title="Coming soon on Aceternity UI"
                description="I'm writing the code as I record this, no shit."
            />
        </ul>
    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 not-light:shadow-[0px_0px_27px_0px_#2D2D2D]">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-gray-600 p-2">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] not-light:text-white">
                                {title}
                            </h3>
                            <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] not-light:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
function FeaturesSectionDemo() {
    const features = [
        {
            title: "Built for developers",
            description:
                "Built for engineers, developers, dreamers, thinkers and doers.",
            icon: <Terminal />,
        },
        {
            title: "Ease of use",
            description:
                "It's as easy as using an Apple, and as expensive as buying one.",
            icon: <LampWallDown />,
        },
        {
            title: "Pricing like no other",
            description:
                "Our prices are best in the market. No cap, no lock, no credit card required.",
            icon: <DollarSign />,
        },
        {
            title: "100% Uptime guarantee",
            description: "We just cannot be taken down by anyone.",
            icon: <Cloud />,
        },
        {
            title: "Multi-tenant Architecture",
            description: "You can simply share passwords instead of buying new seats",
            icon: <Route />,
        },
        {
            title: "24/7 Customer Support",
            description:
                "We are available a 100% of the time. Atleast our AI Agents are.",
            icon: <HelpCircle />,
        },
        {
            title: "Money back guarantee",
            description:
                "If you donot like EveryAI, we will convince you to like us.",
            icon: <Settings2 />,
        },
        {
            title: "And everything else",
            description: "I just ran out of copy ideas. Accept my sincere apologies",
            icon: <Heart />,
        },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature not-light:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l not-light:border-neutral-800",
                index < 4 && "lg:border-b not-light:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 not-light:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 not-light:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 not-light:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 not-light:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 not-light:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 not-light:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};

