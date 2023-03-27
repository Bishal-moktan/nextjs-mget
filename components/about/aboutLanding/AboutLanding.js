import Image from 'next/image';
import styles from './AboutLanding.module.css';
import backImg from '@/public/images/about/about1.webp';
import middleImg from '@/public/images/about/about2.webp';
import Carousel from '../carousel/Carousel';

const AboutLanding = () => {
  const aboutDescription = [
    "Welcome to Maxoptimus Green Energy Technology Pvt Ltd- Mgetenergy, best solar power system solution startup (EPC) that is revolutionizing the way solar power system is implemented. Founded by Krishna Singh & Bhupendra Singh , they saw a need in the market for - comprehensive solution for the implementation of solar power system that meets the energy needs of its client while reducing the risks and uncertainties associated with the process. With a passion for solar power solutions, founder's assembled a team of experts with diverse backgrounds to bring this innovative service to market.",
    'Despite the growing demand for clean and renewable energy, many individuals and businesses face barriers in adopting solar power systems, including lack of access to financing, lack of understanding of the technology and benefits, and difficulty in navigating the complex process of design, installation, and maintenance. As a solar power company, Mgetenergy aim to address these challenges and make it easy for our customers to access and utilize solar power, in order to promote a sustainable future and reduce dependence on fossil fuels.',
    'Mgetenergy designs, installs, and maintains systems that convert sunlight into electricity. These systems are made up of solar panels, an inverter, and other electrical components. The solar panels are typically installed on rooftops or in open areas and convert sunlight into direct current (DC) electricity. The inverter then converts the DC electricity into alternating current (AC) electricity, which is the type of electricity that is used in homes and businesses.',
    'Mgetenergy will typically conduct a site assessment to determine the best location and orientation for the solar panels to optimize energy production. Then design the system and install the panels, wiring, and other electrical components. After installation, the Mgetenergy will typically provide ongoing maintenance and monitoring to ensure the system is operating at optimal efficiency.',
    'In addition to designing and installing solar power systems, Mgetenergy also provide services such as energy storage solutions, energy management systems and consulting on energy efficiency. We also offer financing options - power purchase agreements (PPAs) to help customers afford the initial cost of the system.',
    'Mgetenergy help’s to promote a greener future and empower communities to produce their own electricity, improving energy independence and reducing environmental impact. What sets Mgetenrgy solar power system company apart from others is our commitment to providing personalized, high-quality service to each and every customer. We understand that every home and business has unique energy needs, and we work closely with our customers to design custom solar power solutions that meet those needs.',
    'Our mission at Mgetenergy is to provide reliable, sustainable, and cost-effective solar power solutions to homes and businesses, while reducing dependence on fossil fuels and promoting a greener future. We believe that solar power system should be accessible to everyone and our goal is to make that a reality. Our flagship service is providing solar power solution be it ongrid, offgrid, hybrid any size be it 1KW to utility scale.',
  ];
  return (
    <div className={styles.landing__container}>
      <div className={styles.content}>
        <Carousel content={aboutDescription} />
      </div>
      <div className={styles.backImg}>
        <Image src={backImg} alt={backImg} />
      </div>
      <div className={styles.middleImg}>
        <Image src={middleImg} alt={middleImg} />
      </div>
      <div className={styles.background}></div>
    </div>
  );
};
export default AboutLanding;
