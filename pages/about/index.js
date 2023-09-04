import Head from 'next/head';
import AboutContent from '@/components/about/aboutContent/AboutContent';
import Scroll from '@/components/ScrollToTop/ScrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import Description from '@/components/about/Description/Description';
import Landing from '@/components/about/landing/Landing';
import AboutSection from '@/components/about/aboutSection/AboutSection';
import CTA from '@/components/about/cta/CTA';
import Team from '@/components/about/Team/Team';
import { navLinksIndex } from '@/data/navbarData';
import { useEffect } from 'react';
import { changeActiveNavLink } from '@/features/contentSlice/contentSlice';

const About = () => {
  const { title } = useSelector((store) => store.content);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeActiveNavLink(navLinksIndex.about));
  }, []);

  const keywords =
    'solar power system, solar energy, renewable energy, solar panels, solar inverter, energy storage solutions, energy management systems, solar power company, sustainable future, fossil fuels, clean energy, solar projects, custom solar power solutions, project management, solar EPC industry, energy independence, environmental impact, ongrid, offgrid, hybrid, utility scale, personalized service, high-quality workmanship, customizable solutions ';

  const metaDescription =
    'Welcome to Mgetenergy, a leading solar power system solution startup that revolutionizes solar energy implementation. Founded by Krishna Singh & Bhupendra Singh, we offer comprehensive, sustainable, and cost-effective solar power solutions for homes and businesses. Our experienced team specializes in designing, installing, and maintaining solar systems, along with energy storage and management solutions. We are committed to providing personalized, high-quality service to meet unique energy needs and reduce dependence on fossil fuels. Join us in promoting a greener future and empowering communities through solar power adoption';
  return (
    <>
      <Head>
        <title>{title} - About</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
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
