import Link from 'next/link';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.cta__container}`}>
        <div className="text">
          <h4>PLAN TO INSTALL SOLAR</h4>
          <h1>Know more, Get Free Consultation!</h1>
        </div>
        <Link href="/contact" className={styles.button}>
          GET IN TOUCH
        </Link>
      </div>
    </section>
  );
};
export default CTA;
