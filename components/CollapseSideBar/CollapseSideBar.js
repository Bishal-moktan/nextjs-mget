import styles from './CollapseSideBar.module.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeActive,
  openSidebar,
} from '@/features/contentSlice/contentSlice';
import Link from 'next/link';
import services from '@/data/services';
import solutions from '@/data/solutions';

const CollapseSideBar = ({ name }) => {
  const dispatch = useDispatch();
  const { activeContent } = useSelector((store) => store.content);
  const handleOpen = () => {
    dispatch(openSidebar());
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.icon}>
        <MdKeyboardArrowRight onClick={handleOpen} />
      </div>
      <div className={styles.icons_lists}>
        {name === 'Solutions' ? (
          <>
            {solutions.map((item, index) => {
              const { icon, path } = item;
              return (
                <div className={styles.icon} key={index}>
                  <Link
                    href={path}
                    className={`${styles.link} ${
                      activeContent === index ? styles.active : null
                    }`}
                    onClick={() => dispatch(changeActive(index))}
                  >
                    {' '}
                    {icon}
                  </Link>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {services.map((item, index) => {
              const { icon, path } = item;
              return (
                <div className={styles.icon} key={index}>
                  <Link
                    href={path}
                    className={`${styles.link} ${
                      activeContent === index ? styles.active : null
                    }`}
                    onClick={() => dispatch(changeActive(index))}
                  >
                    {' '}
                    {icon}
                  </Link>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};
export default CollapseSideBar;
