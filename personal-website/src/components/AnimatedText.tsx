"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export default function AnimatedText({ text, className = "", once = true }: AnimatedTextProps) {
  // Split the text into an array of letters
  const words = text.split(" ");

  // Variants for the container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      <div className="w-full flex flex-wrap items-center justify-center">
        {words.map((word, index) => (
          <motion.span
            className="inline-block mr-2 mt-2"
            variants={child}
            key={index}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
