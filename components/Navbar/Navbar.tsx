import React, { useEffect, useRef, useState } from 'react';
import {
  useScroll,
  useSpring,
  motion,
  useCycle,
  AnimatePresence,
  useTransform,
} from 'framer-motion';
import { useDimensions } from '../../hooks/useDimensions';
import { Navigation } from './Navigation';
import { MenuToggle } from './MenuToggle';
import clsx from 'clsx';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    duration: 10,
  });

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const rotateZAngle = useTransform(scrollYProgress, [0, 1], [0.001, 360]);

  const sections: any[] = [
    { id: "about", },
    { id: "experience", },
    { id: "contact" }
  ];

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const element: any = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          console.log(section.id, rect.top, rect.bottom, window.innerHeight)
          if (rect.top >= 0 && rect.bottom >= window.innerHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        height: 'var(--nav-height)',
        backgroundColor: 'rgba(10, 25, 47, 0.85)',
        backdropFilter: 'blur(10px)',
        transition: 'var(--transition)',
      }}
      className="w-full filter-none !pointer-events-auto !select-auto z-20 fixed top-0 font-mono !text-xs"
    >
      <div className="w-full">
        <motion.div className="bg-accent h-[2px]" style={{ scaleX }} />
      </div>
      <header className="w-full py-4 sm:py-2 ">
        <div className="flex px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="w-full flex  items-center justify-between ">
            <div className="shrink-0">
              <a href="#about" title="logo" className="flex">
                <motion.img
                  style={{ rotateZ: rotateZAngle }}
                  className="w-auto h-10 md:h-16 "
                  src="/images/letter-n-2-logo.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="hidden md:flex items-center gap-x-10 font-mono">
              <nav className="hidden ml-10 mr-auto space-x-5 lg:ml-20 lg:space-x-7 md:flex md:items-center md:justify-start">
                <motion.a
                  initial={{ y: '-20px' }}
                  whileInView={{ y: 0 }}
                  transition={{
                    type: 'spring',
                    // stiffness: 100
                  }}
                  href="#about"
                  title=""
                  className={
                    clsx(
                      " font-normal text-gray-400 transition-all duration-200 hover:text-accent",
                      activeSection == "#about" && "text-accent"
                    )
                  }
                >
                  About{' '}
                </motion.a>
                <motion.a
                  initial={{ y: '-20px' }}
                  whileInView={{ y: 0 }}
                  transition={{
                    type: 'spring',
                    delay: 0.1,
                  }}
                  href="#experience"
                  title=""
                  className={
                    clsx(
                      " font-normal text-gray-400 transition-all duration-200 hover:text-accent",
                      activeSection == "#experience" && "text-accent"
                    )
                  }
                >
                  Experience
                </motion.a>

                <motion.a
                  initial={{ y: '-20px' }}
                  whileInView={{ y: 0 }}
                  transition={{
                    type: 'spring',
                  }}
                  href="#contact"
                  title=""
                  className={
                    clsx(
                      " font-normal text-gray-400 transition-all duration-200 hover:text-accent",
                      activeSection == "#contact" && "text-accent"
                    )
                  }                  >
                  Contact{' '}
                </motion.a>
              </nav>

              <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
                <div className="absolute transition-all duration-200 rounded-sm -inset-px  group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <motion.a
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  href="https://drive.google.com/file/d/1pTnZrPGDFdPL_0ERhcPc16ulma_JkV_l/view?usp=sharing"
                  rel="noreferrer"
                  title="resume"
                  target="_blank"
                  className="relative inline-flex items-center justify-center px-6 py-2  font-normal bg-transparent border border-accent hover:bg-accent/5 hover:bg-opacity-5 rounded-lg text-accent"
                  role="button"
                >
                  Resume
                </motion.a>
              </div>
            </div>

            <div className="flex md:hidden">
              <motion.nav
                className="flex flex-col items-end !text-lightest_slate relative"
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                custom={height}
                ref={containerRef}
              >
                <MenuToggle toggle={() => toggleOpen()} />
                {
                  // isOpen && (
                  <Navigation />
                  // )
                }
              </motion.nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
