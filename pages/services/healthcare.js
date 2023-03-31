import Head from 'next/head';
import image from '@/public/svg/health.svg';
import Landing from '@/components/Landing';
import Scroll from '@/components/ScrollToTop';
import Lists from '@/components/Lists';
import CardList from '@/components/CardList';

import solarpanel from '@/public/svg/services/housing/solarpanel.svg';
import inverter from '@/public/svg/services/housing/inverter.svg';
import battery from '@/public/svg/services/housing/battery.svg';
import monitoring from '@/public/svg/services/housing/monitoring.svg';
import energy from '@/public/svg/services/institute/energy.svg';
import Accordian from '@/components/Accordian';
import Paragraph from '@/components/Paragraph';
import { useSelector } from 'react-redux';

const Agriculture = () => {
  const { metaContent } = useSelector((store) => store.content);

  const landingContent =
    'A solar power system for commercial and industrial (C&I) applications is a renewable energy system that uses solar panels to generate electricity for commercial and industrial buildings.';

  const firstListTitle =
    'There are several reasons why healthcare and hospitals should consider switching to a solar power system:';

  const firstList = [
    {
      title: 'Cost Savings',
      info: 'Solar energy is a cost-effective alternative to traditional electricity, reducing energy costs and operating expenses. This is particularly important for healthcare facilities, which often have high energy demands.',
    },
    {
      title: 'Reliability',
      info: 'Solar energy is a reliable source of energy, especially during power outages, providing critical support to healthcare facilities. This can ensure that essential medical equipment and services are maintained even during times of power interruption.',
    },
    {
      title: 'Environmental Benefits',
      info: "Solar energy is a clean and renewable source of energy, reducing the healthcare facility's carbon footprint and contributing to a cleaner environment. This aligns with the healthcare sector's goal of providing care in an environmentally responsible manner.",
    },
    {
      title: 'Energy Independence',
      info: 'By generating their own electricity, healthcare facilities can reduce their dependence on the electrical grid and become more self-sufficient.',
    },
    {
      title: 'Improved Reputation',
      info: "Adopting solar energy can demonstrate a commitment to sustainability and environmental responsibility, improving the facility's reputation and attracting patients who share these values.",
    },
    {
      title: 'Tax Incentives',
      info: 'Many countries offer tax incentives for organizations that switch to renewable energy, providing an additional financial benefit to healthcare facilities that adopt solar power.',
    },
  ];

  const cardTitle =
    'Solar power system for healthcare and hospitals typically consists of the following components:';

  const cartList = [
    {
      title: 'Solar Panels',
      icon: solarpanel,
      info: 'These are photovoltaic (PV) panels that convert sunlight into electricity. The size of the solar panel system depends on the energy requirement of the healthcare facility.',
    },
    {
      title: 'Inverter',
      icon: inverter,
      info: 'Converts DC electricity generated by the solar panels into AC electricity that can be used by the hospital equipment and appliances.',
    },
    {
      title: ' Battery Storage',
      icon: battery,
      info: ' Stores excess solar energy generated during the day for use during the night or periods of low sunlight.',
    },
    {
      title: ' Energy Management System',
      icon: energy,
      info: 'Controls the distribution of energy between the solar panels, battery storage, and the hospital’s electrical grid.',
    },
    {
      title: ' Monitoring System',
      icon: monitoring,
      info: 'Monitors the performance of the solar power system, including energy generation and consumption.',
    },
  ];

  const secondList = [
    {
      title: 'Grid-Tied Solar Power System',
      info: 'This type of system is connected to the electrical grid, allowing excess energy to be fed back into the grid and consumed when the sun is not shining.',
    },
    {
      title: 'Stand-Alone Solar Power System',
      info: 'This type of system is not connected to the electrical grid and relies solely on solar panels and battery storage to provide power. It is suitable for remote or off-grid healthcare facilities.',
    },
    {
      title: 'Hybrid Solar Power System',
      info: 'This type of system combines elements of both grid-tied and stand-alone systems, allowing for a mix of grid and solar energy use.',
    },
    {
      title: 'Roof-Mounted Solar Power System',
      info: 'This type of system involves installing solar panels on the roof of the healthcare facility, making efficient use of available space.',
    },
    {
      title: ' Ground-Mounted Solar Power System',
      info: 'This type of system involves installing solar panels on the ground, allowing for maximum flexibility in terms of panel orientation and tilt.',
    },
    {
      title: '  Solar Carport Power System',
      info: 'This type of system involves constructing a covered parking area equipped with solar panels, providing shade and solar energy at the same time.',
    },
  ];

  const para = [
    'Things to consider before installing solar power system for healthcare and hospital:',
  ];

  const lastListTitle =
    'Before installing a solar power system for a healthcare or hospital facility, it is important to consider the following factors:';

  const lastList = [
    {
      title: 'Energy Requirements',
      info: " A comprehensive analysis of the facility's energy requirements is necessary to determine the size and capacity of the solar power system needed to meet those needs.",
    },
    {
      title: 'Available Space',
      info: ' The amount of available roof or ground space will impact the size of the solar panel system that can be installed.',
    },
    {
      title: 'Local Climate',
      info: 'The local climate will influence the performance of the solar panels and the orientation and tilt of the panels required for optimal performance.',
    },
    {
      title: 'Building Structure',
      info: ' The type of building structure, including roof type and orientation, will impact the feasibility and cost of installing a solar power system.',
    },
    {
      title: ' Electrical Grid',
      info: 'If the facility is connected to the electrical grid, it is important to understand the regulations and requirements for interconnecting a solar power system to the grid.',
    },
    {
      title: ' Maintenance Requirements',
      info: 'Regular maintenance is required to ensure the optimal performance of a solar power system. It is important to understand the maintenance requirements and costs involved before installing a solar power system.',
    },
    {
      title: ' Budget',
      info: 'The cost of a solar power system will vary depending on the size of the system and the location of the facility. It is important to have a clear budget in mind and to consider available financing options before installing a solar power system.',
    },
  ];

  const lastPara = [
    'In conclusion, careful consideration of these factors will help ensure the successful implementation and operation of a solar power system for a healthcare or hospital facility. It is recommended to consult with a professional solar installer to determine the most appropriate solution for a particular facility.',
  ];
  return (
    <>
      <Head>
        <title>SOLAR FOR HEALTHCARE</title>
        <meta name="description" content={metaContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <Landing
          page={'Solar For HealthCare'}
          image={image}
          landingContent={landingContent}
        />
        <Lists content={firstList} title={firstListTitle} />

        <CardList content={cartList} title={cardTitle} />

        <div className="container">
          <p className="margin">
            Types of solar power system available for healthcare & hospital
          </p>
          <p className="margin">
            There are several types of solar power systems available for
            healthcare and hospitals, including:
          </p>
          {secondList.map((item, index) => {
            const { title, info } = item;
            return <Accordian title={title} info={info} id={index} />;
          })}

          <p className="margin">
            When selecting a solar power system for a healthcare facility, it is
            important to consider factors such as the energy requirements of the
            facility, the availability of space, and the local climate. A
            professional solar installer can help determine the most suitable
            type of solar power system for a particular healthcare facility.
          </p>
        </div>
        <Paragraph para={para} />

        <Lists content={lastList} title={lastListTitle} />

        <Paragraph para={lastPara} />

        <Scroll />
      </main>
    </>
  );
};
export default Agriculture;
