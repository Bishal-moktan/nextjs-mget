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
    </div>
  );
};
export default AboutContent;
