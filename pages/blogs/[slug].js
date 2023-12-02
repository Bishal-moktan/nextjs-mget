import moment from 'moment/moment';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import styles from '@/styles/SinglePost.module.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
// import Swiper core and required modules
import { Navigation, Autoplay } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Install Swiper modules
import 'swiper/css';
import 'swiper/css/navigation';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import SimilarPosts from '@/components/blog/SimilarPosts/SimilarPosts';
import CTA from '@/components/about/cta/CTA';
import Scroll from '@/components/ScrollToTop/ScrollToTop';

const SinglePost = () => {
  const { posts } = useSelector((store) => store.blog);
  const router = useRouter();
  const { slug } = router.query;
  const singlePost = posts.filter((post) => post.slug === slug)[0];
  const images = singlePost?.image.split(',');
  const categories = singlePost?.category.split(',');

  const isPresent = (arr, element) => {
    for (let e of arr) {
      if (e === element) {
        return true;
      }
    }
    return false;
  };

  const otherPosts = posts.filter((post) => {
    if (post.id === singlePost?.id) return;
    for (let category of post.category.split(',')) {
      if (isPresent(categories, category)) {
        return post;
      }
    }
  });

  return (
    <>
      <Head>
        <title>{singlePost?.title}</title>
        <meta name="description" content={singlePost?.body} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <div className={`${styles.singlePost} container`}>
        <div className={styles.post}>
          <div className={styles.heading}>
            <div className="text">
              <h1>{singlePost?.title}</h1>
            </div>
            <div className={styles.catContainer}>
              <div className={styles.categories}>
                {categories?.map((category, index) => {
                  return (
                    <div className={styles.category} key={index}>
                      {category}
                    </div>
                  );
                })}
              </div>
              <span className={styles.date}>
                {' '}
                {moment(singlePost?.createdAt).format('dddd, MMMM Do YYYY')}
              </span>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: '.custom-navigation-button-prev',
              nextEl: '.custom-navigation-button-next',
            }}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className={styles.slider}
          >
            {images?.map((img, index) => {
              return (
                <SwiperSlide className={styles.image} key={index}>
                  <Image
                    src={`/images/blog/${img}`}
                    alt="title"
                    width={600}
                    height={400}
                  />
                </SwiperSlide>
              );
            })}
            <div className="custom-navigation-button-prev">
              <AiOutlineLeft />{' '}
            </div>
            <div className="custom-navigation-button-next">
              <AiOutlineRight />
            </div>
          </Swiper>
          <ReactMarkdown
            children={singlePost?.body}
            className={styles.description}
          />
        </div>
        <div className={styles.otherPosts}>
          <h3>Similar Posts</h3>
          {otherPosts?.map((post) => (
            <SimilarPosts post={post} key={post?.id} />
          ))}
        </div>
      </div>
      <CTA />
      <Scroll />
    </>
  );
};

export default SinglePost;
