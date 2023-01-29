import AccordianSection from '@/components/AccordianSection';
import ScrollToTop from '@/components/ScrollToTop';
import HeroSection from '@/components/HeroSection';
import Slider from '@/components/Slider';
import Head from 'next/head';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Head>
        <title>MGETENERGY SOLAR POWER SYSTEM</title>
        <meta
          name="description"
          content="Mosst Solar | Solar Panel Installation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <HeroSection />
        <Slider />
        <AccordianSection />
        {/* <CTA
          title="PLAN TO INSTALL SOLAR"
          info="Know more, Get Free Consultation!"
        /> */}
        <ScrollToTop />
      </main>
    </>
  );
}
