import Lists from '@/components/Lists/Lists';
import metaContent from '@/data/metaContent';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import styles from './jobdescription.module.css';

const JobDescription = () => {
  const router = useRouter();
  const { title, mainUrl } = useSelector((store) => store.content);

  const keywords =
    'ob Openings, Employment Opportunities, Careers, Positions Available, Join Our Team, Vacancies, Work With Us, Hiring, Career Paths, Job Listings, Professional Growth, Employment Benefits, Internships, Apprenticeships, Job Application, Company Culture, Diversity and Inclusion, Employee Development, Talent Acquisition, Recruitment';
  const responsibilities = [
    {
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque expedita debitis neque est consequatur? Maiores explicaboneque quod accusamus sint quisquam sunt dolore soluta? Fugit quibusdam veritatis dolore atque amet consectetur deserunt.',
    },
    {
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque expedita debitis neque est consequatur? Maiores explicaboneque quod accusamus sint quisquam sunt dolore soluta? Fugit quibusdam veritatis dolore atque amet consectetur deserunt.',
    },
    {
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque expedita debitis neque est consequatur? Maiores explicaboneque quod accusamus sint quisquam sunt dolore soluta? Fugit quibusdam veritatis dolore atque amet consectetur deserunt.',
    },
    {
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque expedita debitis neque est consequatur? Maiores explicaboneque quod accusamus sint quisquam sunt dolore soluta? Fugit quibusdam veritatis dolore atque amet consectetur deserunt.',
    },
  ];
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
      <main className="container">
        <div className={styles.description}>
          <h2>Business Analyst</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque
            expedita debitis neque est consequatur? Maiores nobis explicabo
            neque quod accusamus sint quisquam sunt dolore soluta? Fugit
            quibusdam veritatis dolore atque amet consectetur deserunt
            blanditiis quaerat! A eligendi aliquam ipsum. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Blanditiis nemo soluta temporibus
            nesciunt eveniet ullam dolore, rerum at minus dignissimos aperiam
            numquam molestiae, praesentium inventore ex enim vero nam! Rem
            ratione quidem perspiciatis quaerat officia a adipisci eius,
            voluptatem facere cumque quo natus repellendus excepturi quae sit
            id. Ullam dicta, voluptates asperiores ipsum eaque quis quod sit
            nobis ex! Provident tempora reprehenderit dolor quo recusandae qui
            debitis minus earum consequuntur, asperiores consectetur magni harum
            ullam natus incidunt tempore quibusdam vel eveniet? Dolorum impedit,
            corporis perspiciatis vitae, iusto beatae delectus sit quasi
            corrupti error iste nostrum. Quaerat repellendus quidem maiores
            quae!
          </p>
          <Lists title={'Responsibilities'} content={responsibilities} />
          <Lists title={'Qualifications'} content={responsibilities} />
        </div>
      </main>
    </>
  );
};
export default JobDescription;
