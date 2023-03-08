import styles from '@/styles/Landing.module.css';
import Image from 'next/image';

const Landing = ({ page, image, landingContent }) => {
  return (
    <section className={styles.landing__section}>
      <div className={styles.landing__content}>
        <h2>{page}</h2>
        <p>{landingContent}</p>
      </div>
      <div className={styles.landing_img}>
        <Image src={image} height={'auto'} width={'auto'} />
      </div>
    </section>
  );
};
export default Landing;
