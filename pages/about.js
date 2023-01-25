import Landing from '@/components/Landing';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About - Mosst Solar | Solar Panel Installation</title>
        <meta
          name="description"
          content="Mosst Solar | Solar Panel Installation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <Landing page="About" />
      </main>
    </>
  );
};
export default About;
