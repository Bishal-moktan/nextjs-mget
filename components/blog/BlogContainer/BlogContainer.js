import { useDispatch, useSelector } from 'react-redux';
import BlogCard from '../BlogCard/BlogCard';
import styles from './BlogContainer.module.css';
import { useEffect, useState } from 'react';
import { fetchBlogPosts } from '@/features/blogSlice/blogSlice';

const BlogContainer = () => {
  const [mounted, setMounted] = useState(false);
  const [offSet, setOffSet] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogPosts(offSet));
    setMounted(true);
  }, [dispatch, offSet]);

  // handle onclick
  const handleOnClick = () => {
    setOffSet((prev) => prev + 6);
  };

  const { posts, loading, totalPosts } = useSelector((store) => store.blog);
  const showLoadMore = posts?.length < +totalPosts;

  if (posts === null) {
    return (
      <div className={styles.noPost}>
        <h2>No posts found</h2>
      </div>
    );
  }

  return (
    mounted && (
      <section>
        <div className={`container ${styles.blogContainer}`}>
          {posts.map((item) => {
            const { id } = item;
            return <BlogCard post={item} key={id} />;
          })}
        </div>
        {showLoadMore && !loading && (
          <div className={styles.loadmore} onClick={handleOnClick}>
            Load More Blogs
          </div>
        )}
        {loading && (
          // Placeholder skeleton while loading
          <div className={`container ${styles.blogContainer}`}>
            {[...Array(6)].map((_, index) => (
              <div
                className={`${styles.blogCard} ${styles.skeleton}`}
                key={index}
              >
                <div
                  className={`${styles.thumbnail} ${styles.skeleton_thumbnail}`}
                ></div>
                <div
                  className={`${styles.title} ${styles.skeleton_text} ${styles.skeleton_text_large}`}
                ></div>
                <div
                  className={`${styles.description} ${styles.skeleton_text} ${styles.skeleton_text_medium}`}
                ></div>
                <div
                  className={`${styles.author} ${styles.skeleton_text} ${styles.skeleton_text_small}`}
                ></div>
              </div>
            ))}
          </div>
        )}
      </section>
    )
  );
};
export default BlogContainer;
