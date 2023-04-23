import styles from './AboutSection.module.css';
import image from '@/public/images/about/about8.webp';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="aboutSection">
      <div className={`container ${styles.aboutSection__container}`}>
        <div className={styles.aboutSection__image}>
          <Image
            src={image}
            alt="503 kw ongrid solar power system installed at Tecumseh Products India Pvt Ltd - BALLABGARH FARIDABAD- HARYANA"
          />
        </div>
        <div className={styles.aboutSection__description}>
          <p className={styles.textLight}>
            Welcome to
            <span>
              {' '}
              Maxoptimus Green Energy Technology Pvt Ltd- Mgetenergy{' '}
            </span>
            , best solar power system solution startup (EPC) that is
            revolutionizing the way solar power system is implemented. Founded
            by Krishna Singh & Bhupendra Singh , they saw a need in the market
            for - comprehensive solution for the implementation of solar power
            system that meets the energy needs of its client while reducing the
            risks and uncertainties associated with the process. With a passion
            for solar power solutions, founder's assembled a team of experts
            with diverse backgrounds to bring this innovative service to market.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
