import styles from './Landing.module.css';

const Landing = () => {
  const altTextBG =
    '40 KW ONGRID SOLAR POWER SYSTEM INSTALLED AT LIBERAL TRADERS PVT LTD, B-84/1 , OKHLA PHASE 2, OKHLA IND AREA, NEW DELHI 110020';
  return (
    <div className={styles.landing__section}>
      <span
        role="img"
        aria-label="40 KW ONGRID SOLAR POWER SYSTEM INSTALLED AT LIBERAL TRADERS PVT LTD, B-84/1 , OKHLA PHASE 2, OKHLA IND AREA, NEW DELHI 110020"
      ></span>
      <div className={styles.landing__section__info}>
        <h1>About Us</h1>
      </div>
    </div>
  );
};
export default Landing;
