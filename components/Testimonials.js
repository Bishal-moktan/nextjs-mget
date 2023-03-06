import styles from '@/styles/Testimonials.module.css';

import Image from 'next/image';

const Testimonials = ({ testimonials }) => {
  return (
    <section className={styles.testinomials__container}>
      <div className="container">
        <header>
          <h5>TESTIMONIAL</h5>
          <h2>Testimonials</h2>
        </header>

        {testimonials.map((item, index) => {
          const { img, description, name, info } = item;
          return (
            <section key={index} className={styles.testinomials__content}>
              <div className={styles.author}>
                <div className={styles.author__img}>
                  <Image src={img} alt={name} height={'auto'} width={'auto'} />
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
