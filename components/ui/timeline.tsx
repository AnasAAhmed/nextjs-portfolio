"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Heading from "../design-components/Heading";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-background font-sans"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto max-lg:pt-20 px-s4 md:px-8 lg:px-10">
        <Heading hPosition="center" title="Changelog from my journey" text="I&apos;ve been working on Software Development for the past 1.8 years. Here&apos;s
          a timeline of my journey."/>
      </div>

      <div ref={ref} className="relative max-ws-7xl mx-sauto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 lg:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-20 items-center top-40 self-start max-w-xs md:w-lg">
              <div className="h-10 absolute left-0s lg:left-3 w-10 rounded-full bg-white not-light:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 not-light:bg-neutral-800 border border-neutral-300 not-light:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden lg:block text-xl lg:pl-20 md:text-3xl font-bold text-neutral-500 not-light:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-3 pzr-4 lg:pl-4 w-full">
              <h3 className="lg:hidden pl-10 block text-2xl mb-4 text-left font-bold text-neutral-500 not-light:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute lg:left-8 lesft-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 not-light:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
