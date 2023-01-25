import Link from 'next/link';
import styles from '@/styles/DropDown.module.css';

const DropDown = ({ name, items, show, setShow }) => {
  return (
    <div
      className={styles.dropDown}
      onMouseEnter={() => setShow('-')}
      onMouseLeave={() => setShow('+')}
    >
      <p>
        {name} {show}
      </p>
      <div className={styles.dropDown_content}>
        {items.map((item, index) => {
          return (
            <Link key={index} className={styles.link} href={item.path}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default DropDown;
