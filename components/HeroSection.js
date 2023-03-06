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
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
