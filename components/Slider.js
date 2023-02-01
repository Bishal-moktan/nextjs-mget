import Image from 'next/image';

import image1 from '@/public/images/home/1.webp';
import image2 from '@/public/images/home/2.webp';
import image3 from '@/public/images/home/6.webp';
import image4 from '@/public/images/home/7.webp';
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
        delay: 1000,
        disableOnInteraction: false,
      }}
      className={styles.container}
    >
      <SwiperSlide className={styles.slide}>
        <Image src={image1} height={300} alt="image1" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image src={image2} height={300} alt="image2" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image src={image3} height={300} alt="image3" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image src={image4} height={300} alt="image4" />
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
