'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MagicCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function MagicCard({ children, className = '', hover = true, glow = false }: MagicCardProps) {
  return (
    <motion.div
      className={`magic-card p-6 ${glow ? 'magic-glow' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { scale: 1.02, boxShadow: '0 0 30px rgba(167, 139, 250, 0.5)' } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

