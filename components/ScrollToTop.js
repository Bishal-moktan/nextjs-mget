import { MdKeyboardArrowUp } from 'react-icons/md';
import styles from '@/styles/ScrollToTop.module.css';

const Scroll = () => {
  return (
    <div className={styles.scrollUp}>
      <a href="#nav">
        <MdKeyboardArrowUp />
      </a>
    </div>
  );
};
export default Scroll;
