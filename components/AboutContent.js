import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'next/link';
import styles from '@/styles/AboutContent.module.css';
import Image from 'next/image';
import experienceImg from '@/public/svg/intro/experience.svg';
import speedImg from '@/public/svg/intro/speed.svg';
import workmanshipImg from '@/public/svg/intro/workmanship.svg';
import customizableImg from '@/public/svg/intro/customizable.svg';
import managementImg from '@/public/svg/intro/management.svg';

const AboutContent = ({ title }) => {
  return (
    <div className="container">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className={styles.content__description}>
        <p className={styles.margin}>
          Welcome to Maxoptimus Green Energy Technology Pvt Ltd- Mgetenergy,
          best solar power system solution startup (EPC) that is revolutionizing
          the way solar power system is implemented. Founded by Krishna Singh &
          Bhupendra Singh , they saw a need in the market for - comprehensive
          solution for the implementation of solar power system that meets the
          energy needs of its client while reducing the risks and uncertainties
          associated with the process. With a passion for solar power solutions,
          founder's assembled a team of experts with diverse backgrounds to
          bring this innovative service to market.
        </p>
        <p className={styles.margin}>
          Despite the growing demand for clean and renewable energy, many
          individuals and businesses face barriers in adopting solar power
          systems, including lack of access to financing, lack of understanding
          of the technology and benefits, and difficulty in navigating the
          complex process of design, installation, and maintenance. As a solar
          power company, Mgetenergy aim to address these challenges and make it
          easy for our customers to access and utilize solar power, in order to
          promote a sustainable future and reduce dependence on fossil fuels.
        </p>
        <p className={styles.margin}>
          Mgetenergy designs, installs, and maintains systems that convert
          sunlight into electricity. These systems are made up of solar panels,
          an inverter, and other electrical components. The solar panels are
          typically installed on rooftops or in open areas and convert sunlight
          into direct current (DC) electricity. The inverter then converts the
          DC electricity into alternating current (AC) electricity, which is the
          type of electricity that is used in homes and businesses.
        </p>
        <p className={styles.margin}>
          Mgetenergy will typically conduct a site assessment to determine the
          best location and orientation for the solar panels to optimize energy
          production. Then design the system and install the panels, wiring, and
          other electrical components. After installation, the Mgetenergy will
          typically provide ongoing maintenance and monitoring to ensure the
          system is operating at optimal efficiency.
        </p>
        <p className={styles.margin}>
          In addition to designing and installing solar power systems,
          Mgetenergy also provide services such as energy storage solutions,
          energy management systems and consulting on energy efficiency. We also
          offer financing options - power purchase agreements (PPAs) to help
          customers afford the initial cost of the system.
        </p>
        <p className={styles.margin}>
          Mgetenergy help’s to promote a greener future and empower communities
          to produce their own electricity, improving energy independence and
          reducing environmental impact. What sets Mgetenrgy solar power system
          company apart from others is our commitment to providing personalized,
          high-quality service to each and every customer. We understand that
          every home and business has unique energy needs, and we work closely
          with our customers to design custom solar power solutions that meet
          those needs.
        </p>
        <p className={styles.margin}>
          Our mission at Mgetenergy is to provide reliable, sustainable, and
          cost-effective solar power solutions to homes and businesses, while
          reducing dependence on fossil fuels and promoting a greener future. We
          believe that solar power system should be accessible to everyone and
          our goal is to make that a reality. Our flagship service is providing
          solar power solution be it ongrid, offgrid, hybrid any size be it 1KW
          to utility scale.
        </p>

        <p className={styles.margin}>
          The unique offering that sets Mgetenergy apart from our competitors,
          is:
        </p>
        <ul>
          <li className={styles.margin}>
            <span className={styles.icon}>
              <Image src={experienceImg} height={'auto'} width={'auto'} />{' '}
            </span>
            Experience and expertise: Mgetenergy has extensive experience( its
            10 year +) and expertise in the solar EPC industry.
          </li>
          <li className={styles.margin}>
            <span className={styles.icon}>
              <Image src={speedImg} height={'auto'} width={'auto'} />{' '}
            </span>{' '}
            Efficiency and speed: Mgetenergy has proven track record of
            delivering projects on time and within budget.
          </li>
          <li className={styles.margin}>
            <span className={styles.icon}>
              <Image src={workmanshipImg} height={'auto'} width={'auto'} />{' '}
            </span>
            Quality workmanship: Mgetenrgy is known for delivering high-quality
            workmanship and utilizing industry-best practices.
          </li>
          <li className={styles.margin}>
            <span className={styles.icon}>
              <Image src={customizableImg} height={'auto'} width={'auto'} />{' '}
            </span>{' '}
            Customizable solutions: Mgetenrgy offers custom solutions for
            customers based on their specific needs and requirements.
          </li>
          <li className={styles.margin}>
            <span className={styles.icon}>
              <Image src={managementImg} height={'auto'} width={'auto'} />{' '}
            </span>{' '}
            Strong project management: Mgetenergy has a strong project
            management team that can effectively oversee and manage solar
            projects from start to finish.
          </li>
        </ul>
        <p className={styles.margin}>
          The team at Mgetenergy is made up of experts in solar power and IOT.
          From requirement gathering, designing to maintenance, our team brings
          a wealth of knowledge and experience to the table. We are constantly
          pushing the boundaries of what is possible and are dedicated to
          delivering the best service to our customers.
        </p>
        <p className={styles.margin}>
          If you are interested in learning more about Mgetenergy or if you have
          any questions, please don't hesitate to contact us. Our customer
          service team is available to assist you at WA# 98186 66325,or
          email-id: wecare@metenergy.com
        </p>
        <p className={styles.margin}>
          Thank you for considering Mgetenergy as your go-to for solar power
          solution. We look forward to working with you!
        </p>
      </div>
      <table>
        <tbody>
          <tr>
            <td>Bhupendra Singh </td>
            <td>- Founder - CTO</td>
          </tr>
          <tr>
            <td>Krishna Singh </td>
            <td>- Founder - Director</td>
          </tr>
        </tbody>
      </table>
      <p className={styles.margin}>
        Mission: Our mission is to provide reliable, sustainable, and
        cost-effective solar power solutions to homes and businesses, while
        reducing dependence on fossil fuels and promoting a greener future.
      </p>
      <p className={styles.margin}>
        Vision :Our vision is to become a leading provider of clean energy, and
        empower communities through the widespread adoption of solar power
        systems, to achieve a sustainable future for all
      </p>
    </div>
  );
};
export default AboutContent;
