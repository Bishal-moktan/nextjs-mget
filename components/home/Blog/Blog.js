import Image from 'next/image';
import image from '@/public/images/home/5.webp';
import styles from './Blog.module.css';
import Link from 'next/link';

const Blog = () => {
  return (
    <article className="container">
      <div className={styles.blogContainer}>
        <div className={styles.image}>
          <Image src={image} />
        </div>
        <Link href="/blogs">
          <div className={styles.content}>
            <div className={styles.header}>
              <h1>Learn about solar</h1>
              <div className={styles.underline}></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
              assumenda dolor! Soluta optio magni minus quibusdam minima dolore
              mollitia? Quasi atque inventore fugiat excepturi tenetur
              cupiditate, ea laborum, facilis, possimus doloribus velit sunt
              eaque.
            </p>
          </div>
        </Link>
      </div>
    </article>
  );
};
export default Blog;
