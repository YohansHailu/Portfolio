import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  AnimatePresence,
} from 'framer-motion';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const HeroComponent = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const titles = [
    {
      title: 'Software Engineer',
      id: 1,
    },

    {
      title: 'Frontend Developer',
      id: 2,
    },
    {
      title: 'Software Engineer',
      id: 101,
    },
    {
      title: 'Backend Developer',
      id: 3,
    },
    {
      title: 'Software Engineer',
      id: 111,
    },
    {
      title: 'Mobile Developer',
      id: 4,
    },
    {
      title: 'Software Engineer',
      id: 1110,
    },
  ];

  const [selectedTitleIndex, setSelectedTitleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSelectedTitleIndex((prev) => (prev + 1) % 4);
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, [selectedTitleIndex]);



  return (
    <motion.section
      transition={{
        duration: 1.2,
      }}
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: '0px',
        scale: 1.1,
        opacity: 1,
      }}
      ref={ref}
      className="px-2 w-3/4 lg:px-10 my-5 lg:my-10 py-5 lg:py-12 relative min-h-[800px]  overflow-hidden gap-y-2 sm:gap-y-5 md:gap-y-10 sm:pb-16 lg:pb-20 xl:pb-24"
      data-scroll-container
      id="about"
    >

      <div className="fadeup-enter-done  transition delay-100 md:py-5 text-lg sm:text-xl text-accent flex items-center">
        <h1 className="font-mono ">Hi</h1>
        <motion.span className="animate-wiggle  text-4xl self-start pb-5">
          👋
        </motion.span>
        <h1 className="font-mono ">, I&apos;m</h1>
      </div>
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-text-lightest_slate py-3">
        <div className="fadeup-enter-done transition delay-200">
          <h2 className="text-xl md:text-4xl lg:text-6xl font-bold big-heading   ">
            Yohans Kasaw
          </h2>
        </div>
      </div>
      <div
        data-scroll-section
        className="fadeup-enter-done transition delay-300 min-h-[100px]"
      >
        <AnimatePresence
          initial={false}
          mode="wait"
          key={1}
          onExitComplete={() => null}
        >
          {titles.map((title, index) => {
            return index === selectedTitleIndex ? (
              <motion.h3
                key={title.id}
                transition={{
                  duration: 1.2,
                  type: 'spring',
                  damping: 20,
                }}
                initial={{
                  y: '-50px',
                  opacity: 0,
                  scaleY: 0.5,
                }}
                animate={{
                  y: '0px',
                  scaleY: 1.1,
                  opacity: 1,
                }}
                exit={{
                  y: '40px',
                  scaleY: 0.5,
                  transition: {
                    duration: 0.6,
                  },
                  opacity: 0,
                }}
                className="text-4xl md:text-5xl font-bold big-heading text-light_slate"
              >
                {title.title}
              </motion.h3>
            ) : undefined;
          })}
        </AnimatePresence>
      </div>
      <div className="fadeup-enter-done transition delay-400 my-5 w-full text-xs lg:text-base lg:w-3/5 tracking-wide leading-6">
        <p className="text-slate text-xs sm:text-sm">
          Hey there! I'm a software developer with a passion for problem-solving and learning. From web development to mobile and backend, I love diving into new technologies. I thrive in fast-paced environments where quality is key. Let's work together to create something amazing!
        </p>
      </div>
      <div className="relative inline-flex group fadeup-enter-done transition duration-500 my-10">
        <motion.div
          initial={{}}
          className="absolute -inset-0.5 bg-gradient-to-r from-accent to-light_navy rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
        ></motion.div>
        <a
          className="relative email-link text-accent hover:text-navy  bg-navy border  rounded-sm lg:rounded-lg px-4 lg:px-8 py-2 lg:py-3 leading-4 cursor-pointer hover:bg-accent/75"
          href="mailto:yohanshailukasaw@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Hire Me &rarr;
        </a>
      </div>
    </motion.section>
  );
};
export default HeroComponent;
