'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

type SkillsInfo = {
    id: string;
    title: string;
    icon: string;
    width: number;
    height: number;
}[]

const SkillsCircle = ({ skills }: { skills: SkillsInfo }) => {
    return (
        <ul>
            {skills.map((app, index) => (
                <li
                    key={app.id}
                    className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom"
                    style={{rotate:`${index * 22.5}deg`}}
                >
                    <motion.div
                        title={app.title}
                        className="relative cursor-pointer -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl"
                        initial={{ rotate: 0 }}
                        whileInView={{ rotate: -(index * 22.5) }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: (skills.length - 1 - index) * 0.05,
                        }}
                    // style={{rotate:`${-(index * 22.5)}deg`}}

                    >
                        <Image
                            className="m-auto"
                            width={app.width}
                            height={app.height}
                            alt={app.title}
                            src={app.icon}
                        />
                    </motion.div>
                </li>
            ))}
        </ul>
    )
}

export default SkillsCircle
