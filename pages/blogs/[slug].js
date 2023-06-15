import moment from 'moment/moment';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import styles from '@/styles/SinglePost.module.css';
import BlogCard from '@/components/blog/BlogCard/BlogCard';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const SinglePost = () => {
  const { metaContent, title } = useSelector((store) => store.content);
  const { posts } = useSelector((store) => store.blog);
  const router = useRouter();
  const { slug } = router.query;
  const singlePost = posts.filter((post) => post.slug === slug)[0];
  const otherPosts = posts.filter((post) => post.slug !== slug).slice(0, 2);
  return (
    <>
      <Head>
        <title>{title} - Blog</title>
        <meta name="description" content={metaContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <div className={`${styles.singlePost} container`}>
        <div className={styles.post}>
          <h1>{singlePost?.title}</h1>
          <span>
            {' '}
            {moment(singlePost?.createdAt).format('dddd, MMMM Do YYYY')}
          </span>
          <div className={styles.image}>
            <Image
              src={`/images/blog/${singlePost?.image}`}
              alt="title"
              width={600}
              height={400}
            />
          </div>
          <ReactMarkdown children={singlePost?.body} />
        </div>
        <div className={styles.otherPosts}>
          <h3>Other Posts</h3>
          {otherPosts.map((post) => (
            <BlogCard post={post} key={post.id} />
          ))}
        </div>
      </div>
    </>
  );
};
export default SinglePost;
