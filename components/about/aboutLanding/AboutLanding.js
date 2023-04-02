import Image from 'next/image';
import styles from './AboutLanding.module.css';
import backImg from '@/public/images/home/4.webp';
import middleImg from '@/public/images/about/about5.webp';

const AboutLanding = () => {
  return (
    <div className={styles.landing__container}>
      <div className={styles.back}>
        <Image src={backImg} alt={'employee image first'} />
      </div>
      <div className={styles.middle}>
        <Image src={middleImg} alt={'employee image second'} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>About Us</h1>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.desc}>
          <p>
            {' '}
            Welcome to Maxoptimus Green Energy Technology Pvt Ltd- Mgetenergy,
            best solar power system solution startup (EPC) that is
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
      <div className={styles.background}></div>
    </div>
  );
};
export default AboutLanding;
