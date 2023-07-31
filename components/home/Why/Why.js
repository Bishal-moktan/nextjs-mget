import Image from 'next/image';
import experienceImg from '@/public/svg/intro/experience.svg';
import speedImg from '@/public/svg/intro/speed.svg';
import workmanshipImg from '@/public/svg/intro/workmanship.svg';
import customizableImg from '@/public/svg/intro/customizable.svg';
import managementImg from '@/public/svg/intro/management.svg';
import styles from './Why.module.css';
const Why = () => {
  const title = 'Why MGET Energy?';
  const content = [
    {
      title: 'Experience and expertise',
      icon: experienceImg,
      info: '10+ years of extensive experience and expertise in the solar EPC industry',
    },
    {
      title: 'Efficiency and speed',
      icon: speedImg,
      info: 'Proven track records of delivering project on time and within budget',
    },
    {
      title: 'Quality workmanship',
      icon: workmanshipImg,
      info: 'Known for delivering high quality workmanship and utilizing industry best practices',
    },
    {
      title: 'Customizable solutions',
      icon: customizableImg,
      info: 'Offers custom solutions to customer based on their specific needs and requirements',
    },
    {
      title: 'Strong project management',
      icon: managementImg,
      info: 'A team that can effectively manage and oversee solar projects from start to finish',
    },
  ];
  const firstRow = content.slice(0, 3);
  const secondRow = content.slice(3, content.length);
  return (
    <article className={`container ${styles.feature}`}>
      <div className={styles.title}>
        <h2 className="margin">{title}</h2>
      </div>
      <div className={styles.firstRow}>
        {firstRow.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.icon}>
                <Image
                  src={item.icon}
                  height={'auto'}
                  width={'auto'}
                  alt={item.title + 'icon'}
                />
              </div>
              <header className={styles.header}>
                <h3>{item.title} </h3>
              </header>
              <div className={styles.content}>{item.info}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.secondRow}>
        {secondRow.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.icon}>
                <Image
                  src={item.icon}
                  height={'auto'}
                  width={'auto'}
                  alt={item.title + 'icon'}
                />
              </div>
              <header className={styles.header}>
                <h3>{item.title} </h3>
              </header>
              <div className={styles.content}>{item.info}</div>
            </div>
          );
        })}
      </div>
    </article>
  );
};
export default Why;
