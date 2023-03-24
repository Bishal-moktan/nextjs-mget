import styles from './Intro.module.css';

const Intro = () => {
  return (
    <article className="container">
      <div className={styles.intro__container}>
        <div className={styles.left}>
          <div className={styles.header}>
            <span>Welcome to</span>
            <h1>MAXOPTIMUS GREEN ENERGY TECHNOLOGY PVT LTD- MGETENERGY</h1>
            <div className={styles.underline}></div>
          </div>
          <p>
            Your go-to solar power company! We are dedicated to providing
            sustainable energy solutions to homes and businesses alike. Our
            mission is to help you reduce your carbon footprint and save money
            on your energy bills.
          </p>
        </div>
        <div className={styles.right}>
          <p className="margin">
            Here at MGETENERGY, we offer a wide range of solar power products
            and services to meet your unique energy needs. Whether you're
            looking to power your home, business, or industrial facility, we
            have the expertise to design and install a customized solar energy
            system that works for you.
          </p>
          <p className="margin">
            Our solar panels, inverter and balance of system is sourced from the
            best manufacturer are made from the highest quality materials and
            are designed to withstand even the harshest weather conditions,
            significantly increase the efficiency and lifespan of a solar energy
            system. These high-quality materials often come with better
            warranties and can provide greater returns on investment in the long
            run.
          </p>
          <p className="margin">
            Our team of experienced professionals will work closely with you to
            understand your energy needs and design a solar energy system that
            fits your requirements. We provide end-to-end services, from
            consultation and design to installation and maintenance, ensuring
            that your solar energy system is running smoothly and efficiently.
          </p>
          <p className="margin">
            By choosing MGETENERGY, you are not only investing in a sustainable
            energy solution, but you are also contributing to a cleaner, greener
            future for generations to come. With our solar power systems, you
            can reduce your carbon footprint, save money on your energy bills,
            and increase the value of your property.
          </p>
        </div>
      </div>
    </article>
  );
};
export default Intro;
