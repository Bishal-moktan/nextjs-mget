import Image from 'next/image';
import styles from './BlogCard.module.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import moment from 'moment';

const BlogCard = ({ post }) => {
  const { image, title, body, slug, created_at, category } = post;
  const images = image.split(',');
  const categories = category.split(',');

  const description = body.substring(0, 135).concat('...');
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={`/images/blog/${images[0]}`}
          alt="title"
          width={200}
          height={400}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <div className={styles.categories}>
            {categories.slice(0, 3).map((category, index) => {
              return (
                <p className={styles.category} key={index}>
                  {category}
                </p>
              );
            })}
            {categories?.length > 3 && <p className={styles.category}>...</p>}
          </div>
        </div>
        <div className={styles.description}>
          <ReactMarkdown children={description} />
        </div>
        <div className={styles.info}>
          <Link href={`/blogs/${slug}`}>
            <div className={styles.readMore}>
              <span> Read More</span> <MdKeyboardArrowRight />
            </div>
          </Link>
          <p className={styles.date}>
            {' '}
            {moment(created_at).format('MMMM Do YYYY')}{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
