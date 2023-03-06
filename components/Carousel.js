// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Keyboard, Autoplay } from 'swiper';

import image1 from '@/public/images/home/8.webp';
import image2 from '@/public/images/about/about1.webp';
import image3 from '@/public/images/about/about3.webp';
import image4 from '@/public/images/about/about4.webp';
import image5 from '@/public/images/about/about12.webp';
import image6 from '@/public/images/about/about9.webp';
import image7 from '@/public/images/about/about11.webp';
import image8 from '@/public/images/about/about10.webp';

import styles from '@/styles/Carousel.module.css';
import Image from 'next/image';

const Carousel = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
        loop={true}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide className={styles.carousel__container} key={index}>
              <Image src={image} alt={image} height={'auto'} width={'auto'} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Carousel;
