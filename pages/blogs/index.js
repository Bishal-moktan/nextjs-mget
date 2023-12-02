import BlogContainer from '@/components/blog/BlogContainer/BlogContainer';
import BlogLanding from '@/components/blog/BlogLanding/BlogLanding';
import Search from '@/components/blog/Search/Search';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import styles from '@/styles/Blog.module.css';
import { useEffect, useState } from 'react';
import { addPost } from '@/features/blogSlice/blogSlice';
import { wrapper } from '@/store/store';
import axios from 'axios';
import { url } from '@/data/baseUrl';
import { changeActiveNavLink } from '@/features/contentSlice/contentSlice';
import { navLinksIndex } from '@/data/navbarData';

const Blog = () => {
  const { title, metaContent } = useSelector((store) => store.content);
  const [searchResult, setSearchResult] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeActiveNavLink(navLinksIndex.blogs));
  }, []);
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const res = await axios(`${url}/server.php?offset=${0}`);
    store.dispatch(addPost(res?.data));
  }
);

export default Blog;
