import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import HeroSection from '@/components/home/HeroSection/HeroSection';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Intro from '@/components/home/Intro/Intro';
import WeOffer from '@/components/home/weOffer/WeOffer';
import Partners from '@/components/Partners/Partners';
import Testimonials from '@/components/home/testimonials/Testimonials';
import experienceImg from '@/public/svg/intro/experience.svg';
import speedImg from '@/public/svg/intro/speed.svg';
import workmanshipImg from '@/public/svg/intro/workmanship.svg';
import customizableImg from '@/public/svg/intro/customizable.svg';
import managementImg from '@/public/svg/intro/management.svg';
import CardList from '@/components/CardList/CardList';
import Why from '@/components/home/Why/Why';

export default function Home() {
  const cardTitle = 'Why MGET Energy?';
  const item = [
    {
      title: 'Experience and expertise',
      icon: experienceImg,
      info: '10+ years of extensive experience and expertise in the solar EPC industry',
    },
    {
      title: 'Efficiency and speed',
      icon: speedImg,
      info: 'Proven track records of delivering project on time and within budget',
    },
    {
      title: 'Quality workmanship',
      icon: workmanshipImg,
      info: 'Known for delivering high quality workmanship and utilizing industry best practices',
    },
    {
      title: 'Customizable solutions',
      icon: customizableImg,
      info: 'Offers custom solutions to customer based on their specific needs and requirements',
    },
    {
      title: 'Strong project management',
      icon: managementImg,
      info: 'A team that can effectively manage and oversee solar projects from start to finish',
    },
  ];
  const { metaContent, title, mainUrl, keywords } = useSelector(
    (store) => store.content
  );
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaContent} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
        <link rel="canonical" href={mainUrl} />
      </Head>
      <main>
        <HeroSection />
        <Intro />
        <Why content={item} title={cardTitle} />
        <WeOffer />
        <Partners />
        <Testimonials />
        <ScrollToTop />
      </main>
    </>
  );
}
