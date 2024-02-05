import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import SMSideElements from '../components/SM-SideElements';
import EmailSideElements from '../components/EmailSider';
import HeroComponent from '../components/Hero/Hero';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import { useRouter } from 'next/router';
import Loader from '../components/common/Loader';
import { Suspense, useCallback, useEffect, useState } from 'react';
import OtherProjects from '../components/Projects/OtherProjects/OtherProjects';
import ContactUS from '../components/ContactUS/ContactUS';
import Footer from '../components/Footer/Footer';
import { GraphParticles } from "../components/BackGround/Particles";


import { loadFull } from "tsparticles";
import { Container } from 'react-dom';


export default function Home() {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!router.isFallback || !router.isReady) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [router.isFallback, router.isReady]);

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };


  const particlesLoaded: any = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Head>
        <title>
          Yohans Kasaw
        </title>
      </Head>
      <div className="w-full h-full min-h-screen" data-scroll-container>
        <GraphParticles particlesLoaded={particlesLoaded} particlesInit={particlesInit} />
        <Navbar />
        <SMSideElements />
        <EmailSideElements />
        <main className="flex flex-col items-center w-full justify-center min-h-screen my-14 mt-20">
          <HeroComponent />
          <Experience />
          <ContactUS />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}
