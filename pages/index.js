import ScrollToTop from '@/components/ScrollToTop';
import HeroSection from '@/components/home/HeroSection/HeroSection';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Intro from '@/components/home/Intro/Intro';
import WeOffer from '@/components/home/weOffer/WeOffer';
import Partners from '@/components/Partners';
import Blog from '@/components/home/Blog/Blog';
import Testimonials from '@/components/home/testimonials/Testimonials';

export default function Home() {
  const { metaContent } = useSelector((store) => store.post);
  return (
    <>
      <Head>
        <title>BEST SOLAR POWER SYSTEM INSTALLATION COMPANY</title>
        <meta name="description" content={metaContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <HeroSection />
        <Intro />
        <WeOffer />
        <Partners />
        <Blog />
        <Testimonials />
        <ScrollToTop />
      </main>
    </>
  );
}
