import Head from 'next/head';
import styles from '@/styles/Blog.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { fetchAllPost } from '@/features/postSlice/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '@/components/Loading';
import { logoutUser } from '@/features/authSlice/authSlice';
import { useRouter } from 'next/router';

export default function Home() {
  const { metaContent, title } = useSelector((store) => store.content);
  const [mounted, setMounted] = useState(false);
  const disptach = useDispatch();
  useEffect(() => {
    disptach(fetchAllPost());
    setMounted(true);
  }, []);

  const router = useRouter();

  const { posts, loading } = useSelector((store) => store.post);
  const { user, logoutComplete } = useSelector((store) => store.auth);

  const handleLogout = () => {
    console.log('logout');
    disptach(logoutUser());
  };

  if (logoutComplete) {
    setTimeout(() => {
      router.reload();
    }, 2000);
  }

  return (
    <>
      <Head>
        <title>{title} - BLOG</title>
        <meta name="description" content={metaContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      {mounted && (
        <main className="container">
          {loading ? (
            <Loading />
          ) : (
            <div className={styles.posts}>
              <div className={styles.blogNav}>
                <h1>Recent Posts</h1>
                <div>
                  {' '}
                  {user?.username ? (
                    <>
                      <button className={styles.btn} onClick={handleLogout}>
                        Admin Logout
                      </button>
                      <Link href={'/write'} className={styles.link}>
                        <button className={styles.btn}>Write</button>
                      </Link>
                    </>
                  ) : (
                    <Link href={'/login'}>
                      {' '}
                      <button className={styles.btn}>Admin Login</button>
                    </Link>
                  )}
                </div>
              </div>

              {posts.map((post) => {
                return (
                  <div className={styles.post} key={post.id}>
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
                    <div className={styles.content}>
                      <Link href={`/posts/${post.id}`}>
                        <h1>{post.title}</h1>
                      </Link>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(
                            post.desc.slice(0, 500).concat(['...'])
                          ),
                        }}
                      ></div>
                      <Link href={`/posts/${post.id}`}>
                        {' '}
                        <button className={styles.btn}>Read more</button>{' '}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </main>
      )}
    </>
  );
}
