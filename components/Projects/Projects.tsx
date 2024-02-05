import React from 'react';
import CustomSVGIcon from '../../utils/getSVG';
import styles from './projects.module.css';
import clsx from 'clsx';
import SlideWrapper from '../common/SlideToRight';
type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      id: '1',
      title: 'Lucid pictures website',
      href: 'https://lucidpicturesplc.com/',
      img: '/images/projects/Lucid Pictures.png',
      description: (
        <p className="flex flex-wrap text-right w-full flex-row">
          <span className="">
            It is a A premier video production company that brings your stories
            to life. With a passion for creativity and a commitment to
            excellence, we specialize in crafting compelling visual narratives
            that captivate audiences.
            <br />
            <a
              className="text-accent inline"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ReactJS
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NextJS
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwindcss
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://github.com/locomotivemtl/locomotive-scroll/tree/v5-beta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Locomotive Scroll
            </a>
            .
          </span>
        </p>
      ),
      repo: '#',
      techs: [
        'ReactJS',
        'NextJS',
        'Tailwindcss',
        'Locomotive Scroll',
        'Docker',
        'Agile',
        'Scrum',
      ],
    },
    {
      id: '2',
      title: 'Alphabet Trading website',
      href: 'https://www.alphabettrading.com/',
      img: '/images/projects/Alphabet Trading.png',
      description: (
        <p className="flex flex-wrap text-right w-full flex-row">
          <span className="">
            Alphabet Trading PLC was formally established in November 2019 by Mr
            Henock Fikru to engage mainly in the export of agricultural goods
            from Ethiopia. and has been focused on building relationships with
            coffee producers and suppliers from the Southern and Western parts
            of Ethiopia, in Sidama, Oromia and SNNP regions.
            <br />
            <a
              className="text-accent inline"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ReactJS
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NextJS
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwindcss
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://github.com/locomotivemtl/locomotive-scroll/tree/v5-beta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Locomotive Scroll
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://github.com/locomotivemtl/locomotive-scroll/tree/v5-beta"
              target="_blank"
              rel="noopener noreferrer"
            >
              AWS Amplify
            </a>
            .
          </span>
        </p>
      ),
      repo: '#',
      techs: [
        'ReactJS',
        'NextJS',
        'Tailwindcss',
        'Locomotive Scroll',
        'Docker',
        'Agile',
        'Scrum',
      ],
    },
    {
      id: '3',
      title: 'A2SV Portal',
      href: 'https://portal.a2sv.org/',
      img: '/images/projects/portal_group.png',
      description: (
        <p className="flex flex-wrap text-right w-full flex-row">
          <span className="">
            It is a portal system that aims to simplify internal working
            procedures like tracking student progress, as well as automating
            communication within our company. I&apos;m responsible for
            developing a responsive web app for A2SV portal based on &nbsp;
            <a
              className="text-accent inline"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ReactJS
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NextJS
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwindcss
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://www.apollographql.com/docs/react/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apollo Client
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://graphql.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GraphQL
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://gcp.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GCP
            </a>
            .
          </span>
        </p>
      ),
      repo: 'https://github.com/bchiang7/halcyon-site',
      techs: ['ReactJS', 'NextJS', 'Tailwindcss', 'Docker', 'Agile', 'Scrum'],
    },
    {
      id: '4',
      title: 'Sekanson',
      href: 'https://mintplex.vercel.app/',
      img: '/images/projects/Sekanson.png',
      description: (
        <p className="flex justify-start">
          <span className="break-words max-w-full">
            Sekanson is a web application that has all the tools to help you
            launch and grow your
            <a
              className="text-accent inline-flex"
              href="https://opensea.io/learn/what-are-nfts"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;NFT
            </a>
            &nbsp;project from the very first mint & beyond. I was responsible
            for designing, developing the frontend part of the application, and
            as well as integrating the app with the backend and
            <a
              className="text-accent inline-flex"
              href="https://www.ibm.com/topics/smart-contracts"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;smart contract
            </a>
            , &nbsp; I built the app using &nbsp;
            <a
              className="text-accent inline-flex"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ReactJS
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NextJS
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwindcss
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Typescript
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://thirdweb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Thirdweb.
            </a>
          </span>
        </p>
      ),
      repo: 'https://github.com/bchiang7/halcyon-site',
      techs: [
        'ReactJS',
        'NextJS',
        'Tailwindcss',
        'Web3',
        'EthersJS',
        'Smart Contract',
      ],
    },
    {
      id: '5',
      title: 'Monarch',
      href: 'https://thorstarter-three.vercel.app/',
      img: '/images/projects/monarch-1.png',
      description: (
        <p className="flex flex-wrap justify-end">
          <span>
            Monarch is building a 100% decentralized ecosystem that bridges the
            knowledge gap between DeFi protocols and makes DeFi easy by bringing
            the best protocols together in one place. The Kingmaker is our
            project incubator where we build, fund and launch the most promising
            projects in&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://www.coinbase.com/learn/crypto-basics/what-is-defi"
              target="_blank"
              rel="noopener noreferrer"
            >
              DeFi
            </a>
            .&nbsp; I was responsible for building the frontend part using&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ReactJS
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NextJS
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwindcss
            </a>
            ,&nbsp;
            <a
              className="text-accent inline-flex"
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Typescript
            </a>
          </span>
        </p>
      ),
      repo: 'https://github.com/bchiang7/halcyon-site',
      techs: ['ReactJS', 'NextJS', 'Web3'],
    },
  ];

  return (
    <section id="projects" className="w-11/12 lg:w-3/4 px-5 lg:px-10 my-5 py-5">
      <h2 className="numbered-heading flex my-2 py-5 relative font-semibold items-center text-2xl text-lightest_slate numbered-heading after:content-[''] after:block after-w-10 md:after:w-52 after:h-[0.5px] after:bg-lightest_navy after:mx-2 after:my-auto ">
        Some Things I&apos;ve Built
      </h2>
      <ul className=" flex flex-col lg:gap-y-24 text-sm ">
        {projects.map((project, index) => {
          return index % 2 === 0 ? (
            <SlideWrapper key={project.id + index} from="right">
              {/* <li
                key={project.id}
                className="group relative opacity-100 visible grid gap-3 grid-cols-12 items-center min-h-[400px] md:min-h-[500px]"
                data-sr-id="4"
                style={{
                  transform:
                    'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
                  transition:
                    'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
                }}
              >
                <div
                  className="hidden md:flex project-image z-10 relative  md:min-w-[300px] justify-center md:w-[700px] md:[gridArea:1/1/-1/6]"
                  style={{
                    boxShadow: '0 10px 30px -15px var(--navy-shadow)',
                    transition: 'var(--transition)',
                  }}
                >
                  <a
                    className={clsx(
                      styles.project_image__a,
                      'w-full'
                    )}
                    style={{
                      backgroundColor: 'var(--green)',
                      borderRadius: 'var(--border-radius)',
                      verticalAlign: 'middle',
                    }}
                    href={project.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div
                      style={{
                        boxShadow: '0 10px 30px -15px var(--navy-shadow)',
                        transition: 'var(--transition)',
                      }}
                      className={clsx(styles.wrapper, "h-fit")}
                    >
                      <div className={clsx('relative', styles.wrapper__img, "aspect-video")}>
                        <div className="absolute z-20 inset-0">
                          <img
                            alt=""
                            role="presentation"
                            aria-hidden="true"
                            src="data:image/svg+xml;charset=utf-8,%3Csvg height='450' width='450' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                            style={{
                              maxWidth: '100%',
                              height: '100%',
                              display: 'block',
                              position: 'static',
                            }}
                          />
                        </div>
                        <div
                          aria-hidden="true"
                          data-placeholder-image=""
                          style={{
                            opacity: 0,
                            transition: 'opacity 500ms linear 0s',
                            backgroundColor: 'rgb(232, 232, 232)',
                            position: 'absolute',
                            inset: '0px',
                            objectFit: 'cover',
                          }}
                        ></div>
                        <Image
                          fill
                          className="h-full w-full object-cover min-h-full"
                          decoding="async"
                          src={project.img}
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="w-full project-content relative gap-y-3 flex flex-col items-end text-right col-span-12 sm:[gridArea:1/6/-1/-1]">
                  <p className="project-overline  text-accent text-sm font-mono">
                    Featured Project
                  </p>
                  <h3 className="project-title text-lightest_slate font-semibold my-3 hover:text-accent text-2xl hover:font-bold">
                    <a
                      href={project.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div
                    className="w-full md:w-auto flex flex-col flex-wrap project-description relative z-20 rounded-lg md:min-w-[300px]"
                    style={{
                      boxShadow: '0 10px 30px -15px var(--navy-shadow)',
                      transition: 'var(--transition)',
                      position: 'relative',
                      zIndex: 20,
                      padding: '25px',
                      borderRadius: 'var(--border-radius)',
                      backgroundColor: 'var(--light-navy)',
                      color: 'var(--light-slate)',
                      fontSize: 'var(--fz-lg)',
                    }}
                  >
                    {project.description}
                  </div>
                  <ul className=" project-tech-list my-5 flex gap-x-2 tracking-tighter text-xs max-w-md self-end text-right flex-wrap justify-end relative mx-2 z-20 font-mono">
                    {project.techs?.map((tech, index) => {
                      return (
                        <li
                          key={tech}
                          className="mx-1 text-slate whitespace-nowrap"
                        >
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="project-links text-lightest_slate my-3 flex justify-end items-center gap-x-2">
                    <a
                      href={project.repo}
                      aria-label="GitHub Link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <CustomSVGIcon className="" name="github" />
                    </a>
                    <a
                      href={project.href}
                      aria-label="External Link"
                      className="external"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <CustomSVGIcon className="" name="external-link" />
                    </a>
                  </div>
                </div>
              </li> */}
              <li
                className="group relative opacity-100 visible grid gap-3 grid-cols-12 items-center  min-h-[400px] md:min-h-[500px] "
                data-sr-id="4"
                style={{
                  transform:
                    'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
                  transition:
                    'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
                }}
              >
                <div className=" w-full project-content relative gap-y-3 md:w-[600px] [gridArea:1/7/-1/-1] flex flex-col items-end">
                  <p className="project-overline  text-accent text-sm font-mono">
                    Featured Project
                  </p>
                  <h3 className="project-title text-lightest_slate font-semibold my-3 hover:text-accent text-2xl hover:font-bold">
                    <a
                      href={project.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div
                    className="project-description relative z-20 rounded-lg min-w-[300px] "
                    style={{
                      boxShadow: '0 10px 30px -15px var(--navy-shadow)',
                      transition: 'var(--transition)',
                      position: 'relative',
                      zIndex: 20,
                      padding: '25px',
                      borderRadius: 'var(--border-radius)',
                      backgroundColor: 'var(--light-navy)',
                      color: 'var(--light-slate)',
                      fontSize: 'var(--fz-lg)',
                    }}
                  >
                    {project.description}
                  </div>
                  {/* <ul className="project-tech-list justify-end  text-xs my-5 gap-x-2 w-full tracking-tighter flex-wrap relative mx-2 z-20 font-mono flex min-w-[300px]">
                    {project.techs?.map((tech, index) => {
                      return (
                        <li key={tech + index} className="mx-1 text-slate">
                          {tech}
                        </li>
                      );
                    })}
                  </ul> */}
                  <div className="project-links text-lightest_slate my-3 flex items-center gap-x-2">
                    <a
                      href={project.repo}
                      aria-label="GitHub Link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <CustomSVGIcon className="" name="github" />
                    </a>
                    <a
                      href={project.href}
                      aria-label="External Link"
                      className="external"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <CustomSVGIcon className="" name="external-link" />
                    </a>
                  </div>
                </div>
                <div
                  className="hidden md:flex project-image z-0 relative [gridArea:1/1/-1/8]"
                  style={{
                    boxShadow: '0 10px 30px -15px var(--navy-shadow)',
                    transition: 'var(--transition)',
                    gridArea: '',
                  }}
                >
                  <a
                    className={clsx('h-full', styles.project_image__a)}
                    href="https://halcyon-theme.netlify.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div
                      style={{
                        boxShadow: '0 10px 30px -15px var(--navy-shadow)',
                        transition: 'var(--transition)',
                      }}
                      className={clsx(styles.wrapper)}
                    >
                      <div
                        className={clsx('relative h-full', styles.wrapper__img)}
                      >
                        <div className="absolute block -z-20 top-0 left-0 min-w-[300px] h-full w-full object-cover ">
                          <img
                            alt=""
                            role="presentation"
                            aria-hidden="true"
                            src="data:image/svg+xml;charset=utf-8,%3Csvg height='450' width='450' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                            style={{
                              maxWidth: '100%',
                              display: 'block',
                              position: 'static',
                            }}
                          />
                        </div>
                        <div
                          aria-hidden="true"
                          data-placeholder-image=""
                          style={{
                            opacity: 0,
                            transition: 'opacity 500ms linear 0s',
                            backgroundColor: 'rgb(232, 232, 232)',
                            position: 'absolute',
                            inset: '0px',
                            objectFit: 'cover',
                          }}
                        ></div>
                        <img
                          className="max-w-full h-full w-full object-cover block static"
                          // width="450px"
                          // height="450px"
                          decoding="async"
                          src={project.img}
                          alt="Headshot"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            </SlideWrapper>
          ) : (
            <SlideWrapper key={project.id + index} from="left">
              <li
                className="group relative opacity-100 visible grid gap-3 grid-cols-12 items-center  min-h-[400px] md:min-h-[500px]"
                data-sr-id="4"
                style={{
                  transform:
                    'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
                  transition:
                    'opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s',
                }}
              >
                <div className=" w-full project-content relative gap-y-3 min-w-[300px] md:w-[600px] [gridArea:1/1/-1/7] ">
                  <p className="project-overline  text-accent text-sm font-mono">
                    Featured Project
                  </p>
                  <h3 className="project-title text-lightest_slate font-semibold my-3 hover:text-accent text-2xl hover:font-bold">
                    <a
                      href={project.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div
                    className="project-description relative z-20 rounded-lg min-w-[300px] h-full"
                    style={{
                      boxShadow: '0 10px 30px -15px var(--navy-shadow)',
                      transition: 'var(--transition)',
                      position: 'relative',
                      zIndex: 20,
                      padding: '25px',
                      borderRadius: 'var(--border-radius)',
                      backgroundColor: 'var(--light-navy)',
                      color: 'var(--light-slate)',
                      fontSize: 'var(--fz-lg)',
                    }}
                  >
                    {project.description}
                  </div>
                  {/* <ul className="project-tech-list  text-xs my-5 gap-x-2 w-full tracking-tighter flex-wrap relative mx-2 z-20 font-mono flex min-w-[300px]">
                    {project.techs?.map((tech, index) => {
                      return (
                        <li key={tech + index} className="mx-1 text-slate">
                          {tech}
                        </li>
                      );
                    })}
                  </ul> */}
                  <div className="project-links text-lightest_slate my-3 flex items-center gap-x-2">
                    <a
                      href={project.repo}
                      aria-label="GitHub Link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <CustomSVGIcon className="" name="github" />
                    </a>
                    <a
                      href={project.href}
                      aria-label="External Link"
                      className="external"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <CustomSVGIcon className="" name="external-link" />
                    </a>
                  </div>
                </div>
                <div
                  className="hidden md:flex project-image z-0 relative [gridArea:1/6/-1/-1]"
                  style={{
                    boxShadow: '0 10px 30px -15px var(--navy-shadow)',
                    transition: 'var(--transition)',
                  }}
                >
                  <a
                    className={clsx('h-full', styles.project_image__a)}
                    href="https://halcyon-theme.netlify.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div
                      style={{
                        boxShadow: '0 10px 30px -15px var(--navy-shadow)',
                        transition: 'var(--transition)',
                      }}
                      className={clsx(styles.wrapper)}
                    >
                      <div
                        className={clsx('relative h-full', styles.wrapper__img)}
                      >
                        <div className="absolute block -z-20 inset-0 min-w-[500px] h-full w-full object-cover">
                          <img
                            alt=""
                            role="presentation"
                            aria-hidden="true"
                            src="data:image/svg+xml;charset=utf-8,%3Csvg height='450' width='450' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                            style={{
                              maxWidth: '100%',
                              display: 'block',
                              position: 'static',
                            }}
                          />
                        </div>
                        <div
                          aria-hidden="true"
                          data-placeholder-image=""
                          style={{
                            opacity: 0,
                            transition: 'opacity 500ms linear 0s',
                            backgroundColor: 'rgb(232, 232, 232)',
                            position: 'absolute',
                            inset: '0px',
                            objectFit: 'cover',
                          }}
                        ></div>
                        <img
                          className="max-w-full h-full w-full object-cover"
                          // width="450px"
                          // height="450px"
                          decoding="async"
                          src={project.img}
                          alt="Headshot"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            </SlideWrapper>
          );
        })}

        {/* <li className="featured__StyledProject-ywnbqt-1 eeeRej" data-sr-id="5" style={{
                    visibility: "visible",
                    opacity: 1,
                    transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                    transition: "opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s"
                }}>
                    <div className="project-content">
                        <p className="project-overline">Featured Project</p>
                        <h3 className="project-title">
                            <a href="https://spotify-profile.herokuapp.com/" rel="noopener noreferrer" target="_blank">Spotify Profile
                            </a>
                        </h3>
                        <div className="project-description">
                            <p>A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
                            </p>
                        </div>
                        <ul className="project-tech-list">
                            <li>React</li>
                            <li>Styled Components</li>
                            <li>Express</li>
                            <li>Spotify API</li>
                            <li>Heroku</li>
                        </ul>
                        <div className="project-links">
                            <a href="https://github.com/bchiang7/spotify-profile" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title>
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            <a href="https://spotify-profile.herokuapp.com/" aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="project-image">
                        <a href="https://spotify-profile.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                            <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
                                <div className='max-w-[700px] block' >
                                    <img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height='438' width='700' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E" />
                                </div>
                                <img aria-hidden="true" data-placeholder-image="" decoding="async"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcElEQVQoz32Q0U7bQBBF/RogjuOynpmdXW/W2E4cEwEhjgmymqpq+tg8tEWq2opf4hf6p5VjZJBjuE+r2b177h3HtQEKQMKOCOvxOb4nZ4gfMOhxngOUEX+NWCHAW+aTwSkRdZxANAHxb796+v35nkGQJOoze57fgxUi8Nxv5Wb/4xeTGo896MM7TAz4ckFEQoiiKL7sdutqu6k+fdxuq6oyxgRBt54zcr3OCABms9myWK2L1WKRXy+vy81dqMNjuOMemRGxhjABIisOCAQEcIQ9kEc95nqFAFEUZVkmpaSDeszucNSmPc7fDNtD56UzPHOllNNpMjuIiACAmefzubWWiOIkzrIsTdPGppTK8zwM6xU4g8GJ1ubqqkySxFrbfq+YASCJ401RXsQXYRi2jZRSzPzcmVlf5kuttZTydeyx79/eLB++/zTGWGujg5RSANCsoO5MRFpze9ESfH+8KtZ//j5OJqZJnqapMQYRG/J/k6JW26WIe1kAAAAASUVORK5CYII=" alt="" className='opacity-0 transition-opacity-[500ms linear 0s] object-cover' />
                            </div>
                        </a>
                    </div>
                </li > */}

        {/* <li className="featured__StyledProject-ywnbqt-1 eeeRej" data-sr-id="6" style={{
                    visibility: "visible",
                    opacity: 1,
                    transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                    transition: "opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s"
                }}>
                    <div className="project-content">
                        <div>
                            <p className="project-overline">Featured Project</p><h3 className="project-title"><a href="https://www.newline.co/courses/build-a-spotify-connected-app" rel="noopener noreferrer" target="_blank">Build a Spotify Connected App</a></h3><div className="project-description">
                                <p>Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.</p>
                                <p>Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.
                                </p>
                            </div>
                            <ul className="project-tech-list">
                                <li>React</li>
                                <li>Express</li>
                                <li>Spotify API</li>
                                <li>Styled Components</li>
                            </ul>
                            <div className="project-links">
                                <a href="https://www.newline.co/courses/build-a-spotify-connected-app" aria-label="Course Link" className="cta" rel="noopener noreferrer" target="_blank">Learn More</a></div></div></div><div className="project-image"><a href="https://www.newline.co/courses/build-a-spotify-connected-app" rel="noopener noreferrer" target="_blank">
                                    <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
                                        <div className="max-w-[700px] block">
                                            {/* <img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height='394' width='700' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"> */}
        {/* </div>
                                        <img aria-hidden="true" data-placeholder-image="" decoding="async" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACqklEQVQozwGfAmD9AKa44Jeq3Iqd1H+SznaIynKDx2+Ax2x9xWt8xWt8xmx+x2+ByXKDzXmK0HyO04WX142f2pKn3J2x3qW64QCgtdyps82VptSQotSImtB4jMlpfsJofcJle8FrgMRvhMZ1i8mBlc96ks2quuCQp9ePqdajut2Vs9ebu9cAmrHal6XDj6XSiqHTg5rOc4zHZH/AZX/AX3u9fZXJrLzcsMDfrsDelq/U5uz1r8bfmLjVvtXkjrnOjrzNAJWz3IGj1XaWy2yMxWSEwGGCvl5/u1l8ulp/ull/uV+Gu2ONvGGOumeWvY20zHSnwHSrv4S4xXy3wIPAwQCJq9FsX2JiXGFYYGtYXmhQV2FUW2dqi7hmkMJulsFnlb1ilblvob5pobpqpbh7tL9ztLpos7FvvLJ1w7MAg6jLQzk3Pzk3RURCRkRDNjUzQD8/nLfPlbnXlrrSjLfNea7ClMLMnMnOl8rJn9LNk87FYLymX8CkZ8emAHypzC0vMygsMyYrMCUnKC8vLFBQS2SRsWumyWmkwGanvGSqt2yyt3K7t2u7sGvArXHGrWjHplbFmFrKmQB4rM0pJSMzKygwKignIyAgGBI9ODN7qsGOw9iLws+Iw8uFxcaEycGW08d8zLaJ1LuZ3cKQ27tPypBQzo8AebrdWX2NX36PU3eNQm6FLlpuJ1RnO5KxPaK9O6KxOqaqOquiObCaNLORMrmKNr+GPMWGOseBP8yCStKIAH3J7G/F72C97FS35kuy4Eax20Kx1j2rxzqrvTqvtTmyqzi2ojm6mlHGn1nMnlDOlFHQkVnVk0/Ui0TUggB3zO9mw+pYveZNuOFCs9s6sNQ2r80zscgys78xtbUxuaoxvJ8ywJZJy5pS0ZlQ05JO1YxY2ZBU2otE138AtHoe7OPKgAAAAABJRU5ErkJggg==" alt="" className="opacity-0 transition-opacity-[opacity 500ms linear 0s] object-cover" />
                                    </div>
                                </a>
                    </div> 
                </li> 
                */}
      </ul>
    </section>
  );
};

export default Projects;
