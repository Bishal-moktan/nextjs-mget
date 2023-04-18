import Image from 'next/image';
import styles from './List.module.css';
const CardList = ({ content, title }) => {
  const firstRow = content.slice(0, 3);
  const secondRow = content.slice(3, content.length);
  return (
    <article className={`container ${styles.feature}`}>
      <p className="margin">{title}</p>
      <div className={styles.firstRow}>
        {firstRow.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.icon}>
                <Image src={item.icon} height={'auto'} width={'auto'} />
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
                <Image src={item.icon} height={'auto'} width={'auto'} />
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
export default CardList;
