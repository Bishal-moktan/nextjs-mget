import Image from 'next/image';
import styles from './Feature.module.css';

const Feature = ({ content, title }) => {
  return (
    <article className="container">
      <p className="margin">{title}</p>
      <div className={styles.cards}>
        {content.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <header className={styles.header}>
                <h3>{item.title} </h3>
              </header>
              <div className={styles.icon}>
                <Image src={item.icon} height={'auto'} width={'auto'} />
              </div>
              <div className={styles.content}>{item.info}</div>
            </div>
          );
        })}
      </div>
    </article>
  );
};
export default Feature;
