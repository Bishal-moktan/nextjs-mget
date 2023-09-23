import Link from 'next/link';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.cta__container}`}>
        <div className={styles.text}>
          <span>PLAN TO INSTALL SOLAR</span>
          <h2>Know more, Get Free Consultation!</h2>
        </div>
        <Link href="/contact" className={styles.button}>
          GET IN TOUCH
        </Link>
      </div>
    </section>
  );
};
export default CTA;
