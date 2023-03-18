import { fetchAllPost } from '@/features/postSlice/postSlice';
import styles from '@/styles/Menu.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Menu = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((store) => store.post);

  useEffect(() => {
    dispatch(fetchAllPost());
  }, []);

  return (
    <div>
      <h2>Others post you may like</h2>
      <div className={styles.menu}>
        {posts.slice(0, 3).map((post) => {
          return (
            <div className={styles.post} key={post.id}>
              <div className={styles.img__container}>
                <Image
                  src={post.img}
                  alt={post.title}
                  width={200}
                  height={200}
                />
              </div>
              <h2>{post.title}</h2>
              <Link href={`/posts/${post.id}`}>
                {' '}
                <button>Read more</button>{' '}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Menu;
