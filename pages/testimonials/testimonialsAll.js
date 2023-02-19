import Testinomials from '@/components/Testimonials';
import Head from 'next/head';
import { testimonials } from '@/components/data/testimonials';
import Scroll from '@/components/ScrollToTop';

const testinomialsAll = () => {
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
        <Testinomials testimonials={testimonials} showAll={true} />
        <Scroll />
      </main>
    </>
  );
};
export default testinomialsAll;
