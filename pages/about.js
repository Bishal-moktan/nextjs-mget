import Carousel from '@/components/Carousel';
import Partners from '@/components/Partners';
import Head from 'next/head';
import img from '@/public/images/about/about12.webp';
import AboutContent from '@/components/AboutContent';
import Scroll from '@/components/ScrollToTop';
import Testinomials from '@/components/Testimonials';

const About = () => {
  return (
    <>
      <Head>
        <title>BEST SOLAR POWER SYSTEM INSTALLATION COMPANY</title>
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
        <AboutContent title="INTRO" img={img} />
        <Partners />
        <Scroll />
      </main>
    </>
  );
};
export default About;
