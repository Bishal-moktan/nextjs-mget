import Head from 'next/head';
import image from '@/public/svg/industry.svg';
import Landing from '@/components/Landing';

const Industry = () => {
  return (
    <>
      <Head>
        <title>BEST SOLAR FOR INDUSTRY</title>
        <meta name="description" content="Best solar for industry" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <Landing page={'Solar For Industry'} image={image} />
      </main>
    </>
  );
};
export default Industry;
