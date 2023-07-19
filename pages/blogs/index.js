import BlogContainer from '@/components/blog/BlogContainer/BlogContainer';
import BlogLanding from '@/components/blog/BlogLanding/BlogLanding';
import Search from '@/components/blog/Search/Search';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import styles from '@/styles/Blog.module.css';
import { useState } from 'react';

const Blog = () => {
  const { title, metaContent } = useSelector((store) => store.content);
  const [searchResult, setSearchResult] = useState([]);
  return (
    <>
      <Head>
        <title>{title} - Blog</title>
        <meta name="description" content={metaContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <div className={styles.blogLanding}>
        <BlogLanding />
        <div className={styles.blogSearchContainer}>
          <Search setSearchResult={setSearchResult} />
        </div>
      </div>
      <BlogContainer posts={searchResult} />
    </>
  );
};
export default Blog;
