import LandingForm from '@/components/LandingForm';
import Head from 'next/head';
import { useSelector } from 'react-redux';

const Contact = () => {
  const { metaContent, title } = useSelector((store) => store.content);

  return (
    <>
      <Head>
        <title>{title} - Contact</title>
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
