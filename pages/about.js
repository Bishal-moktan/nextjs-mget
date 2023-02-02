import Carousel from '@/components/Carousel';
import Content from '@/components/Content';
import Partners from '@/components/Partners';
import Head from 'next/head';
import img from '@/public/images/about/about12.webp';

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
        <Partners />
        <Content
          title="About us"
          description="Welcome to Maxoptimus Green Energy Technology Pvt Ltd- Mgetenergy, best  solar power system solution startup (EPC) that is revolutionizing the way solar power system is implemented. Founded by Krishna Singh & Bhupendra Singh , they saw a need in the market for - comprehensive solution for the implementation of solar power system that meets the energy needs of its client while reducing the risks and uncertainties associated with the process. With a passion for solar power solutions, founder's assembled a team of experts with diverse backgrounds to bring this innovative service to market."
          img={img}
          items={null}
        />
      </main>
    </>
  );
};
export default About;
