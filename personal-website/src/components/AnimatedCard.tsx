"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  whileHover?: boolean;
}

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  whileHover = true
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={whileHover ? { y: -5, transition: { duration: 0.2 } } : undefined}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
