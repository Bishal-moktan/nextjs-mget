import Head from 'next/head';
import AboutContent from '@/components/about/aboutContent/AboutContent';
import Scroll from '@/components/ScrollToTop/ScrollToTop';
import { useSelector } from 'react-redux';
import Description from '@/components/about/Description/Description';
import Landing from '@/components/about/landing/Landing';
import AboutSection from '@/components/about/aboutSection/AboutSection';
import CTA from '@/components/about/cta/CTA';
import Team from '@/components/about/Team/Team';

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
        <Landing />
        <AboutSection />
        <Description />
        <AboutContent />
        <Team />
        <CTA />
        <Scroll />
      </main>
    </>
  );
};
export default About;
