import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import HeroSection from '@/components/home/HeroSection/HeroSection';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Intro from '@/components/home/Intro/Intro';
import WeOffer from '@/components/home/weOffer/WeOffer';
import Partners from '@/components/Partners/Partners';
import Testimonials from '@/components/home/testimonials/Testimonials';

import Why from '@/components/home/Why/Why';

export default function Home() {
  const keywords =
    'Switch to Solar, Sustainable Energy Solution, Solar Power Company, Sustainable Energy Solutions, Carbon Footprint, Energy Bills, Solar Panels, Solar Inverter, Balance of System, High-Quality Materials, Weather Conditions, Solar Energy System, Energy Needs, Solar Energy, Clean Energy, Green Future, Solar Power Systems, Property Value, Go Green, Affordable Power, Reliable Power, Contact MGETENERGY. ';

  const { metaContent, title, mainUrl } = useSelector((store) => store.content);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaContent} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
        <link rel="canonical" href={mainUrl} />
      </Head>
      <main>
        <HeroSection />
        <Intro />
        <Why />
        <WeOffer />
        <Partners />
        <Testimonials />
        <ScrollToTop />
      </main>
    </>
  );
}
