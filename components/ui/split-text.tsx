"use client";
import { motion } from "framer-motion";


interface SplitTextProps {
  text: string;
  mode?:  "words" | "chars";          // "words" | "chars"
  className?: string;        // wrapper styles
  itemClassName?: string;    // each word/char styles
  once?: boolean;            // animate only once
  amount?: number;           // viewport amount
  duration?: number;
  delayPerItem?: number;     // stagger
  y?: number;                // slide distance
}

export default function SplitText({
  text,
  mode = "words",
  className = "",
  itemClassName = "",
  once = false,
  amount = 0.3,
  duration = 0.3,
  delayPerItem = 0.04,
  y = 12,
}: SplitTextProps) {
  // split while preserving spaces (important for layout)
  const pieces =
    mode === "words"
      ? text.split(/(\s+)/) // includes spaces as separate items
      : [...text];          // characters (includes spaces too)

  return (
    <motion.span
      className={`inline-block ${className}`}
      aria-label={text}
      role="text"
    >
      {pieces.map((piece, i) => {
        const isSpace = piece === " " || /^\s+$/.test(piece);
        if (isSpace) {
          // real space node so selection behaves naturally
          return <span key={`s-${i}`}>{piece}</span>;
        }

        return (
          <motion.span
            key={i}
            className={`inline-block will-change-transform ${itemClassName}`}
            initial={{ y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once, amount }}
            transition={{
              duration,
              ease: "easeOut",
              delay: i * delayPerItem,
            }}
          >
            {/* optional mask for a crisper "reveal" */}
            <span className="inline-bloack overflow-hidden align-baseline">
              <span className="inline-block">{piece}</span>
            </span>
          </motion.span>
        );
      })}
    </motion.span>
  );
}
