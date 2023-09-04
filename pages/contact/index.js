import LandingForm from '@/components/LandingForm/LandingForm';
import { navLinksIndex } from '@/data/navbarData';
import { changeActiveNavLink } from '@/features/contentSlice/contentSlice';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Contact = () => {
  const { metaContent, title } = useSelector((store) => store.content);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeActiveNavLink(navLinksIndex.contact));
  }, []);

  return (
    <>
      <Head>
        <title>{title} - Contact</title>
        <meta name="description" content={metaContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main>
        <LandingForm />
      </main>
    </>
  );
};
export default Contact;
