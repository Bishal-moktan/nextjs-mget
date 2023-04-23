import styles from './Description.module.css';
import firstImage from '../../../public/images/home/6.webp';
import secondImage from '../../../public/images/home/8.webp';
import thirdImage from '../../../public/images/about/about11.webp';
import fourthImage from '../../../public/images/about/about5.webp';
import fifthImage from '../../../public/images/about/about10.webp';
import sixthImage from '../../../public/images/home/3.webp';

import Image from 'next/image';

const Description = () => {
  const content = [
    {
      title: (
        <h2 className={styles.title}>
          {' '}
          <span>
            The Future is Bright with Solar Power: Unlock the Potential of
            Renewable Energy
          </span>
        </h2>
      ),
      desc: 'Despite the growing demand for clean and renewable energy, many individuals and businesses face barriers in adopting solar power systems, including lack of access to financing, lack of understanding of the technology and benefits, and difficulty in navigating the complex process of design, installation, and maintenance. As a solar power company, Mgetenergy aim to address these challenges and make it easy for our customers to access and utilize solar power, in order to promote a sustainable future and reduce dependence on fossil fuels.',
      img: firstImage,
      altText:
        '15 KW ONGRID SOLAR POWER SYSTEM INSTALLED AT DLF FARM, SOUTHERN DRIVE, CHHATARPUR, DELHI',
    },
    {
      title: (
        <h2 className={styles.title}>
          {' '}
          <span>
            Powering Your Life with Solar Energy: Harness the Sun's Energy for a
            Brighter Future{' '}
          </span>
        </h2>
      ),
      desc: 'Mgetenergy designs, installs, and maintains systems that convert sunlight into electricity. These systems are made up of solar panels, an inverter, and other electrical components. The solar panels are typically installed on rooftops or in open areas and convert sunlight into direct current (DC) electricity. The inverter then converts the DC electricity into alternating current (AC) electricity, which is the type of electricity that is used in homes and businesses.',
      img: secondImage,
      altText:
        '250 KW/600V 600 KWH GEL BATTERY BASED HYBRID MICROGRID SOLAR POWER SYSTEM INSTALLED AT KAPIL MUNI AGRO FOODS PVT LTD, BEWAR MAINPURI UTTAR PRADESH',
    },
    {
      title: (
        <h2 className={styles.title}>
          {' '}
          <span>
            Solar Energy: A Sustainable Solution for a Greener Tomorrow{' '}
          </span>
        </h2>
      ),
      desc: 'Mgetenergy will typically conduct a site assessment to determine the best location and orientation for the solar panels to optimize energy production. Then design the system and install the panels, wiring, and other electrical components. After installation, the Mgetenergy will typically provide ongoing maintenance and monitoring to ensure the system is operating at optimal efficiency.',
      img: thirdImage,
      altText:
        '175 KW  ongrid solar power system installed at Tecumseh Products India Pvt Ltd - BALLABGARH FARIDABAD- HARYANA ON RCC ROOFTOP',
    },
    {
      title: (
        <h2 className={styles.title}>
          {' '}
          <span>Save Money and Save the Planet with Solar Energy</span>
        </h2>
      ),
      desc: 'In addition to designing and installing solar power systems, Mgetenergy also provide services such as energy storage solutions, energy management systems and consulting on energy efficiency. We also offer financing options - power purchase agreements (PPAs) to help customers afford the initial cost of the system.Mgetenergy help’s to promote a greener future and empower communities to produce their own electricity, improving energy independence and reducing environmental impact. ',
      img: fourthImage,
      altText:
        '175 KW  ongrid solar power system installed at Tecumseh Products India Pvt Ltd - BALLABGARH FARIDABAD- HARYANA ON RCC ROOFTOP',
    },
    {
      desc: 'What sets Mgetenrgy solar power system company apart from others is our commitment to providing personalized, high-quality service to each and every customer. We understand that every home and business has unique energy needs, and we work closely with our customers to design custom solar power solutions that meet those needs.',
      img: fifthImage,
      altText:
        '175 KW  ongrid solar power system installed at Tecumseh Products India Pvt Ltd - BALLABGARH FARIDABAD- HARYANA ON RCC ROOFTOP',
    },
    {
      desc: 'Our mission at Mgetenergy is to provide reliable, sustainable, and cost-effective solar power solutions to homes and businesses, while reducing dependence on fossil fuels and promoting a greener future. We believe that solar power system should be accessible to everyone and our goal is to make that a reality. Our flagship service is providing solar power solution be it ongrid, offgrid, hybrid any size be it 1KW to utility scale.',
      img: sixthImage,
      altText:
        '400 KW ONGRID SOLAR PPOWER SYSTEM INSTALLED AT MAGICRETE BUILDING SOLUTIONS- JHAJJHAR- HARYANA ON TIN SHED (METRO SHEET)',
    },
  ];
  return (
    <div className={`container ${styles.description}`}>
      {content.map((item, index) => {
        return (
          <div className={styles.item} key={index}>
            {item?.img && (
              <div className={styles.img__container}>
                <Image src={item?.img} alt={item?.altText} />
              </div>
            )}
            <div className={styles.content}>
              {item.title}
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Description;
