import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Lists from '@/components/Lists/Lists';
import styles from '@/styles/PrivacyPolicy.module.css';
import Scroll from '@/components/ScrollToTop/ScrollToTop';

const PrivacyPolicy = () => {
  const { metaContent, title } = useSelector((store) => store.content);

  //fisrt list content
  const firstListTitle = 'Information We Collect';
  const firstList = [
    {
      title: 'Information you provide to us',
      info: 'We may collect information that you provide to us directly, such as your name, email address, mailing address, telephone number, and other contact information.',
    },
    {
      title: 'Information collected through use of our website',
      info: 'We may collect information about your usage of our website, such as the pages you visit, the amount of time you spend on our site, and the type of device you use to access our site.',
    },
    {
      title: 'Information collected through cookies',
      info: ' We may use cookies and other tracking technologies to collect information about your use of our website. Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences and improve your experience on our site.',
    },
    {
      title: 'Information collected from third-party sources',
      info: 'We may collect information from third-party sources, such as social media platforms, to improve the accuracy of your account information and provide you with a better user experience.',
    },
  ];

  // second list content
  const secondListTitle = 'How We Use Your Information';
  const secondList = [
    {
      title: 'To provide you with our services',
      info: 'We use the information we collect to provide you with the services you request, such as sending you email updates or responding to your support requests.',
    },
    {
      title: 'To improve our website',
      info: 'We use the information we collect to improve our website and make it more user-friendly.',
    },
    {
      title: 'To personalize your experience',
      info: 'We use the information we collect to personalize your experience on our website, such as by providing you with content and advertising that is relevant to your interests.',
    },
    {
      title: 'To communicate with you',
      info: 'We may use the information we collect to communicate with you, such as by sending you emails or notifications about our services.',
    },
    {
      title: 'To comply with legal obligations',
      info: ' We may use the information we collect to comply with legal obligations, such as responding to a subpoena or court order.',
    },
  ];

  // third list content
  const thirdListTitle = 'Sharing of Information';
  const subThirdTitle =
    'We will not sell, rent, or otherwise share your personal information with any third parties, except in the following cases:';
  const thirdList = [
    {
      title: 'With your consent',
      info: 'We may share your information with third parties with your consent, such as when you choose to connect your MGET energy account with a third-party service.',
    },
    {
      title: 'To provide our services',
      info: 'We may share your information with service providers who help us provide our services, such as hosting providers or payment processors.',
    },
    {
      title: 'To comply with legal obligations',
      info: 'We may disclose your information if we believe it is necessary to comply with a legal obligation, such as a subpoena or court order.',
    },
  ];

  // fourth list content
  const fourthListTitle = 'Data Retention';
  const subFourthTitle =
    '    We will retain your personal information for as long as necessary to provide you with our services and comply with legal obligations. Your choices:';
  const fourthList = [
    {
      title: 'Accessing and updating your information',
      info: 'You may access and update your personal information at any time by logging into your MGET Energy account.',
    },
    {
      title: 'Opting out of communication',
      info: 'You may opt out of receiving promotional emails from us by following the unsubscribe instructions in the emails you receive.',
    },
    {
      title: 'Deleting your information',
      info: 'You may delete your MGET Energy account at any time by contacting us at wecare@mgetenergy.com.',
    },
  ];

  return (
    <>
      <Head>
        <title>{title} - Contact</title>
        <meta name="description" content={metaContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
      </Head>
      <main className={`container ${styles.privacy}`}>
        <div className={styles.intro}>
          <h2>Introduction</h2>
          <p>
            At{' '}
            <Link className="orange" href={'/'}>
              MGET energy
            </Link>
            , we are committed to protecting the privacy of our users. This
            Privacy Policy outlines the information we collect, how we use that
            information, and the choices available to our users regarding our
            use of their information. By using{' '}
            <Link className="orange" href={'/'}>
              MGET energy
            </Link>
            , you agree to the terms of this Privacy Policy and our Terms of
            Service.
          </p>
        </div>
        <Lists title={firstListTitle} content={firstList} />
        <Lists title={secondListTitle} content={secondList} />
        <Lists
          title={thirdListTitle}
          subtitle={subThirdTitle}
          content={thirdList}
        />
        <Lists
          content={fourthList}
          title={fourthListTitle}
          subtitle={subFourthTitle}
        />
        <div className={styles.intro}>
          <h2>Security</h2>
          <p>
            We take the security of your personal information seriously and use
            reasonable measures to protect it from unauthorized access, use, or
            disclosure.
          </p>
        </div>
        <Scroll />
      </main>
    </>
  );
};
export default PrivacyPolicy;
