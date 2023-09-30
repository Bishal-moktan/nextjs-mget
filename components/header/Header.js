import styles from './Header.module.css';

const Header = ({ name }) => {
  return (
    <div className={styles.landing__section}>
      <div className={styles.landing__section__info}>
        <h1>{name}</h1>
      </div>
    </div>
  );
};
export default Header;
