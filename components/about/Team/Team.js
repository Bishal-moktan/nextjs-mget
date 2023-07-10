import styles from './Team.module.css';
import { IoBulbOutline } from 'react-icons/io5';
import { GoGoal } from 'react-icons/go';

const Team = () => {
  return (
    <>
      <div className={styles.teamContainer}>
        <div className={styles.team}>
          <div className={styles.title}>
            <h2>Founders</h2>
          </div>
          <div className={styles.nameWrapper}>
            <div className={styles.nameContainer}>
              <span className={styles.name}>Bhupendra Singh </span>
              <em className={styles.position}>Founder - CTO</em>
            </div>
            <div className={styles.nameContainer}>
              <span className={styles.name}>Krishna Singh </span>
              <em className={styles.position}> Co-Founder - Director</em>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p className={styles.para}>
          <div className={styles.icon}>
            <GoGoal />
          </div>
          <span> Mission: </span> Our mission is to provide reliable,
          sustainable, and cost-effective solar power solutions to homes and
          businesses, while reducing dependence on fossil fuels and promoting a
          greener future.
        </p>
        <p className={styles.para}>
          <div className={styles.icon}>
            <IoBulbOutline />
          </div>
          <span> Vision: </span>Our vision is to become a leading provider of
          clean energy, and empower communities through the widespread adoption
          of solar power systems, to achieve a sustainable future for all
        </p>
      </div>
    </>
  );
};
export default Team;
