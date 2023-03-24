// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

import { testimonials } from '@/components/data/testimonials';
import Card from '../Card/Card';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <article className={`container`}>
      <div className={styles.testimonials__container}>
        <p>TESTIMONIALS</p>
        <h1>WHAT THEY SAY ABOUT US</h1>
        <Swiper
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
        >
          {testimonials.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Card {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </article>
  );
};

export default Testimonials;
