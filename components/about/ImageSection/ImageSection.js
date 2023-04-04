import styles from './ImageSection.module.css';
import firstImage from '../../../public/images/home/5.webp';
import secondImage from '../../../public/images/home/6.webp';
import thirdImage from '../../../public/images/about/about9.webp';
import fourthImage from '../../../public/images/home/8.webp';
import fifthImage from '../../../public/images/home/4.webp';
import sixthImage from '../../../public/images/about/about10.webp';
import Image from 'next/image';

const ImageSection = () => {
  return (
    <div className={styles.images}>
      <div className={styles.col}>
        <div className={styles.row}>
          <Image src={firstImage} alt={firstImage} />
          <div className={styles.content}>
            <h4>MGETENERGY Solar Power</h4>
          </div>
        </div>
        <div className={styles.row}>
          <Image src={secondImage} alt={secondImage} />
          <div className={styles.content}>
            <h4>MGETENERGY Solar Power</h4>
          </div>
        </div>
      </div>

      {/* second col  */}
      <div className={styles.col}>
        <div className={styles.row}>
          <Image src={thirdImage} alt={thirdImage} />
          <div className={styles.content}>
            <h4>MGETENERGY Solar Power</h4>
          </div>
        </div>
      </div>

      {/* third col  */}
      <div className={styles.col}>
        <div className={`${styles.row} ${styles.specialRow}`}>
          <div className={styles.col}>
            <div className={`${styles.row} ${styles.sub__row}`}>
              <Image src={fourthImage} alt={fourthImage} />
              <div className={styles.content}>
                <h4>MGETENERGY Solar Power</h4>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={`${styles.row} ${styles.sub__row}`}>
              <Image src={fifthImage} alt={fifthImage} />
              <div className={styles.content}>
                <h4>MGETENERGY Solar Power</h4>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <Image src={sixthImage} alt={sixthImage} />
          <div className={styles.content}>
            <h4>MGETENERGY Solar Power</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageSection;
