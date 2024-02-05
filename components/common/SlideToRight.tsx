import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
type Props = {
  children: ReactNode;
  from: string;
};

const SlideWrapper = (props: Props) => {
  const xDir = props.from === 'right' ? '100%' : '-100%';
  return (
    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, x: xDir, y: -20 }}
      whileInView={{ opacity: 1, x: '0%', y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default SlideWrapper;
