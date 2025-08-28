'use client'
import React from 'react'
import { motion } from "motion/react";
import Heading from '../Heading';
import Link from 'next/link';

const UiHero = () => {
    return (
        <>

            <Heading
                title=""
                text=" With AI, you can launch your website in hours, not days. Try my best
                    service in class, state of the art, cutting edge AI tools to get your website
                    up."
            />
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.3,
                    delay: 1,
                }}
                className="relative z-10 mts-8 flex max-w-lg flex-wrap items-center justify-center gap-4"
            >
                <Link title='Explore my work' prefetch href={'/projects'} className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 not-light:bg-white not-light:text-black not-light:hover:bg-gray-200">
                    Explore work
                </Link>
                <Link title='Explore My Servrices' prefetch href={'#service'} className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 not-light:border-gray-700 not-light:bg-black not-light:text-white not-light:hover:bg-gray-900" >
                    My Servrices
                </Link>
                <Link href='https://www.fiverr.com/users/anas_ahmed_24' target='_blank' className="w-60 transform rounded-lg bg-slate-800 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 not-light:bg-gray-200 not-light:text-black not-light:hover:bg-gray-400">
                    Contact me
                </Link>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.3,
                    delay: 1.2,
                }}
                className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md not-light:border-neutral-800 not-light:bg-neutral-900"
            >
                <div className="w-full overflow-hidden rounded-xl border border-gray-300 not-light:border-gray-700">
                    <img
                        src="https://assets.aceternity.com/pro/aceternity-landing.webp"
                        alt="Landing page preview"
                        className="aspect-[16/9] h-auto w-full object-cover"
                        height={1000}
                        width={1000}
                    />
                </div>
            </motion.div>
        </>
    )
}

export default UiHero
