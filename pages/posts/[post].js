import Loading from '@/components/Loading';
import Menu from '@/components/Menu';
import { deletePost, fetchSinglePost } from '@/features/postSlice/postSlice';
import styles from '@/styles/SinglePost.module.css';
import DOMPurify from 'isomorphic-dompurify';
import moment from 'moment';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

const SinglePost = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { post: postId } = router.query;
  useEffect(() => {
    dispatch(fetchSinglePost(postId));
  }, [postId]);

  const {
    singlePost: post,
    fetchSinglePostLoading,
    deleteComplete,
  } = useSelector((store) => store.post);
  const { user } = useSelector((store) => store.auth);

  const handleDelete = async () => {
    dispatch(deletePost(postId));
  };

  if (deleteComplete) {
    router.replace('/blogs');
  }

  return (
    <>
      <Head>
        <title>BEST SOLAR POWER SYSTEM INSTALLATION COMPANY - Write</title>
        <meta name="description" content={post.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main className="container">
        {fetchSinglePostLoading ? (
          <Loading />
        ) : (
          <div className={styles.single__post}>
            <div className={styles.content}>
              {post?.img && (
                <div className={styles.img__container}>
                  <Image
                    src={post?.img}
                    alt={post?.title}
                    width={200}
                    height={200}
                  />
                </div>
              )}
              <div className={styles.user}>
                {post?.userImg && (
                  <div className={styles.user__img}>
                    <Image src={post.userImg} width={50} height={50} />
                  </div>
                )}
                <div className={styles.user__info}>
                  <span>{post.username}</span>
                  <p>{moment(post.date).fromNow()}</p>
                </div>
                {user?.username === post?.username && (
                  <div className={styles.icons}>
                    <Link href={`/update/${postId}`} className={styles.icon}>
                      <AiOutlineEdit />
                    </Link>
                    <div className={styles.icon} onClick={handleDelete}>
                      <AiOutlineDelete />
                    </div>
                  </div>
                )}
              </div>
              <h1>{post.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(post?.desc),
                }}
              ></div>
            </div>
            <div className={styles.menu}>
              <Menu />
            </div>
          </div>
        )}
      </main>
    </>
  );
};
export default SinglePost;
