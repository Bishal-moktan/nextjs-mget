import Content from '@/components/Content';
import Lists from '@/components/Lists';
import Paragraph from '@/components/Paragraph';
import Scroll from '@/components/ScrollToTop';
import Head from 'next/head';
import { useSelector } from 'react-redux';

const SolarWaterPump = () => {
  const { metaContent, solutions } = useSelector((store) => store.content);

  const para = [
    'A solar water pump is a type of pump that is powered by solar energy, rather than traditional fossil fuel-based energy. The main components of a solar water pump include solar panels, a solar pump controller, and a water pump. The solar panels convert sunlight into DC electricity, which is then sent to the solar pump controller. The solar pump controller regulates the flow of electricity to the water pump, ensuring that the water pump is able to operate efficiently. The water pump is responsible for pumping water from a well, lake, or other water source to a storage tank or other location.',
    'Solar water pumps are becoming increasingly popular due to their ability to provide a reliable and cost-effective water supply in remote areas where access to electricity is limited. Traditional water pumps that are powered by gasoline or diesel fuel can be expensive to operate, and can also be harmful to the environment. Solar water pumps, on the other hand, are powered by a renewable and clean energy source, and do not produce emissions or pollutants.',
    'Additionally, solar water pumps are low-maintenance and require little upkeep. They have no moving parts and do not require fuel, oil or other consumable items, which can save money in the long run.',
    'Solar water pumps are also versatile and can be used for a variety of applications such as irrigation, livestock watering, and even for drinking water supply. They can also be used to pump water from deep wells or lakes where electric pumps cannot be used.',
    'Solar water pumps are also scalable and can be configured to meet the specific water needs of a home, farm, or other facility. They can be easily expanded as water needs change over time.',
    'However, solar water pumps have some limitations, such as the need for consistent sunlight to function properly, which can be a problem in areas with high cloud cover or heavy rainfall. Additionally, they can be expensive to install, especially if the location is remote, and the cost of transportation and installation is high.',
    'Types of solar water pump',
    'There are several types of solar water pumps, each with their own unique features and benefits. Some of the most common types include:',
  ];

  const list = [
    {
      title: 'Surface Solar Pumps',
      info: 'These pumps are used to pump water from a shallow well, lake, or other water source that is close to the surface. They are the simplest and most cost-effective type of solar water pump.',
    },
    {
      title: 'Submersible Solar Pumps',
      info: 'These pumps are used to pump water from a deeper well or lake. They are more complex and more expensive than surface solar pumps, but are able to pump water from greater depths.',
    },
    {
      title: 'DC Solar Pumps',
      info: 'These pumps are powered by direct current (DC) electricity from solar panels, and are commonly used for small-scale irrigation and livestock watering applications.',
    },
    {
      title: 'AC Solar Pumps',
      info: 'These pumps are powered by alternating current (AC) electricity from solar panels and inverters, and are commonly used for larger-scale irrigation and other applications that require more power.',
    },
    {
      title: 'Hybrid Solar Pumps',
      info: 'These pumps combine solar power with a backup generator or other power source, providing a reliable and consistent water supply even during periods of limited sunlight.',
    },
    {
      title: 'Solar-Powered Borehole Pumps',
      info: 'These pumps are used to pump water from underground wells (boreholes) and are specially designed to operate in this specific environment.',
    },
  ];

  const bodyPara = [
    'Each type of solar water pump has its own advantages and disadvantages, and it is important to choose the right one for your specific application and location. Factors to consider include the depth of the water source, the amount of water needed, and the specific location and climate conditions.',
    'In conclusion, There are several types of solar water pumps available, each with their own unique features and benefits. Some of the most common types include surface solar pumps, submersible solar pumps, DC solar pumps, AC solar pumps, hybrid solar pumps and solar-powered borehole pumps. It is important to choose the right type of solar water pump for your specific application and location to ensure that it operates efficiently and effectively.',
    'Advantages of solar water pumps:',
  ];

  const advantages = [
    {
      title: 'Environmentally friendly',
      info: "Solar water pumps are a clean and renewable source of energy, as they don't emit greenhouse gases or other pollutants.      ",
    },
    {
      title: 'Cost-effective',
      info: 'Solar water pumps can save money on energy costs over the long term, as they rely on free solar energy rather than expensive electricity or fuel.    ',
    },
    {
      title: 'Maintenance-free',
      info: "Solar water pumps are relatively low-maintenance, as they have few moving parts and don't require frequent maintenance or replacements.    ",
    },
    {
      title: 'Reliable',
      info: "Solar water pumps are reliable, as they don't rely on a grid power supply, which can be unreliable in some areas.",
    },
  ];

  const conclusionPara = [
    'In conclusion, solar water pumps are a reliable, cost-effective, and environmentally friendly way to pump water in remote areas where access to electricity is limited. They are powered by a renewable and clean energy source, and do not produce emissions or pollutants. They require little maintenance and can be used for a variety of applications. They are becoming increasingly popular as the cost of solar panels and other equipment continues to decrease. However, they have some limitations such as the need for consistent sunlight and high cost of installation.',
  ];

  const content = (
    <div>
      <Paragraph para={para} />
      <Lists content={list} />
      <Paragraph para={bodyPara} />
      <Lists content={advantages} />
      <Paragraph para={conclusionPara} />
    </div>
  );
  return (
    <>
      <Head>
        <title>SOLAR WATER PUMP INSTALLATION</title>
        <meta name="description" content={metaContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <Content
          title={'Solar Water Pump'}
          description={content}
          items={solutions}
        />
        <Scroll />
      </main>
    </>
  );
};
export default SolarWaterPump;
