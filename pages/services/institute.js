import Head from 'next/head';
import image from '@/public/svg/institute.svg';
import Landing from '@/components/Landing';

const Institute = () => {
  return (
    <>
      <Head>
        <title>BEST SOLAR FOR INSTITUTES</title>
        <meta name="description" content="Best solar for institutes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <Landing page={'Solar For Institutes'} image={image} />
      </main>
    </>
  );
};
export default Institute;
