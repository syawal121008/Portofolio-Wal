import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable scroll-reveal wrapper.
 * Fades + slides content into view when it enters the viewport.
 *
 * props:
 *  - direction: 'up' | 'down' | 'left' | 'right' (default 'up')
 *  - delay: seconds before the animation starts
 *  - distance: px offset for the entrance slide
 *  - once: only animate the first time it enters (default true)
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  distance = 40,
  once = true,
  style,
  className,
}) {
  const offsets = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const initial = { opacity: 0, ...offsets[direction] };

  return (
    <motion.div
      className={className}
      style={style}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Container that staggers the entrance of its direct <RevealItem> children.
 */
export function RevealGroup({ children, stagger = 0.12, style, className }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, distance = 30, style, className }) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
