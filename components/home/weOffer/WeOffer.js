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
            <Image
              src={solutionImg}
              alt="15 KW ONGRID SOLAR POWER SYSTEM INSTALLED AT DLF FARM, SOUTHERN DRIVE, CHHATARPUR, DELHI"
            />
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
            <Image
              src={serviceImg}
              alt="40 KW ONGRID SOLAR POWER SYSTEM INSTALLED AT LIBERAL TRADERS PVT LTD, B-84/1 , OKHLA PHASE 2, OKHLA IND AREA, NEW DELHI 110020"
            />
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
            <Image
              src={ctaImg}
              alt="400 KW ONGRID SOLAR PPOWER SYSTEM INSTALLED AT MAGICRETE BUILDING SOLUTIONS- JHAJJHAR- HARYANA ON TIN SHED (METRO SHEET)"
            />
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
