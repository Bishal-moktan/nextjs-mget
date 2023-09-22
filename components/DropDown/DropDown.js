import Link from 'next/link';
import styles from './DropDown.module.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { changeActive } from '@/features/contentSlice/contentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { navLinksIndex } from '@/data/navbarData';

const DropDown = ({ name, options, path }) => {
  const [columns, setColumns] = useState('');
  const { activeNavLink } = useSelector((store) => store.content);
  const dispatch = useDispatch();
  const handleClick = (index) => {
    dispatch(changeActive(index));
  };

  useEffect(() => {
    if (options.length > 2) {
      setColumns('col__2');
    } else {
      setColumns('col__1');
    }
  }, []);

  const dropDownClass = ` ${styles.dropDown__content} ${styles[columns]} ${styles.show}`;

  const currentNav =
    name === 'SOLUTIONS' ? navLinksIndex.solutions : navLinksIndex.services;
  return (
    <div className={`${styles.links} ${styles.dropDown}`}>
      <Link
        href={path}
        className={
          activeNavLink === currentNav
            ? `${styles.links} ${styles.active}`
            : styles.links
        }
      >
        {name}
        <MdKeyboardArrowDown className={styles.downArrow} />
      </Link>
      <ul className={dropDownClass}>
        {options.map((option, index) => {
          const { title, path, icon, slogan } = option;
          return (
            <li key={index} className={styles.dropDown__item}>
              <Link
                href={`${path}`}
                className={styles.links}
                onClick={() => handleClick(index)}
              >
                <div className={styles.icon}>{icon}</div>
                <div className={styles.link}>
                  <h3 className={styles.linkTitle}>{title}</h3>
                  <p className={styles.text_light}>{slogan}</p>
                </div>
              </Link>
            </li>
          );
        })}
        <div className={styles.arrow}></div>
      </ul>
    </div>
  );
};
export default DropDown;
