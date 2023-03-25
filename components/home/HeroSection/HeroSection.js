import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function App() {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={`${styles.content__container}`}>
          <div className={styles.container__fluid}>
            <div className={styles.content}>
              <div className={styles.header}>
                <h1>Switch to Solar</h1>
                <div className={styles.underline}></div>
              </div>
              <p>The Sustainable Energy Solution for your Home or Business</p>
              <div className={styles.btn__container}>
                <button className={styles.btn}>Our Portfolio</button>
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
