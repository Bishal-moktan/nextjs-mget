import Image from 'next/image';
import styles from './BlogCard.module.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import moment from 'moment';

const BlogCard = ({ post }) => {
  const { image, title, body, slug, created_at, category } = post;
  const images = image.split(',');
  const description = body.substring(0, 150).concat('...');
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
        <h2>{title}</h2>
        <div className={styles.info}>
          <p className={styles.category}>{category}</p>
          <p className={styles.date}>
            {' '}
            {moment(created_at).format('MMMM Do YYYY')}{' '}
          </p>
        </div>
        <ReactMarkdown children={description} />
      </div>
      <Link href={`/blogs/${slug}`}>
        <div className={styles.readMore}>
          <span> Read More</span> <MdKeyboardArrowRight />
        </div>
      </Link>
    </div>
  );
};
export default BlogCard;
