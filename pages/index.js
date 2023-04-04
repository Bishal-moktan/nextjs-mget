import ScrollToTop from '@/components/ScrollToTop';
import HeroSection from '@/components/home/HeroSection/HeroSection';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Intro from '@/components/home/Intro/Intro';
import WeOffer from '@/components/home/weOffer/WeOffer';
import Partners from '@/components/Partners';
import Blog from '@/components/home/Blog/Blog';
import Testimonials from '@/components/home/testimonials/Testimonials';
import AboutContent from '@/components/about/aboutContent/AboutContent';
import CardList from '@/components/CardList';
import experienceImg from '@/public/svg/intro/experience.svg';
import speedImg from '@/public/svg/intro/speed.svg';
import workmanshipImg from '@/public/svg/intro/workmanship.svg';
import customizableImg from '@/public/svg/intro/customizable.svg';
import managementImg from '@/public/svg/intro/management.svg';
import Feature from '@/components/home/Feature/Feature';

export default function Home() {
  const cardTitle =
    '  The unique offering that sets Mgetenergy apart from our competitors is:';
  const item = [
    {
      title: 'Experience and expertise',
      icon: experienceImg,
      info: 'Mgetenergy has extensive experience( its 10 year +) and expertise in the solar EPC industry.',
    },
    {
      title: 'Efficiency and speed',
      icon: speedImg,
      info: 'Mgetenergy has proven track record of delivering projects on time and within budget.',
    },
    {
      title: 'Quality workmanship',
      icon: workmanshipImg,
      info: 'Mgetenrgy is known for delivering high-quality workmanship and utilizing industry-best practices.',
    },
    {
      title: 'Customizable solutions',
      icon: customizableImg,
      info: 'Mgetenrgy offers custom solutions for customers based on their specific needs and requirements.',
    },
    {
      title: 'Strong project management',
      icon: managementImg,
      info: 'Mgetenergy has a strong project   management team that can effectively oversee and manage solar projects from start to finish.',
    },
  ];
  const { metaContent, title } = useSelector((store) => store.content);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <HeroSection />
        <Intro />
        <Feature content={item} title={cardTitle} />

        <WeOffer />
        <Partners />
        {/* <Blog /> */}
        <Testimonials />
        <ScrollToTop />
      </main>
    </>
  );
}
