import Carousel from '@/components/Carousel';
import Partners from '@/components/Partners';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About - MGETENERGY SOLAR POWER SYSTEM</title>
        <meta
          name="description"
          content="Mosst Solar | Solar Panel Installation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        {/* <Landing page="About" /> */}
        <Carousel />
        <Partners />
      </main>
    </>
  );
};
export default About;
