import heroImg from '../public/images/slider-1-1.jpg';

// import Swiper core and required modules
import { Navigation } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/HeroSection.module.css';

const HeroSection = () => {
  const [showNavigation, setShowNavigation] = useState(true);

  useEffect(() => {
    const screenSize = window.innerWidth;
    if (screenSize < 990) {
      setShowNavigation(false);
    }
    if (screenSize >= 990) {
      setShowNavigation(true);
    }
  }, []);
  return (
    <>
      <Swiper
        modules={[Navigation]}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation={showNavigation}
        className={styles.heroSection}
      >
        <SwiperSlide>
          <Image src={heroImg} alt="hero section" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default HeroSection;
