import type { ReactNode } from "react";
import { motion } from "motion/react";

const sectionVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: "easeOut" as const, staggerChildren: 0.1 },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.56, ease: "easeOut" as const } },
};

export function ScrollReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="motion-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      {children}
    </motion.div>
  );
}
