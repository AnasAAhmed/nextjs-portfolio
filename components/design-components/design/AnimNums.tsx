"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export const Counter = ({ width = 22, from = 0, to, duration = 2 }: { width?: number; from?: number; to: number; duration?: number }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
    });
    return controls.stop; // cleanup on unmount
  }, [to, count, duration]);

  return <motion.span style={{ width: width }} className="inline-block">{rounded}</motion.span>;
};
