import styles from '@/styles/Landing.module.css';

const Landing = ({ page }) => {
  return (
    <div className={styles.landing__section}>
      <div>
        <h1>{page}</h1>
      </div>
    </div>
  );
};
export default Landing;
