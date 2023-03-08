import Image from 'next/image';
import styles from '@/styles/List.module.css';
const CardList = ({ content, title }) => {
  return (
    <article className="container">
      <p className="margin">{title}</p>
      <div className={styles.cards}>
        {content.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <header>
                <h2>{item.title}</h2>
              </header>
              <div className={styles.icon}>
                <Image src={item.icon} height={'auto'} width={'auto'} />
              </div>
              <div className="content">{item.info}</div>
            </div>
          );
        })}
      </div>
    </article>
  );
};
export default CardList;
