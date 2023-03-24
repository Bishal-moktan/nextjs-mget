import Image from 'next/image';
import styles from './WeOffer.module.css';

import solutionImg from '@/public/images/home/1.webp';
import serviceImg from '@/public/images/home/2.webp';
import ctaImg from '@/public/images/home/3.webp';
import Link from 'next/link';

const WeOffer = () => {
  return (
    <article className={styles.weOffer__container}>
      <Link href={'/solutions'}>
        <div className={`${styles.common__container} ${styles.solutions}`}>
          <div className={styles.image}>
            <Image src={solutionImg} />
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              <h2>Solutions</h2>
              <div className={styles.underline}></div>
            </div>
            <p>
              We provide several types of solar power systems, each with its
              unique features and applications
            </p>
          </div>
        </div>
      </Link>
      <Link href={'/services'}>
        <div className={`${styles.common__container} ${styles.services}`}>
          <div className={styles.image}>
            <Image src={serviceImg} />
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              <h2>Services</h2>
              <div className={styles.underline}></div>
            </div>
            <p>
              We provide several services of solar power system, each with its
              unique features and applications
            </p>
          </div>
        </div>
      </Link>
      <Link href={'/contact'}>
        <div className={`${styles.common__container} ${styles.cta}`}>
          <div className={styles.image}>
            <Image src={ctaImg} />
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              <h2>Go Green with Solar Energy</h2>
              <div className={styles.underline}></div>
            </div>
            <p>Your Path to Clean, Affordable, and Reliable Power</p>
          </div>
        </div>
      </Link>
    </article>
  );
};
export default WeOffer;
