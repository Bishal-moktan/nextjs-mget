import Head from 'next/head';
import image from '@/public/svg/institute.svg';
import Landing from '@/components/Landing/Landing';

import inverter from '@/public/svg/services/housing/inverter.svg';
import battery from '@/public/svg/services/housing/battery.svg';
import solarpanel from '@/public/svg/services/housing/solarpanel.svg';
import energy from '@/public/svg/services/institute/energy.svg';
import Paragraph from '@/components/Paragraph/Paragraph';
import CardList from '@/components/CardList/CardList';
import Lists from '@/components/Lists/Lists';
import Scroll from '@/components/ScrollToTop/ScrollToTop';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { changeActiveNavLink } from '@/features/contentSlice/contentSlice';
import { navLinksIndex } from '@/data/navbarData';

const Institute = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeActiveNavLink(navLinksIndex.services));
  }, []);
  const keywords =
    'Solar power systems, Institutes, Solar panels, Electrical energy, Energy costs, Environmental sustainability, Feasibility study, System size, Design, Funding, Photovoltaic (PV) panels, Inverters, Battery storage, Energy management system, Cost savings, Carbon footprint, Educational opportunities, Renewable energy, Green initiatives, Reliability, Financial incentives.';

  const metaDescription =
    "Discover the benefits of implementing solar power systems in institutes, including cost savings, environmental sustainability, and educational opportunities for students. Learn about the components involved in an institute's solar power system, such as PV panels, inverters, and battery storage. Find out how institutes can lead by example, promote green initiatives, and take advantage of financial incentives to make the transition to clean, renewable energy.";

  const landingContent =
    "Solar power systems for institutes have become increasingly popular in recent years as a way to reduce energy costs and promote environmental sustainability. A solar power system for a institute consists of solar panels that collect energy from the sun and convert it into electrical energy, which can then be used to power the institute's lights, computers, and other equipment.A solar power system for a institute can provide numerous benefits for both the institute and the surrounding community. These systems can help to reduce the institute's energy costs, promote environmental sustainability, and provide educational opportunities for students.";

  const beforeListPara = [
    "The first step in implementing a solar power system for a institute is to conduct a feasibility study. This study should take into account factors such as the institute's energy usage, the availability of sunlight, and the cost of the system. It is important to consult with experts in the field to determine the most appropriate system size and design for the institute.",
    'Once the feasibility study is complete and the decision to move forward with a solar power system is made, the next step is to secure funding for the project. This can be done through a variety of methods, such as grants, loans, or partnerships with private companies.',
  ];

  const para = [
    'After the installation is complete, the institute can expect to see significant savings on their energy costs, as well as an overall reduction in their carbon footprint. Additionally, the institute can use the solar power system as a learning opportunity for students, providing hands-on experience in renewable energy and sustainable living. ',
    'Overall, a solar power system for a institute is a viable and cost-effective option for reducing energy costs, promoting environmental sustainability, and providing educational opportunities for students. With the right planning and execution, the institute can enjoy the benefits of clean energy for many years to come.',
  ];

  const CartListTitle =
    'The installation of a solar power system for a institute typically includes the following components:';
  const cardList = [
    {
      title: 'Photovoltaic (PV) panels',
      icon: solarpanel,
      info: 'These panels convert sunlight into electricity. The number and size of the panels will depend on the system size and design.',
    },
    {
      title: 'Inverters',
      icon: inverter,
      info: 'These devices convert the electricity produced by the PV panels from direct current (DC) to alternating current (AC), which is used by the institute.',
    },
    {
      title: 'Battery Storage',
      icon: battery,
      info: 'This component allows the institute to store excess electricity generated during the day for use during times when sunlight is not available, such as at night or on cloudy days.',
    },
    {
      title: 'Energy Management System',
      icon: energy,
      info: 'This component monitors and manages the flow of electricity to and from the grid, ensuring that the institute is using the most cost-effective and efficient energy source at any given time.',
    },
  ];

  const benefits = [
    {
      title: 'Cost Savings',
      info: "Solar power systems can significantly reduce a institute's energy costs. By generating their own electricity, institutes can reduce or eliminate their dependence on the grid and the associated costs.",
    },
    {
      title: 'Environmental Sustainability',
      info: 'Solar power is a clean, renewable energy source that does not produce any emissions or pollutants. By using solar power, institutes can reduce their carbon footprint and promote environmental sustainability.',
    },
    {
      title: ' Educational Opportunities',
      info: 'Solar power systems can provide educational opportunities for students. institutes can install monitoring systems that allow students to track the energy production of the solar panels and learn about renewable energy and environmental sustainability.',
    },

    {
      title: ' Promote green initiatives and lead by example',
      info: 'Installing solar power systems in institutes can be a great way for institutes to promote green initiatives and lead by example to encourage other institutions and individuals to follow in their footsteps.',
    },
    {
      title: ' Reliability',
      info: 'Solar power systems are relatively low maintenance and provide a reliable source of energy that is not affected by power outages or disruptions in the grid.',
    },
    {
      title: '  Financial incentives',
      info: ' Many governments offer financial incentives for institutes that install solar power systems, making the investment more affordable.',
    },
  ];

  const listTitle = 'Benefits of Using Solar Power in institutes:';
  return (
    <>
      <Head>
        <title>SOLAR FOR INSTITUTES</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main className="container">
        <Landing
          page={'Solar For Institutes'}
          image={image}
          landingContent={landingContent}
        />
        <Paragraph para={beforeListPara} />
        <CardList content={cardList} title={CartListTitle} />
        <Paragraph para={para} />
        <Lists content={benefits} title={listTitle} />
        <Scroll />
      </main>
    </>
  );
};
export default Institute;
