import clsx from 'clsx';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer',
      location: 'Palo Alto, California, USA',
      company: 'Africa to Silicon Valley ',
      from: 'Dec 2022',
      to: 'Present',
      descriptions: [
        " Developed a web application using AWS S3, Spring Boot, MongoDB,React/Redux, and Azure Blob Storage to provide real-time data to 3.8K",
        " Utilized Scrum methodology, increasing project delivery date adherence by 30%",
        " Organized Java Bootcamp for back-end development using Spring Boot tech stack, resulting in 4+ industry projects built by students",
        " Delivered 10+ lectures on Data Structures and Algorithms, helping students solve 600+ LeetCode problems."
      ],
    },
    {
      id: 2,
      title: 'Software Engineering Intern',
      location: 'Palo Alto, California, USA',
      company: 'Africa to Silicon Valley ',
      from: 'Jul 2022',
      to: 'Dec 2022',
      descriptions: [
        " Responsible for design and development of the front-end using Reactjs and Next.js",
        " Redesigned three outdated features in React.js, contributing to a 10% increase in user engagement",
        " Participated in design reviews and code reviews, collaborating with  other software engineers and stakeholders throughout the development  process"
      ],
    },
    {
      id: 3,
      title: 'Software Engineering Intern',
      company: 'Eskalate',
      location: 'Eskalate, California, USA',
      from: 'Dec 2021',
      to: 'Jul 2022',
      descriptions: [
        "Engineered high-performing RESTful API leveraging Spring Boot",
        "Integrated machine learning model into platform's recommendation system, leading to a 15% increased accuracy",
        "Configured and managed continuous integration and deployment pipelines using Jenkins, reducing software delivery time by 30%",
        "Developed and maintained automated test scripts in, reducing regression testing time by 17%",
        "Participating in daily scrum meetings, sprint planning, unit testing and bug fixes."
      ],
    },
  ];

  const [activeExp, setActiveExp] = useState(experiences[0]);

  return (
    <section
      id="experience"
      className="w-11/12 lg:w-3/4 px-4 lg:px-5 my-5 py-5  "
      data-sr-id="2"
      style={{
        visibility: 'visible',
        opacity: 1,
        transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
        transition:
          'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
      }}
    >
      <h2 className=" flex my-2 py-5 relative font-semibold items-center text-base md:text-2xl text-lightest_slate numbered-heading after:content-[''] after:block after:w-14 sm:after:w-52 after:h-[0.5px] after:bg-lightest_navy after:mx-2 after:my-auto ">
        Where I&apos;ve Worked
      </h2>
      <div className=" flex flex-col lg:flex-row min-h-max gap-x-5 gap-y-5 text-sm justify-start">
        <motion.div
          role="tablist"
          aria-label="Job tabs"
          className=" relative flex flex-row lg:flex-col items-center md:items-start justify-start w-full lg:w-max h-10 md:h-max overscroll-x-auto !text-xs py-2 md:py-5 overflow-x-auto no-scrollbar"
          initial={{
            x: '-500px',
          }}
          animate={{
            x: '0px',
          }}
          transition={{
            duration: 0.6,
          }}
        >
          {experiences.map((experience: any, index: number) => {
            return (
              <button
                onClick={() => setActiveExp(experience)}
                id={`tab-${experience.id}-${index}`}
                key={`tab-${experience.id}-${index}`}
                role="tab"
                aria-selected="true"
                aria-controls={`panel-${experience.id}`}
                className={clsx(
                  'w-full min-w-max text-start border-b-2 lg:border-b-0 h-10 text-[12px] lg:text-sm lg:border-l-2 border-lightest_navy text-slate  flex items-center bg-transparent hover:text-accent hover:bg-accent/5 px-2 lg:px-5 py-1 lg:py-3',
                  activeExp.id === experience.id &&
                  '!text-accent !border-accent'
                )}
              >
                <span className="">{experience.company}</span>
              </button>
            );
          })}
          <div className=""></div>
        </motion.div>
        <motion.div
          transition={{
            duration: 0.6,
          }}
          initial={{
            x: '500px',
          }}
          animate={{
            x: '0px',
          }}
          className="w-full max-w-[700px]  min-h-[400px] py-5 p-auto text-[15px] flex-wrap md:px-4"
        >
          <AnimatePresence mode="wait">
            {experiences.map((exp, index) => {
              return activeExp.id === exp.id ? (
                <motion.div
                  key={`panel-${exp.id}-${index}`}
                  id={`panel-${exp.id}-${index}`}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="my-1 font-semibold leading-5 text-base md:text-xl ">
                    <span>{activeExp.title}</span>
                    <span className="company transition text-accent relative">
                      &nbsp;@&nbsp;
                      <a
                        href="https://www.upstatement.com/"
                        className="inline-link transition text-accent relative"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {activeExp.company}
                      </a>
                    </span>
                  </h3>
                  <p className="range">
                    {activeExp.from} - {activeExp.to}
                  </p>
                  <div className="text-xs ">
                    <ul className="flex flex-col flex-wrap max-w-full px-5">
                      {activeExp.descriptions.map(
                        (desc: string, index: number) => (
                          <li
                            key={desc + index}
                            className="text-justify sm:text-auto flex my-1 items-start justify-between before:my-1 relative before:content-['▹'] before:absolute before:text-accent before:text-xl before:leading-3 before:-ml-5"
                          >
                            {desc}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </motion.div>
              ) : (
                <></>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
