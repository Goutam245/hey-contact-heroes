import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const Reveal = ({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) => {
  const MotionTag = motion(Tag as any);
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
};

export const Stagger = ({
  children,
  className,
  delay = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: delay } },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div className={className} variants={variants}>
    {children}
  </motion.div>
);