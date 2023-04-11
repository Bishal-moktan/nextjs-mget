import styles from './Content.module.css';
import CollapseSideBar from '../CollapseSideBar/CollapseSideBar';

const Content = ({ title, description, name }) => {
  return (
    <div className="container">
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
      <CollapseSideBar name={name} />
      <div className={styles.content__container}>
        <div className={styles.content__description}>{description}</div>
      </div>
    </div>
  );
};
export default Content;
