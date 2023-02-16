import Head from 'next/head';
import image from '@/public/svg/agriculture.svg';
import Landing from '@/components/Landing';

const Agriculture = () => {
  return (
    <>
      <Head>
        <title>BEST SOLAR FOR AGRICULTURE</title>
        <meta name="description" content="Best solar for agriculure" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <Landing page={'Solar For Agriculure'} image={image} />
      </main>
    </>
  );
};
export default Agriculture;
