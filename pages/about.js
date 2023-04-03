import Carousel from '@/components/about/carousel/Carousel';
import Partners from '@/components/Partners';
import Head from 'next/head';
import AboutContent from '@/components/about/aboutContent/AboutContent';
import Scroll from '@/components/ScrollToTop';
import { useSelector } from 'react-redux';
import AboutLanding from '@/components/about/aboutLanding/AboutLanding';
import ImageSection from '@/components/about/ImageSection/ImageSection';
import Description from '@/components/about/Description/Description';

const About = () => {
  const { metaContent, title } = useSelector((store) => store.content);

  return (
    <>
      <Head>
        <title>{title} - About</title>
        <meta name="description" content={metaContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <AboutLanding />
        <ImageSection />
        <Description />
        <AboutContent />
        <Scroll />
      </main>
    </>
  );
};
export default About;
