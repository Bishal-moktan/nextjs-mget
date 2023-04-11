import { MdKeyboardArrowUp } from 'react-icons/md';
import styles from './ScrollToTop.module.css';

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
