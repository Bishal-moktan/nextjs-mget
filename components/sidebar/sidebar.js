import styles from './Sidebar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeActive,
  closeSidebar,
} from '@/features/contentSlice/contentSlice';
import Link from 'next/link';
import { ImCross } from 'react-icons/im';

const SideBar = ({ items, name }) => {
  const { activeContent, isSidebarOpen } = useSelector(
    (store) => store.content
  );

  const dispatch = useDispatch();
  const handleClick = (index) => {
    dispatch(changeActive(index));
  };

  const handleClose = () => {
    dispatch(closeSidebar());
  };
  return (
    <aside
      className={`${styles.sidebar} ${isSidebarOpen ? styles.show : null} `}
    >
      <div className={styles.header}>
        <h2>{name}</h2>

        <div className={styles.close} onClick={handleClose}>
          <ImCross />
        </div>
      </div>
      <div className={`${styles.content__title}`}>
        {items?.map((item, index) => {
          return (
            <Link
              href={item.path}
              key={index}
              onClick={() => handleClick(index)}
              className={`${styles.btn} ${
                index === activeContent && `${styles.active_btn}`
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};
export default SideBar;
