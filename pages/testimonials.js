import Testinomials from '@/components/Testimonials';
import Head from 'next/head';
import { testimonials } from '@/components/data/testimonials';
import Scroll from '@/components/ScrollToTop';
import { useEffect, useState } from 'react';
import styles from '@/styles/Testimonials.module.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import useGlobalContext from '@/hooks/useGlobalContext';

const Testimonials = () => {
  const { metaContent } = useGlobalContext();

  const [content, setContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    setContent(testimonials);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = content.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > currentItem.length) {
        nextPage = 1;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setCurrentPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 1) {
        prevPage = currentItem.length;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setCurrentPage(index);
  };

  return (
    <>
      <Head>
        <title>BEST SOLAR POWER SYSTEM INSTALLATION┬áCOMPANY</title>
        <meta name="description" content={metaContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <Testinomials testimonials={currentItem} />
        <div className={styles.btn__container}>
          <button className={styles.prev__btn} onClick={prevPage}>
            <MdKeyboardArrowLeft />
          </button>
          {currentItem.map((item, index) => {
            return (
              <button
                className={`${styles.index__btn} ${
                  index + 1 === currentPage && styles.active
                }`}
                key={index}
                onClick={() => handlePage(index + 1)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className={styles.next__btn} onClick={nextPage}>
            <MdKeyboardArrowRight />
          </button>
        </div>
        <Scroll />
      </main>
    </>
  );
};
export default Testimonials;
