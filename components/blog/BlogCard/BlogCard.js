import Image from 'next/image';
import styles from './BlogCard.module.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const BlogCard = ({ post }) => {
  const { image, title, body, slug } = post;
  const description = body.substring(0, 150).concat('...');
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={`/images/blog/${image}`}
          alt="title"
          width={200}
          height={400}
        />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
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
