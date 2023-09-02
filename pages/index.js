import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import HeroSection from '@/components/home/HeroSection/HeroSection';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';

import Why from '@/components/home/Why/Why';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { navLinksIndex } from '@/data/navbarData';
import { changeActiveNavLink } from '@/features/contentSlice/contentSlice';

const Intro = dynamic(() => import('@/components/home/Intro/Intro'));
const WeOffer = dynamic(() => import('@/components/home/weOffer/WeOffer'));
const Partners = dynamic(() => import('@/components/Partners/Partners'));
const Testimonials = dynamic(
  () => import('@/components/home/testimonials/Testimonials'),
  {
    ssr: false,
  }
);

export default function Home() {
  const keywords =
    'Switch to Solar, Sustainable Energy Solution, Solar Power Company, Sustainable Energy Solutions, Carbon Footprint, Energy Bills, Solar Panels, Solar Inverter, Balance of System, High-Quality Materials, Weather Conditions, Solar Energy System, Energy Needs, Solar Energy, Clean Energy, Green Future, Solar Power Systems, Property Value, Go Green, Affordable Power, Reliable Power, Contact MGETENERGY. ';

  const { metaContent, title, mainUrl } = useSelector(
    (store) => store.content
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeActiveNavLink(navLinksIndex.home));
  }, []);
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
