import styles from './testimonial.module.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import Image from 'next/image';

const Testimonials = ({ testimonials }) => {
  return (
    <section className={styles.testinomials__container}>
      <div className={`container ${styles.wrapper}`}>
        {testimonials.map((item, index) => {
          const { img, description, name, info } = item;
          return (
            <section key={index} className={styles.testinomials__content}>
              <div className={styles.author}>
                <div className={styles.author__img}>
                  <Image
                    src={img}
                    alt={name}
                    sizes="(min-width: 1000px) 128px, 192px"
                  />
                </div>
                <div className={styles.box}></div>
              </div>
              <div className={styles.info}>
                <div className={styles.author__info}>
                  <h2>{name}</h2>
                  <p>{info}</p>
                </div>
                <div>
                  <FaQuoteLeft className={`${styles.icon} ${styles.left}`} />
                </div>
                {description}
                <div className={styles.right}>
                  <FaQuoteRight className={`${styles.icon} `} />
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};
export default Testimonials;
