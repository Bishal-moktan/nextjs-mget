import useGlobalContext from '@/hooks/useGlobalContext';
import Head from 'next/head';

const blog = () => {
  const { metaContent } = useGlobalContext();
  return (
    <>
      <Head>
        <title>BEST SOLAR POWER SYSTEM INSTALLATION┬áCOMPANY</title>
        <meta name="description" content={metaContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <h1>Blog</h1>
      </main>
    </>
  );
};
export default blog;
