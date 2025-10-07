
import EducationItem from "@/components/design-components/design/TimelineContent";
import FeaturedProjects from "@/components/design-components/Features";
import { GlowingEffectDemo } from "@/components/design-components/GlowingEffectDemo";
import Heading from "@/components/design-components/Heading";
import Projects from "@/components/design-components/Projects";
import Skills from "@/components/design-components/Skills";
import Testimonial from "@/components/design-components/Testimonial";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SplitText2 } from "@/components/ui/split-text-ssr";
import { Timeline } from "@/components/ui/timeline";
import { projects } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Cloud, Box, Lock, Search, Settings, Sparkles, DollarSign, Heart, HelpCircle, LampWallDown, Route, Settings2, Terminal, Layers, BookOpen, Bot, Brain, Server } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
        siteName: "Anas Ahmed",
    },
};

function Page() {
    return (
        <div className="relative mx-auto my-10 px-4 flex max-w-7xl flex-col items-center justify-center">
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
            <div className="flex flex-col items-center space-ys-3 py-10 md:py-20 text-center">
                {/* <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold text-slate-700 md:text-5xl lg:text-7xl not-light:text-slate-300"> */}
                <SplitText2
                    text="Hi I am Anas Ahmed A Full Stack Developer"
                    mode="words"
                    className="relative z-10 mx-auto max-w-5xl text-center text-3xl font-bold text-slate-700 md:text-5xl lg:text-7xl not-light:text-slate-300"
                    // itemClassName="mx-[1px]"
                    delayPerItem={0.03}
                    duration={0.3}
                    y={12}
                />
                {/* </h1> */}
                <p
                    className="p-fade relative z-10 mx-auto max-w-2xl py-4 text-center text-sm sm:text-lg font-normal text-neutral-600 not-light:text-neutral-400"
                >
                    I craft responsive, high-performance web applications using Next.js, React.js, and Node.js.
                    Currently expanding my expertise in <strong>Agentic AI</strong> and Web&nbsp;3.0.
                </p>
                <div
                    className="btns-fade relative z-10 mt-2 flex max-w-lg flex-wrap items-center justify-center gap-4"
                >
                    <Link title='Explore my work' prefetch href={'/projects'} className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 not-light:bg-white not-light:text-black not-light:hover:bg-gray-200">
                        Explore work
                    </Link>
                    <Link title='Contact me at fiverr' href='https://www.fiverr.com/users/anas_ahmed_24' target='_blank' className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 not-light:border-gray-700 not-light:bg-black not-light:text-white not-light:hover:bg-gray-900" >
                        Contact me
                    </Link>
                    <Link title='Explore My Servrices' prefetch href={'#service'} className="max-sm:hidden w-60 transform rounded-lg bg-slate-800 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 not-light:bg-gray-200 not-light:text-black not-light:hover:bg-gray-400">
                        My Servrices
                    </Link>
                </div>
                <div
                    className="hero-img-fadeUp relative z-10 mt-10 sm:mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-2 sm:p-4 shadow-md not-light:border-neutral-800 not-light:bg-neutral-900"
                >
                    <div className=" w-full overflow-hidden rounded-xl border border-gray-300 not-light:border-gray-700">
                        <Image
                            src="/code2.webp"
                            alt="Landing page preview"
                            className="aspect-[4/4] sm:aspect-[16/9] w-full max-h-[46rem] object-cover"
                            height={1300}
                            width={1300}
                        />
                    </div>
                </div>
            </div>
            <Projects crosses={false} data={projects.slice(10, 16)} />
            <FeaturedProjects crosses={false} />
            <Skills crosses={false}/>
            <FeaturesSectionDemo />
            <TimelineDemo />
            <GlowingEffectDemo />
            <Testimonial isCrosses={false} />
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

function FeaturesSectionDemo() {
    const features = [
        {
            title: "Frontend Development",
            description: "I build responsive, visually appealing, and high- performing user interfaces using modern technologies like HTML, CSS, JavaScript, React, and Next.js.",
            icon: <Terminal />,
        },
        {
            title: "Full-Stack Development",
            description:
                "From database design to deployment, I create complete web applications with both robust backend functionality and sleek frontend experiences.",
            icon: <LampWallDown />,
        },
        {
            title: "API Integration, Optimization, Fast Speed and Caching",
            description: "I integrate and optimize APIs for maximum performance, ensuring fast data fetching and implementing caching strategies to reduce load times.",
            icon: <DollarSign />,
        },
        {
            title: "AI SDK's and Chatbot Integration",
            description: "I connect AI SDKs and chatbots to your platform, enabling automated responses, enhanced customer service.",
            icon: <Cloud />,
        },
        {
            title: "AI Agents & Automation with Litellm & langraph",
            description: "I build AI agents and automation workflows using Litellm and LangGraph to streamline processes.",
            icon: <Route />,
        },
        {
            title: "CDN-Caching and Hosting Guide",
            description: "I provide guidance on setting up CDN caching and choosing the right hosting solutions.",
            icon: <HelpCircle />,
        },
        {
            title: "Money back guarantee",
            description:
                "If you donot like Services, we will convince you to like us.",
            icon: <Settings2 />,
        },
        {
            title: "And everything else",
            description: "I just ran out of copy ideas. Accept my sincere apologies",
            icon: <Heart />,
        },
    ];
    return (
        <>
            <div id="service" className="px-8 mt-10">
                <h6 className="sr-only text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black not-light:text-white">
                    Packed with multiple features
                </h6>
                <p className="sr-only">From frontend to backend development, Everything with AI development and Integration.</p>
                <Heading
                    title=" Packed with multiple features"
                    text="From full stack development, Caching, AI to Hosting."
                />
            </div>
            <div className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auato">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </>
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

