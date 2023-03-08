import styles from '@/styles/Landing.module.css';
import Image from 'next/image';

const Landing = ({ page, image }) => {
  return (
    <section className={styles.landing__section}>
      <div className={styles.landing__content}>
        <h2>{page}</h2>
        <p>
          A solar power system for a housing unit is a renewable energy system
          that uses solar panels to generate electricity for residential homes.
          The system works by capturing the energy from the sun through solar
          panels and converting it into usable electricity that can power
          household appliances, lighting, and other electrical devices. There
          are different types of solar power systems available for housing
          units, including on-grid and off-grid systems. On-grid systems are
          connected to the main electrical grid, while off-grid systems operate
          independently, using batteries to store excess energy for use when
          there is no sunlight.
        </p>
      </div>
      <div className={styles.landing_img}>
        <Image src={image} height={'auto'} width={'auto'} />
      </div>
    </section>
  );
};
export default Landing;
