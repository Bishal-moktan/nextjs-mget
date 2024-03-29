// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper';

import styles from './Testimonials.module.css';
import { testimonials } from '@/components/data/testimonials';
import Card from '../Card/Card';

const Testimonials = () => {
  return (
    <article className={`container`}>
      <div className={styles.testimonials__container}>
        <div className={styles.header}>
          <h2>What Clients say about us?</h2>
        </div>
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
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          modules={[Navigation, Autoplay]}
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
