import LandingForm from '@/components/LandingForm';
import useGlobalContext from '@/hooks/useGlobalContext';
import Head from 'next/head';

const Contact = () => {
  const { metaContent } = useGlobalContext();
  return (
    <>
      <Head>
        <title>BEST SOLAR POWER SYSTEM INSTALLATION COMPANY</title>
        <meta name="description" content={metaContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        {/* <Landing page="Contact" />p */}
        <LandingForm />
      </main>
    </>
  );
};
export default Contact;
