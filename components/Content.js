import { changeActive } from '@/features/contentSlice/contentSlice';
import styles from '@/styles/Content.module.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

const Content = ({ title, description, items }) => {
  const dispatch = useDispatch();
  const handleClick = (index) => {
    dispatch(changeActive(index));
  };
  const { activeContent } = useSelector((store) => store.content);
  return (
    <div className="container">
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
      <div className={styles.content__container}>
        <div className={styles.content__title}>
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
        <div className="content__description">{description}</div>
      </div>
    </div>
  );
};
export default Content;
