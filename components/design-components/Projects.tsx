// 'use client'
// import React, { useState } from 'react'
import Section from './Section';
import { ExternalLink, Loader2 } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

import Link from 'next/link';
import Heading from './Heading';

export const extractUrl = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/;
    const match = text.match(urlRegex);
    return match ? match[0] : null;
};

type ProjectType = {
    title: string;
    description: string;
    image: string;
    url: string;
    category: string;
}[]

const Projects = ({ crosses = true, data }: { crosses?: boolean; data: ProjectType }) => {
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const handleNext = () => {
    //     setCurrentIndex((prev) => (prev + 1) % projects.length);
    // };

    // const handlePrev = () => {
    //     setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    // };

    return (
        <Section
            crosses={crosses}
            crossesOffset="lg:translate-y-[5.25rem]"
            id="projects"
        >
            <div className="container flex flex-col justify-center items-center max-lg:pb-8 pt-10 space-y-10 text-center">
                <h1 className="sr-only">Projects</h1>

                <Heading
                    modeForSplit='chars'
                    title="Projects"
                // text="Brainwave unlocks the potential of AI-powered applications"
                />
                <div className="container pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center mt-10 spasce-y-10 text-center">
                    {data.map((proj: any, index: number) => (
                        <div
                            key={index}
                            className="transition-transform duration-300 w-full ease-in-out flex flex-col justify-center items-center"
                        >
                            <div
                                className={`relatsive hovser:scale-105 w-full sm:aspect-[6/4] ssm:h-[1s65px] md:h-s[275px] hover:shadow-xl z-10 mx-auto transition-all border duration-300 ease-in-out rounded-lg overflow-hidden`}
                            >
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    title={proj.description}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h3
                                title={proj.title}
                                className="text-sm 2xl:text-lg line-clamp-1 max-sw-80 font-medium mt-4 mx-auto"
                            >
                                {proj.title}
                            </h3>
                            <p
                                title={proj.description}
                                className="text-[12px] 2xl:text-[16px] text-primary/70 line-clamp-2 cursor-pointer max-w-100 font-medium mb-4 mx-auto"
                            >
                                {proj.description}
                            </p>
                            <Link
                                prefetch={false}
                                href={'/projects?category=' + proj.category}
                                title={"See all "+proj.category+' Projects'}
                                className="text-sm uppercase rounded-2xl bg-secondary border px-2 text-primary/70 line-clamp-2 cursor-pointer max-w-100 font-medium mb-4 mx-auto"
                            >
                                {proj.category.replace(/-/g, " ")}
                            </Link>
                            {
                                proj.url &&
                                <div className=' bg-[conic-gradient(from_225deg,#FFC876,#79FFF7,#9F53FF,#FF98E2,#FFC876)] p-[0.1rem] rounded-md'>
                                    <Link target="_blank" className=' bg-primary-foreground px-2 py-1 flex rounded-md items-center gap-2' href={proj.url} title={proj.title + " Live Demo"} >
                                        Live Demo <ExternalLink />
                                    </Link>
                                </div>
                            }
                        </div>
                    ))
                    }

                </div>

                <div className="flex justify-center">
                    <Link
                        className="text-lg font-code font-bold tracking-wider uppercase border-white border-b-2"
                        href="/projects"
                        prefetch
                    >
                        See all (19) projects
                    </Link>
                </div>
            </div>
        </Section>

    )
}

export default Projects

