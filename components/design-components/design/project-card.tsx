'use client'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { ProjectType } from '../Projects'

const PRojectCard = ({ proj }: { proj: ProjectType }) => {
    const [play, setPlay] = useState(false);
    return (
        <div
            className="transition-transform duration-300 w-full ease-in-out flex flex-col justify-center items-center"
        >
            <div
                className="relative w-full sm: aspect-[6/4] hover:shadow-xl z-10 mx-auto transition-all border duration-300 ease-in-out rounded-lg overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-white bg-center bg-cover scale-110 blur-2xl"
                    style={{ backgroundImage: `url(${proj.image})` }}
                />

                {proj.videoUrl ? (
                    play ? (
                        <video
                            src={proj.videoUrl}
                            poster={proj.image}
                            controls
                            autoPlay
                            className="relative z-10 object-contain w-full h-full"
                        />
                    ) : (
                        <div
                            className="relative z-10 w-full h-full cursor-pointer flex items-center justify-center"
                            onClick={() => setPlay(true)}
                        >
                            <img
                                src={proj.image}
                                alt={proj.title}
                                className="absolute inset-0 w-full h-full object-contain"
                            />
                            {/* Play button overlay */}
                            <div className="bg-black/50 rounded-full p-4 z-20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                    stroke="none"
                                    className="w-10 h-10"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    )
                ) : (
                    <img
                        src={proj.image}
                        alt={proj.title}
                        title={proj.description}
                        className="relative z-10 object-contain w-full h-full"
                    />
                )}
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
                title={"See all " + proj.category + ' Projects'}
                className="text-sm uppercase rounded-2xl bg-secondary border px-2 text-primary/70 line-clamp-2 cursor-pointer max-w-100 font-medium mb-4 mx-auto"
            >
                {proj.category.replace(/-/g, " ")}
            </Link>
            {
                proj.url &&
                <div className=' bg-[conic-gradient(from_225deg,#FFC876,#79FFF7,#9F53FF,#FF98E2,#FFC876)] p-[0.1rem] rounded-md'>
                    <Link target="_blank" className=' bg-primary-foreground px-2 py-1 flex rounded-md items-center gap-2' href={proj.url} title={proj.title + " Live Demo"} >
                        {proj.url.length < 60 ? 'Live Demo' : 'Watch on LinkedIn'} {proj.videoUrl && '(Login Required)'} <ExternalLink />
                    </Link>
                </div>
            }
        </div>
    )
}

export default PRojectCard
