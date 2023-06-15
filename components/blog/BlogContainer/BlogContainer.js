import { useDispatch, useSelector } from 'react-redux';
import BlogCard from '../BlogCard/BlogCard';
import styles from './BlogContainer.module.css';
import { useEffect, useState } from 'react';
import { fetchBlogPosts } from '@/features/blogSlice/blogSlice';
import Loading from '@/components/Loading/Loading';
import Image from 'next/image';

const BlogContainer = () => {
  const [mounted, setMounted] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogPosts());
    setMounted(true);
  }, []);
  const { posts, loading, error } = useSelector((store) => store.blog);
  if (loading) {
    return <Loading />;
  }
  if (posts === null) {
    return (
      <div className={styles.noPost}>
        <h2>No posts found</h2>
      </div>
    );
  }
  return (
    mounted && (
      <div className={`container ${styles.blogContainer}`}>
        {posts.map((item) => {
          const { id } = item;
          return <BlogCard post={item} key={id} />;
        })}
      </div>
    )
  );
};
export default BlogContainer;
