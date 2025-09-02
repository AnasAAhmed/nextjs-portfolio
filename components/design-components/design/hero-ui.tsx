// 'use client'
import React from 'react'
// import { motion } from "motion/react";
import Link from 'next/link';
import Image from 'next/image';

const UiHero = () => {
    return (
        <>
           
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
        </>
    )
}

export default UiHero
