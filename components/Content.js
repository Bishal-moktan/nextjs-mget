import styles from '@/styles/Content.module.css';
import Link from 'next/link';

import { useState } from 'react';
const Content = ({ title, description, items }) => {
  const [value, setValue] = useState(null);
  return (
    <div className="container">
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
      <div className={styles.content__container}>
        <div className={styles.content__title}>
          {items?.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                onClick={() => setValue(index)}
                className={`${styles.btn} ${
                  index === value && `${styles.active_btn}`
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="content__description">{description}</div>
      </div>
    </div>
  );
};
export default Content;
