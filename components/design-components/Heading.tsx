'use client'
import TagLine from "./Tagline";
import { motion } from "framer-motion";

const Heading = ({ hPosition = 'center', className, title, text, tag }: { hPosition?: 'end' | 'center' | 'start'; className?: string, title: string, text?: string, tag?: string }) => {
  return (
    <motion.div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:tesxt-center`}
      // initial={{ opacity: 0, y: 30 }}
      // whileInView={{ opacity: 1, y: 0 }}
      style={{ textAlign: hPosition }}
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
          <TagLine className="mb-4 md:justify-center">{tag}</TagLine>
        </motion.div>
      )}

      {title && (
        <motion.h2
          className="text-3xl font-mono font-normal text-secondary-foreground md:text-4xl lg:text-5xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h2>
      )}

      {text && (
        <motion.p
          className="body-2 mt-4 text-n-4"
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
