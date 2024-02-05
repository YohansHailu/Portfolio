import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';

const variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    display: 'flex',
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    display: 'none',
  },
};

const navigationItems = [
  {
    id: 1,
    title: 'About',
    link: '#about',
  },
  {
    id: 2,
    title: 'Experience',
    link: '#experience',
  },
  {
    id: 3,
    title: 'Projects',
    link: '#projects',
  },
  {
    id: 4,
    title: 'Contact',
    link: '#contact',
  },
];

export const Navigation = () => (
  <motion.ul
    style={{
      boxShadow: '0 10px 30px -15px var(--navy-shadow)',
      borderRadius: 'var(--border-radius)',
      transition: 'var(--transition)',
    }}
    variants={variants}
    className="min-w-[200px] flex flex-col p-5 gap-y-3 bg-light_navy rounded-xl absolute top-5 right-0"
  >
    {navigationItems.map((navItem) => (
      <MenuItem navItem={navItem} key={navItem.id} />
    ))}
    <a
      href="https://drive.google.com/file/d/1lzKJS8LSIAbiHUZlmm6VUa_whFL2npuR/view?usp=sharing"
      rel="noreferrer"
      title="resume"
      target="_blank"
      className="relative inline-flex items-center justify-center px-5 py-1.5  font-normal bg-transparent border border-accent hover:bg-accent/5 hover:bg-opacity-5 rounded-lg text-accent"
      role="button"
    >
      Resume
    </a>
  </motion.ul>
);
