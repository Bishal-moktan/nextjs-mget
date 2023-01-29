import styles from '@/styles/CTA.module.css';
import Link from 'next/link';

const CTA = ({ title, info }) => {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.cta__container}`}>
        <div className="text">
          <h4>{title}</h4>
          <h1>{info}</h1>
        </div>
        <Link href="/contact" className={styles.button}>
          GET IN TOUCH
        </Link>
      </div>
    </section>
  );
};
export default CTA;
