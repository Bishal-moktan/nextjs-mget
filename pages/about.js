import Carousel from '@/components/Carousel';
import Partners from '@/components/Partners';
import Head from 'next/head';
import img from '@/public/images/about/about12.webp';
import AboutContent from '@/components/AboutContent';
import Scroll from '@/components/ScrollToTop';
import { useSelector } from 'react-redux';

const About = () => {
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
        {/* <Landing page="About" /> */}
        <Carousel />
        <AboutContent title="ABOUT US" img={img} />
        <Partners />
        <Scroll />
      </main>
    </>
  );
};
export default About;
