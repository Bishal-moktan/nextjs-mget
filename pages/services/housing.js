import Landing from '@/components/Landing';
import Head from 'next/head';
import image from '@/public/svg/housing.svg';

const Housing = () => {
  return (
    <>
      <Head>
        <title>BEST SOLAR FOR HOUSING</title>
        <meta name="description" content="Best solar for housing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <Landing page={'Solar For Housing'} image={image} />
      </main>
    </>
  );
};
export default Housing;
