import Link from 'next/link';
import styles from '@/styles/DropDown.module.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';

const DropDown = ({ name, options }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      onClick={() => setShow(!show)}
      className={`${styles.links} ${styles.dropDown}`}
    >
      {name}
      <MdKeyboardArrowDown className={styles.downArrow} />
      <ul
        className={
          show
            ? `${styles.dropDown__content} ${styles.show}`
            : styles.dropDown__content
        }
      >
        {options.map((option, index) => {
          const { title, path } = option;
          return (
            <li key={index}>
              <Link href={`/${path}`} className={styles.links}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default DropDown;
