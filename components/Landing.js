import styles from '@/styles/Landing.module.css';
import Image from 'next/image';

const Landing = ({ page, image }) => {
  return (
    <section className={styles.landing__section}>
      <div className={styles.landing__content}>
        <h2>{page}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt et
          beatae exercitationem minus ratione! Perspiciatis deserunt dolor,
          recusandae reiciendis eum fugit quasi nam ea officiis quod atque
          sequi, sit itaque qui suscipit quidem nostrum.
        </p>
      </div>
      <div className={styles.landing_img}>
        <Image src={image} height={'auto'} width={'auto'} />
      </div>
    </section>
  );
};
export default Landing;
