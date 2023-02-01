// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Keyboard, Autoplay } from 'swiper';

import image1 from '@/public/images/about/about1.webp';
import image2 from '@/public/images/about/about2.webp';
import image3 from '@/public/images/about/about3.webp';
import image4 from '@/public/images/about/about4.webp';

import styles from '@/styles/Carousel.module.css';
import Image from 'next/image';

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <Swiper
        loop={true}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className={styles.carousel__container}>
          <Image src={image1} alt="image1" />
        </SwiperSlide>
        <SwiperSlide className={styles.carousel__container}>
          <Image src={image2} alt="image2" />
        </SwiperSlide>
        <SwiperSlide className={styles.carousel__container}>
          <Image src={image3} alt="image3" />
        </SwiperSlide>
        <SwiperSlide className={styles.carousel__container}>
          <Image src={image4} alt="image4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Carousel;
