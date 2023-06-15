import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styles from './Accordian.module.css';

const Accordian = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className={styles.question}>
      <header>
        <h4>{title}</h4>
        <button className={styles.btn} onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <div
        className={
          showInfo ? `${styles.wrapper} ${styles.show}` : styles.wrapper
        }
      >
        <p className={styles.content}>{info}</p>
      </div>
    </article>
  );
};
export default Accordian;
