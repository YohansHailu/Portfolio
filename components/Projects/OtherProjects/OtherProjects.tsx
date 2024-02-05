import React from 'react';
import CustomSVGIcon from '../../../utils/getSVG';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

const OtherProjects = (props: Props) => {
  const otherProjects = [
    {
      id: '1',
      title: 'Responsible for API design and development of the Services',
      site_link: 'https://hakimhubweb.netlify.app/',
      repo_link: '#',
      descriptions: [
        'HakimHub is a platform that provides information about healthcare and hospitals. With a few clicks, HakimHub also allows you to filter doctors by their respective subspeciality, experience, and location.',
      ],
      techs: [
        'Typescript',
        'Nodejs',
        'Nestjs',
        'Git',
        'MongoDB',
        'Docker',
        'GCP',
      ],
    },
    {
      id: '2',
      title: 'Building a beautiful, fast, user friendly webpages',
      site_link: 'https://arbet-frontend.vercel.app/games/dice/',
      repo_link: '',
      descriptions: [
        'It is a web application for the company called Alphabet Trading, which is a coffee export firm based in its place of origin.',
      ],
      techs: [
        'ReactJS',
        'NextJS',
        'Apollo Client',
        'Git',
        'SEO',
        'Agile',
        'Scrum',
      ],
    },
    {
      id: '3',
      title: 'Building a 100% decentralized ecosystem(DeFi)',
      site_link: 'https://nft-proj.vercel.app/',
      repo_link: '',
      descriptions: [
        'Convex is building a 100% decentralized ecosystem that bridges the knowledge gap between DeFi protocols and makes DeFi easy by bringing the best protocols together in one place.',
      ],
      techs: [
        'ReactJS',
        'NextJS',
        'Tailwindcss',
        'Typescript',
        'Web3JS',
        'Blockchain',
      ],
    },
    {
      id: '4',
      title: 'Zemastore (Senior-year-project)',
      site_link: 'https://github.com/ZemaStore/ZemaStore',
      repo_link: 'https://github.com/ZemaStore/ZemaStore',
      descriptions: [
        'Built a tool to enhances artists’ revenue for their work and handles copyright issues.',
      ],
      techs: ['ReactJS', 'NodeJS', 'Flask', 'AES', 'Encryption', 'Git'],
    },
    {
      id: '6',
      title: 'Builting a Co-parenting App',
      site_link: '',
      repo_link: '',
      descriptions: [
        'Built a system that does provide all the resources required to facilitate co-parenting. Using React, Next.js, Node.js and AWS lambda, I helped construct both the frontend and the backend components.',
      ],
      techs: [
        'ReactJS',
        'NextJS',
        'NodeJS',
        'AWS lambda',
        'Serverless Framework',
        'Bitbucket',
      ],
    },
    {
      id: '7',
      title: "Staking Game (E-commerce site's)",
      site_link: 'https://staking-game-frontend.vercel.app/dashboard',
      repo_link: 'https://staking-game-frontend.vercel.app/dashboard',
      descriptions: [
        'Staking Game is a platform that provides information about healthcare and hospitals. With a few clicks, HakimHub also allows you to filter doctors by their respective subspeciality, experience, and location.',
      ],
      techs: [
        'ReactJS',
        'NextJS',
        'NodeJS',
        'Web3JS',
        'Blockchain',
        'Typescript',
      ],
    },
    {
      id: '8',
      title: "Bot shop (E-commerce site's)",
      site_link: 'https://bot-shop-site.vercel.app/',
      repo_link: 'https://bot-shop-site.vercel.app/',
      descriptions: [
        'Bot shop is an e-commerce site that sells different types of bots. It is a full-stack application that is built with React, Next.js, Node.js, and MongoDB.',
      ],
      techs: ['ReactJS', 'NextJS', 'NodeJS', 'MongoDB', 'Typescript', 'Git'],
    },
    {
      id: '9',
      title: "SmartChain Poker (Blockchain's)",
      site_link: 'https://nftminting-seven.vercel.app/',
      repo_link: 'https://nftminting-seven.vercel.app/',
      descriptions: [
        'SmartChain Poker is a decentralized application that allows users to play poker with their friends. It is built with React, Next.js, Node.js, and Solidity.',
      ],
      techs: [
        'ReactJS',
        'NextJS',
        'NodeJS',
        'Solidity',
        'Blockchain',
        'Typescript',
      ],
    },
    {
      id: '10',
      title: "NFT-FI (Blockchain's)",
      site_link: 'https://loan-shark-nft-fi.vercel.app/',
      repo_link: 'https://loan-shark-nft-fi.vercel.app/',
      descriptions: [
        'NFT-FI is a decentralized application that allows users to borrow money against their NFTs. It is built with React, Next.js, Node.js, and Solidity.',
      ],
      techs: [
        'ReactJS',
        'NextJS',
        'NodeJS',
        'Solidity',
        'Blockchain',
        'Typescript',
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const getScrollSpeed = (index: number) => {
    switch (index) {
      case 0:
        return 0.5;
      case 1:
        return 0;
      case 2:
        return -0.5;
      case 3:
        return 0.5;
      case 4:
        return 0;
      case 5:
        return -0.5;
      default:
        return 0.5;
    }
  };

  const [size, setSize] = React.useState(6);
  const [projects, setProjects] = React.useState(otherProjects.slice(0, size));

  function handleMore(): void {
    const nextSize = Math.min(otherProjects.length, size + 6);
    setProjects([...projects, ...otherProjects.slice(size, nextSize)]);
    setSize(nextSize);
  }

  return (
    <section className="w-11/12 lg:w-3/4 px-4 flex flex-col items-center gap-y-2">
      <h2
        className="font-semibold text-lightest_slate text-2xl"
        style={{
          visibility: 'visible',
          opacity: 1,
          transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
          transition:
            'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
        }}
      >
        Other Noteworthy Projects
      </h2>

      <Link
        className="inline-link archive-link font-mono text-accent text-sm"
        href="/archive"
        data-sr-id="8"
        style={{
          visibility: 'visible',
          opacity: 1,
          transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
          transition:
            'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
        }}
      >
        view the archive
      </Link>

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative my-2 lg:my-4"
        data-scroll-section
      >
        {projects.map((project, index) => {
          return (
            <motion.li
              key={`${project.id}-${index}`}
              data-scroll
              variants={listItem}
              whileInView={'show'}
              initial="hidden"
              transition={{
                duration: 0.5,
              }}
              className="relative hover:transform translate-x-5 cursor-pointer min-h-full w-full "
              style={{
                transition:
                  'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
                visibility: 'visible',
                opacity: 1,
                transform:
                  'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
              }}
              data-sr-id="9"
            >
              <div
                style={{
                  boxShadow: '0 10px 30px -15px var(--navy-shadow)',
                  borderRadius: 'var(--border-radius)',
                  transition: 'var(--transition)',
                }}
                className="project-inner flex flex-col items-start relative overflow-auto  px-8 py-4 h-full bg-light_navy hover:-translate-y-4"
              >
                <header className="flex-1">
                  <div className="project-top flex justify-between items-center my-1 mb-4">
                    <div className="folder">
                      <a
                        href={project.repo_link}
                        className="external"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CustomSVGIcon
                          className="text-accent !w-8 !h-8"
                          name="folder"
                        />
                      </a>
                    </div>
                    <div className="project-links ">
                      <a
                        href={project.repo_link}
                        aria-label="External Link"
                        className="external"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CustomSVGIcon
                          name="external-link"
                          className="!w-6 !h-6"
                        />
                      </a>
                    </div>
                  </div>
                  <h3 className="project-title text-lightest_slate text-lg font-semibold leading-6 hover:text-accent hover:font-bold">
                    <a
                      href={project.site_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="project-description text-xs my-2">
                    {project.descriptions?.map((desc, index) => {
                      return <p key={desc}>{desc}</p>;
                    })}
                  </div>
                </header>
                <footer className="self-end justify-self-end">
                  <ul className="project-tech-list flex items-center font-mono !text-xs gap-x-3 my-5 flex-wrap">
                    {project.techs.map((tech, index) => {
                      return <li key={tech}>{tech}</li>;
                    })}
                  </ul>
                </footer>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
      <button
        onClick={handleMore}
        className="email-link text-accent bg-transparent border border-accent px-4 py-3 leading-4 cursor-pointer hover:bg-accent/5"
      >
        Show More {projects.length}/{otherProjects.length}
      </button>
    </section>
  );
};

export default OtherProjects;
