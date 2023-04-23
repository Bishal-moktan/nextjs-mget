import Image from 'next/image';
import styles from './Why.module.css';
const Why = ({ content, title }) => {
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
