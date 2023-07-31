import Landing from '@/components/Landing/Landing';
import Head from 'next/head';
import image from '@/public/svg/housing.svg';
import solarpanel from '@/public/svg/services/housing/solarpanel.svg';
import inverter from '@/public/svg/services/housing/inverter.svg';
import battery from '@/public/svg/services/housing/battery.svg';
import controller from '@/public/svg/services/housing/controller.svg';
import monitoring from '@/public/svg/services/housing/monitoring.svg';
import CardList from '@/components/CardList/CardList';
import Paragraph from '@/components/Paragraph/Paragraph';
import Scroll from '@/components/ScrollToTop/ScrollToTop';

const Housing = () => {
  const metaDescription =
    'Discover how a solar power system can benefit housing units by generating renewable electricity through solar panels. Learn about on-grid and off-grid systems, and how solar panels, inverters, batteries, and monitoring systems work together to power household appliances and reduce electricity bills. Find out how solar energy can help reduce the carbon footprint of residential homes and increase property value. Considerations for installation, permits, and the amount of sunlight received are also discussed. Harness the power of solar energy for sustainable and cost-effective electricity in your housing unit.';

  const keywords =
    'Solar power system, Housing unit, Renewable energy, Solar panels, Electricity, On-grid systems, Off-grid systems, Inverter, Batteries, Charge controller, Monitoring system, Reduce electricity bills, Carbon footprint, Increased property value.';

  const title = 'Solar For Housing';
  const landingContent =
    'A solar power system for a housing unit is a renewable energy system that uses solar panels to generate electricity for residential homes. The system works by capturing the energy from the sun through solar panels and converting it into usable electricity that can power household appliances, lighting, and other electrical devices. There are different types of solar power systems available for housing units, including on-grid and off-grid systems. On-grid systems are connected to the main electrical grid, while off-grid systems operate independently, using batteries to store excess energy for use when there is no sunlight.';
  const listTitle =
    'The solar power system for a housing unit typically consists of the following components:';
  const lists = [
    {
      title: 'Solar Panels',
      icon: solarpanel,
      info: 'Solar panels are the most important component of a solar power system. They are made up of photovoltaic cells that convert sunlight into electricity. These panels can be mounted on the roof or on a nearby structure, such as a garage or carport.',
    },
    {
      title: 'Inverter',
      icon: inverter,
      info: 'The inverter is a device that converts the direct current (DC) electricity generated by the solar panels into alternating current (AC) electricity that can be used to power household appliances and other devices.',
    },
    {
      title: 'Batteries (for off-grid systems only)',
      icon: battery,
      info: 'If the housing unit is not connected to the main electrical grid, the solar power system will need batteries to store excess energy generated during daylight hours for use when there is no sunlight.',
    },
    {
      title: 'Charge Controller',
      icon: controller,
      info: 'The charge controller regulates the amount of electricity that is sent to the batteries. It prevents overcharging and helps to prolong the life of the batteries.',
    },
    {
      title: 'Monitoring System',
      icon: monitoring,
      info: ' A monitoring system allows homeowners to track the performance of their solar power system. This includes information such as how much electricity is being generated, how much energy is being used, and how much is being stored in the batteries (if applicable).',
    },
  ];

  const para = [
    'The installation of a solar power system in a housing unit can offer several benefits. First, it can significantly reduce electricity bills by generating electricity from a renewable source. Second, it can help reduce the carbon footprint of the household by reducing reliance on fossil fuels. Finally, it can increase the value of the property as solar power systems are becoming more and more popular among homebuyers.',
    "However, there are also some considerations to keep in mind when installing a solar power system in a housing unit. These include the initial cost of installation, which can be expensive, and the fact that the system's effectiveness is dependent on the amount of sunlight that the panels receive. Additionally, the installation of solar panels may require permits from the local government or homeowners association.",
    'In summary, a solar power system for a housing unit is a renewable energy system that uses solar panels to generate electricity for residential homes. It consists of solar panels, an inverter, batteries (for off-grid systems), a charge controller, and a monitoring system. The installation of a solar power system can offer several benefits, including reduced electricity bills, reduced carbon footprint, and increased property value.',
  ];
  return (
    <>
      <Head>
        <title>SOLAR FOR HOUSING</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <Landing page={title} image={image} landingContent={landingContent} />
        <CardList content={lists} title={listTitle} />
        <Paragraph para={para} />
        <Scroll />
      </main>
    </>
  );
};
export default Housing;
