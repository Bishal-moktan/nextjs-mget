import Card from '@/components/Card';
import HeroSection from '@/components/HeroSection';
import Slider from '@/components/Slider';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Mosst Solar | Solar Panel Installation</title>
        <meta
          name="description"
          content="Mosst Solar | Solar Panel Installation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <HeroSection />
        <Card />
        <Slider />
      </main>
    </>
  );
}
