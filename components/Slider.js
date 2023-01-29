import { useEffect } from 'react';
import Image from 'next/image';

import image1 from '@/public/images/1.gif';
import image2 from '@/public/images/2.gif';
import image3 from '@/public/images/3.gif';
import image4 from '@/public/images/4.gif';
import styles from '@/styles/Slider.module.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={50}
      slidesPerView="auto"
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className={styles.container}
    >
      <SwiperSlide className={styles.slide}>
        <Image src={image1} alt="image1" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image src={image2} alt="image2" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image src={image3} alt="image3" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image src={image4} alt="image4" />
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
