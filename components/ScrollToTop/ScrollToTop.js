import { MdKeyboardArrowUp } from 'react-icons/md';
import styles from './ScrollToTop.module.css';

const Scroll = () => {
  return (
    <div className={styles.scrollUp}>
      <a href="#nav" aria-label="Go to top of the page">
        <MdKeyboardArrowUp />
      </a>
    </div>
  );
};
export default Scroll;
