import { loginUser } from '@/features/authSlice/authSlice';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Login.module.css';

const Login = () => {
  const { metaContent } = useSelector((store) => store.post);

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const { error, loading, loginComplete } = useSelector((store) => store.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(inputs));
  };

  if (loginComplete) {
    setTimeout(() => {
      router.replace('/blogs');
    }, 2000);
  }

  return (
    <>
      <Head>
        <title>BEST SOLAR POWER SYSTEM INSTALLATION COMPANY - BLOG</title>
        <meta name="description" content={metaContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <div className={styles.auth}>
        <h1>Admin Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleOnChange}
            name="username"
            placeholder="username"
          />
          <input
            type="password"
            onChange={handleOnChange}
            name="password"
            placeholder="password"
          />
          <button>{loading ? 'Logging in' : 'Log in'}</button>
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
    </>
  );
};
export default Login;
