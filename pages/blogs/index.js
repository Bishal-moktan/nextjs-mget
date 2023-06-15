import BlogContainer from '@/components/blog/BlogContainer/BlogContainer';
import BlogLanding from '@/components/blog/BlogLanding/BlogLanding';
import axios from 'axios';
import Head from 'next/head';
import { useSelector } from 'react-redux';

const Blog = () => {
  const { title, metaContent } = useSelector((store) => store.content);
  return (
    <>
      <Head>
        <title>{title} - Blog</title>
        <meta name="description" content={metaContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <BlogLanding />
      <BlogContainer />
    </>
  );
};
export default Blog;
