import Link from 'next/link';
import styles from '@/styles/DropDown.module.css';
import { MdKeyboardArrowDown } from 'react-icons/md';

const DropDown = ({ name, items }) => {
  return (
    <div className={styles.dropDown}>
      <p>
        {name} <MdKeyboardArrowDown className={styles.downArrow} />
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
