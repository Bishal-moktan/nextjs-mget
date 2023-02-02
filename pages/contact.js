import Landing from '@/components/Landing';
import LandingForm from '@/components/LandingForm';
import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>BEST SOLAR POWER SYSTEM INSTALLATION COMPANY</title>
        <meta
          name="description"
          content="Mosst Solar | Solar Panel Installation"
        />
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
