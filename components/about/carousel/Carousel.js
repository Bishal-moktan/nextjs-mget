// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Keyboard, Pagination, Autoplay } from 'swiper';

import styles from './Carousel.module.css';

const Carousel = ({ content }) => {
  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[EffectCoverflow, Keyboard, Pagination, Autoplay]}
        effect={'coverflow'}
        grabCursor={true}
        pagination={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        keyboard={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
      >
        {content.map((desc, index) => {
          return (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.header}>
                <h1>About Us</h1>
                <div className={styles.underline}></div>
              </div>
              <p>{desc}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Carousel;
