import JobItem from '@/components/careers/jobitem/JobItem';
import Header from '@/components/header/Header';
import metaContent from '@/data/metaContent';
import { navLinksIndex } from '@/data/navbarData';
import { changeActiveNavLink } from '@/features/contentSlice/contentSlice';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Careers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeActiveNavLink(navLinksIndex.careers));
  }, []);
  const keywords =
    'ob Openings, Employment Opportunities, Careers, Positions Available, Join Our Team, Vacancies, Work With Us, Hiring, Career Paths, Job Listings, Professional Growth, Employment Benefits, Internships, Apprenticeships, Job Application, Company Culture, Diversity and Inclusion, Employee Development, Talent Acquisition, Recruitment';
  const { title, mainUrl } = useSelector((store) => store.content);
  return (
    <>
      <Head>
        <title>{title} - Careers</title>
        <meta name="description" content={metaContent} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/fav.png" />
        <link rel="canonical" href={mainUrl} />
      </Head>
      <Header name={'JOIN OUR TEAM'} />
      <main className="container">
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
      </main>
    </>
  );
};
export default Careers;
