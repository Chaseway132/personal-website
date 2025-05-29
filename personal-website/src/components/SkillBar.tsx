"use client";

import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number; // 0-100
  color?: string;
}

// Function to get color code based on color name
function getColorCode(color: string): string {
  const colorMap: Record<string, string> = {
    blue: '#3b82f6',
    green: '#10b981',
    red: '#ef4444',
    yellow: '#f59e0b',
    purple: '#8b5cf6',
    pink: '#ec4899',
    indigo: '#6366f1',
    teal: '#14b8a6',
    orange: '#f97316',
    cyan: '#06b6d4',
  };

  return colorMap[color] || '#3b82f6'; // Default to blue if color not found
}

export default function SkillBar({ name, level, color = "blue" }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-base font-medium text-gray-700 dark:text-white">{name}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-white">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          className={`h-2.5 rounded-full`}
          style={{ backgroundColor: getColorCode(color) }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
