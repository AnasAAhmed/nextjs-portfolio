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
                <Carousel className="w-full max-w-6xl">
                    <CarouselContent className="flex items-center">
                        {data &&
                            data.map((proj, index) => (
                                <CarouselItem
                                    key={index}

                                    className="sm:!basis-auto flex-shrsink-0 w-[350px] sm:w-[600px] transition-transform duration-300 ease-in-out flex flex-col justify-center items-center"
                                >
                                    <div
                                        className={`bg-[conic-gradient(from_225deg,#FFC876,#79FFF7,#9F53FF,#FF98E2,#FFC876)] border p-[2px] relative mx-auto transition-all duration-300 ease-in-out rounded-lg overflow-hidden`}
                                    >
                                        <img
                                            src={proj.image}
                                            alt={proj.title}
                                            title={proj.description}
                                            className="border object-cover rounded-lg w-full h-[300px]"
                                        />
                                    </div>
                                    <h6
                                        title={proj.title}
                                        className="text-lg line-clamp-2 max-w-96 font-medium mt-4 mx-auto"
                                    >
                                        {proj.title}
                                    </h6>
                                    <p
                                        title={proj.description}
                                        className="text-sm text-primary/70 line-clamp-2 cursor-pointer max-w-100 font-medium mb-4 mx-auto"
                                    >
                                        {proj.description}
                                    </p>
                                    {proj.category && <p
                                        title={proj.category}
                                        className="text-sm rounded-2xl bg-secondary border px-2 text-primary/70 line-clamp-2 cursor-pointer max-w-100 font-medium mb-4 mx-auto"
                                    >
                                        {proj.category.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}
                                    </p>}
                                    {proj.url && (
                                        <div className="bg-[conic-gradient(from_225deg,#FFC876,#79FFF7,#9F53FF,#FF98E2,#FFC876)] p-[0.1rem] rounded-md">
                                            <Link
                                                target="_blank"
                                                className="bg-primary-foreground px-2 py-1 flex rounded-md items-center gap-2"
                                                href={proj.url}
                                                title={proj.title + ' Live Demo'}
                                            >
                                                Live Demo <ExternalLink />
                                            </Link>
                                        </div>
                                    )}
                                </CarouselItem>
                            ))}
                    </CarouselContent>

                    {/* <div className="cursor-pointer" onClick={handlePrev}> */}
                    <CarouselPrevious />
                    {/* </div> */}
                    {/* <div className="cursor-pointer" onClick={handleNext}> */}
                    <CarouselNext />
                    {/* </div> */}
                </Carousel>

                <div className="flex justify-center mt-10">
                    <Link
                        className="text-xs font-code font-bold tracking-wider uppercase border-b"
                        href="/projects"
                        prefetch
                    >
                        See all projects
                    </Link>
                </div>
            </div>
        </Section>

    )
}

export default Projects

