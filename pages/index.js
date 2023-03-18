import ScrollToTop from '@/components/ScrollToTop';
import HeroSection from '@/components/HeroSection';
import Slider from '@/components/Slider';
import Head from 'next/head';
import { useSelector } from 'react-redux';

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
        <Slider />
        <ScrollToTop />
      </main>
    </>
  );
}
