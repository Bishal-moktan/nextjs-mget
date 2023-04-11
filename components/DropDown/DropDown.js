import Link from 'next/link';
import styles from './DropDown.module.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';
import { changeActive } from '@/features/contentSlice/contentSlice';
import { useDispatch } from 'react-redux';

const DropDown = ({ name, options, path }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (index) => {
    dispatch(changeActive(index));
  };
  return (
    <div
      onClick={() => setShow(!show)}
      className={`${styles.links} ${styles.dropDown}`}
    >
      <Link href={path} className={styles.links}>
        {name}
        <MdKeyboardArrowDown className={styles.downArrow} />
      </Link>
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
            <li key={index} className={styles.dropDown__item}>
              <Link
                href={`${path}`}
                className={styles.links}
                onClick={() => handleClick(index)}
              >
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
