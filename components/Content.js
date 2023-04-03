import { openSidebar } from '@/features/contentSlice/contentSlice';
import styles from '@/styles/Content.module.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

const Content = ({ title, description }) => {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(openSidebar());
  };

  return (
    <div className="container">
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
      <div className={styles.icon}>
        <MdKeyboardArrowRight onClick={handleOpen} />
      </div>
      <div className={styles.content__container}>
        <div className={styles.content__description}>{description}</div>
      </div>
    </div>
  );
};
export default Content;
