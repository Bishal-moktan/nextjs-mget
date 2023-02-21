// import Swiper core and required modules
import { Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import styles from '@/styles/Testimonials.module.css';
import { FaQuoteRight } from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';

const Testimonials = ({ testimonials, showAll }) => {
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
                  <Image
                    src={img}
                    alt={name}
                    height={'auto'}
                    width={'auto'}
                    layout={'responsive'}
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
      <Link href="/testimonials/testimonialsAll">
        {!showAll && <button className={styles.btn}>Read more..</button>}
      </Link>
    </section>
  );
};
export default Testimonials;
