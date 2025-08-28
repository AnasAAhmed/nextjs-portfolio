'use client'
import SplitText from "../ui/split-text";
import TagLine from "./Tagline";
import { motion } from "framer-motion";

const Heading = (
  { gap = 8,
    hPosition = 'center',
    modeForSplit = 'words',
    hclassName = 'text-3xl font-normal fonts-semibold md:text-4xl lg:text-5xl',
    pclassName,
    title,
    text,
    tag }:
    {
      gap?: number;
      hPosition?: 'end' | 'center' | 'start';
      modeForSplit?: 'words' | 'chars';
      hclassName?: string,
      pclassName?: string,
      title: string,
      text?: string,
      tag?: string
    }) => {
  return (
    <motion.div
      className='max-w-[50rem] flex flex-col mx-auto mb-8 lg:mb-16'
      style={{ textAlign: hPosition, gap: gap }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TagLine className="md:justify-center">{tag}</TagLine>
        </motion.div>
      )}

      {title && (
        <SplitText
          text={title}
          mode={modeForSplit}
          className={hclassName}
          itemClassName="mx-[1px]"           // slight spacing
          delayPerItem={0.03}
          duration={0.3}
          y={12}
        />
      )}

      {text && (
        <motion.p
          className={pclassName}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Heading;
