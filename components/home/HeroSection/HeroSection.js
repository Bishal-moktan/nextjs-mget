import Link from 'next/link';
import styles from './HeroSection.module.css';
import bgImage from '@/public/images/about/about12.webp';
import Image from 'next/image';

export default function App() {
  const altTextBG =
    '325 kw ongrid solar power system installed at Tecumseh Products India Pvt Ltd - BALLABGARH FARIDABAD- HARYANA ON TIN SHED (METRO SHEET)';
  return (
    <>
      <div className={styles.heroSection}>
        <Image
          src={bgImage}
          fill
          sizes="(min-width: 2400px) 100vw, calc(101.01vw - 24px)"
          style={{
            objectFit: 'cover',
          }}
          alt={altTextBG}
          className={styles.backgroundImage}
        />
        <div className={`${styles.content__container}`}>
          <div className={styles.container__fluid}>
            <div className={styles.content}>
              <div className={styles.header}>
                <h1>Switch to Solar</h1>
                <div className={styles.underline}></div>
              </div>
              <p>The Sustainable Energy Solution for your Home or Business</p>
              <div className={styles.btn__container}>
                <a href={'#clients'} className={styles.btn}>
                  Our Portfolio
                </a>
                <Link href={'/contact'} className={styles.btn}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
