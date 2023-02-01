// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import styles from '@/styles/HeroSection.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image1 from '@/public/images/home/1.webp';
import image2 from '@/public/images/home/2.webp';
import image3 from '@/public/images/home/3.webp';
import image4 from '@/public/images/home/4.webp';
import image5 from '@/public/images/home/5.webp';
import image6 from '@/public/images/home/6.webp';
import image7 from '@/public/images/home/7.webp';

// import required modules
import { Navigation, Mousewheel, Keyboard, Autoplay } from 'swiper';

export default function App() {
  const carousel = [
    {
      id: 1,
      img: image1,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Doloribus dolore id aperiam reiciendis voluptatum consequunturminus nostrum nisi cumque? Eaque quod iusto nisi odio! Laudantium laboriosam tempora odio tenetur fugiat.',
    },
    {
      id: 2,
      img: image2,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Doloribus dolore id aperiam reiciendis voluptatum consequunturminus nostrum nisi cumque? Eaque quod iusto nisi odio! Laudantium laboriosam tempora odio tenetur fugiat.',
    },
    {
      id: 3,
      img: image3,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Doloribus dolore id aperiam reiciendis voluptatum consequunturminus nostrum nisi cumque? Eaque quod iusto nisi odio! Laudantium laboriosam tempora odio tenetur fugiat.',
    },
    {
      id: 4,
      img: image4,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Doloribus dolore id aperiam reiciendis voluptatum consequunturminus nostrum nisi cumque? Eaque quod iusto nisi odio! Laudantium laboriosam tempora odio tenetur fugiat.',
    },
    {
      id: 5,
      img: image5,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Doloribus dolore id aperiam reiciendis voluptatum consequunturminus nostrum nisi cumque? Eaque quod iusto nisi odio! Laudantium laboriosam tempora odio tenetur fugiat.',
    },
    {
      id: 6,
      img: image6,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Doloribus dolore id aperiam reiciendis voluptatum consequunturminus nostrum nisi cumque? Eaque quod iusto nisi odio! Laudantium laboriosam tempora odio tenetur fugiat.',
    },
    {
      id: 7,
      img: image7,
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Doloribus dolore id aperiam reiciendis voluptatum consequunturminus nostrum nisi cumque? Eaque quod iusto nisi odio! Laudantium laboriosam tempora odio tenetur fugiat.',
    },
  ];
  return (
    <>
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
        className="mySwiper"
      >
        {carousel.map((item) => {
          const { id, img, desc } = item;
          return (
            <SwiperSlide key={id}>
              <div className={styles.carousel}>
                <div className="carousel__content">
                  <p>{desc}</p>
                </div>
                <div className={styles.carousel__image}>
                  <Image src={img} height={350} alt={'Solar panel'} />
                </div>
                <div className={styles.wave}>
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                      className={styles.shapefill}
                    ></path>
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
