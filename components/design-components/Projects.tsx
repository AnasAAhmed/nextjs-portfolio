// 'use client'
// import React, { useState } from 'react'
import Section from './Section';
import { ExternalLink } from 'lucide-react';

import Link from 'next/link';
import Heading from './Heading';
import SplitText from '../ui/split-text';
import PRojectCard from './design/project-card';

export const extractUrl = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/;
    const match = text.match(urlRegex);
    return match ? match[0] : null;
};

export type ProjectType = {
    title: string;
    description: string;
    image: string;
    videoUrl?: string;
    url: string;
    category: string;
}

const Projects = ({ crosses = true, data }: { crosses?: boolean; data: ProjectType[] }) => {
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
                       <PRojectCard key={index} proj={proj} />
                    ))
                    }

                </div>

                <div className="flex justify-center">
                    <Link
                        className="text-lg font-code font-bold tracking-wider uppercase border-white border-b-2"
                        href="/projects"
                        prefetch
                    >
                        <SplitText
                            text="See all (19) projects"
                        />
                    </Link>
                </div>
            </div>
        </Section>

    )
}

export default Projects

