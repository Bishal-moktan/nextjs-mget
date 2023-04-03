import styles from './AboutSection.module.css';
import image from '@/public/images/about/about8.webp';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="aboutSection">
      <div className={`container ${styles.aboutSection__container}`}>
        <div className={styles.aboutSection__image}>
          <Image src={image} alt="about section" />
        </div>
        <div className={styles.aboutSection__description}>
          <h5>ABOUT US</h5>
          <h4 className={styles.textLight}>
            Welcome to Maxoptimus Green Energy Technology Pvt Ltd- Mgetenergy,
            best solar power system solution startup (EPC) that is
            revolutionizing the way solar power system is implemented. Founded
            by Krishna Singh & Bhupendra Singh , they saw a need in the market
            for - comprehensive solution for the implementation of solar power
            system that meets the energy needs of its client while reducing the
            risks and uncertainties associated with the process. With a passion
            for solar power solutions, founder's assembled a team of experts
            with diverse backgrounds to bring this innovative service to market.
          </h4>
          <p>
            Despite the growing demand for clean and renewable energy, many
            individuals and businesses face barriers in adopting solar power
            systems, including lack of access to financing, lack of
            understanding of the technology and benefits, and difficulty in
            navigating the complex process of design, installation, and
            maintenance. As a solar power company, Mgetenergy aim to address
            these challenges and make it easy for our customers to access and
            utilize solar power, in order to promote a sustainable future and
            reduce dependence on fossil fuels.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
