import Head from 'next/head';
import image from '@/public/svg/company.svg';
import Landing from '@/components/Landing';
import useGlobalContext from '@/hooks/useGlobalContext';
const Company = () => {
  const { metaContent } = useGlobalContext();
  return (
    <>
      <Head>
        <title>BEST SOLAR FOR COMPANY</title>
        <meta name="description" content={metaContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <Landing page={'Solar For Company'} image={image} />
      </main>
    </>
  );
};
export default Company;
