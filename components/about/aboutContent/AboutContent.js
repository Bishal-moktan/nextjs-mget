import styles from './AboutContent.module.css';

const AboutContent = () => {
  return (
    <div className="container">
      <div className={styles.content__description}>
        <p className={styles.margin}>
          The team at Mgetenergy is made up of experts in solar power and IOT.
          From requirement gathering, designing to maintenance, our team brings
          a wealth of knowledge and experience to the table. We are constantly
          pushing the boundaries of what is possible and are dedicated to
          delivering the best service to our customers.
        </p>
        <p className={styles.margin}>
          If you are interested in learning more about Mgetenergy or if you have
          any questions, please don't hesitate to contact us. Our customer
          service team is available to assist you at WA# 98186 66325,or
          email-id: wecare@metenergy.com
        </p>
        <p className={styles.margin}>
          Thank you for considering Mgetenergy as your go-to for solar power
          solution. We look forward to working with you!
        </p>
      </div>
      <div>
        <div className={styles.nameContainer}>
          <span className={styles.name}>Bhupendra Singh </span>
          <em className={styles.position}>Founder - CTO</em>
        </div>
        <div className={styles.nameContainer}>
          <span className={styles.name}>Krishna Singh </span>
          <em className={styles.position}> Co-Founder - Director</em>
        </div>
      </div>
      <p className={styles.margin}>
        Mission: Our mission is to provide reliable, sustainable, and
        cost-effective solar power solutions to homes and businesses, while
        reducing dependence on fossil fuels and promoting a greener future.
      </p>
      <p className={styles.margin}>
        Vision :Our vision is to become a leading provider of clean energy, and
        empower communities through the widespread adoption of solar power
        systems, to achieve a sustainable future for all
      </p>
    </div>
  );
};
export default AboutContent;
