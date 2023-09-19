import styles from '@/styles/Testimonials.module.css';

import Image from 'next/image';

const Testimonials = ({ testimonials }) => {
  return (
    <section className={styles.testinomials__container}>
      <div className="container">
        <header className={styles.title}>
          <h2>Testimonials</h2>
        </header>

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
                <div className={styles.author__info}>
                  <h2>{name}</h2>
                  <p>{info}</p>
                </div>
              </div>
              <div className={styles.info}>{description}</div>
            </section>
          );
        })}
      </div>
    </section>
  );
};
export default Testimonials;
