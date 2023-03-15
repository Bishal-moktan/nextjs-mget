import styles from '@/styles/Partners.module.css';
import image1 from '@/public/images/client/partner1.webp';
import image2 from '@/public/images/client/partner2.webp';
import image3 from '@/public/images/client/partner3.webp';
import image4 from '@/public/images/client/partner4.webp';
import image5 from '@/public/images/client/partner5.webp';
import image6 from '@/public/images/client/partner6.webp';
import image7 from '@/public/images/client/partner7.webp';
import image10 from '@/public/images/client/partner10.webp';
import image11 from '@/public/images/client/partner11.webp';
import image12 from '@/public/images/client/partner12.webp';
import image14 from '@/public/images/client/partner14.webp';
import image15 from '@/public/images/client/partner15.webp';
import image16 from '@/public/images/client/partner16.webp';
import image17 from '@/public/images/client/partner17.webp';
import image18 from '@/public/images/client/partner18.webp';
import image13 from '@/public/images/client/efab.webp';
import Image from 'next/image';

const Partners = () => {
  return (
    <section className={styles.container__client}>
      <div className="container">
        <h1>RECENT WORK</h1>

        <div className={styles.container__client_images}>
          <div className={styles.image}>
            <Image src={image2} alt="client" />
          </div>
          <div className={styles.image}>
            <Image src={image1} alt="client" />
          </div>
          <div className={styles.image}>
            <Image src={image3} alt="client" />
          </div>
          <div className={styles.image}>
            <Image src={image4} alt="client" />
          </div>
          <div className={styles.image}>
            <Image src={image5} alt="client" />
          </div>
          <div className={styles.image}>
            <Image src={image6} alt="client" />
          </div>
          <div className={styles.image}>
            <Image src={image7} alt="client" />
          </div>
          <div className={styles.image}>
            <Image src={image10} alt="client" />
          </div>
          <div className={styles.image}>
            <Image src={image11} alt="client" />
          </div>
          <div className={styles.image}>
            <Image src={image12} alt="client" />
          </div>
          <div className={styles.image}>
            <Image src={image13} alt="Efab powers" />
          </div>
          <div className={styles.image}>
            <Image src={image14} alt="client" />
          </div>
          <div className={styles.image}>
            <Image src={image15} alt="client" />
          </div>
          <div className={styles.image}>
            <Image src={image16} alt="client" />
          </div>
          <div className={styles.image}>
            <Image src={image17} alt="client" />
          </div>
          <div className={styles.image}>
            <Image src={image18} alt="client" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Partners;
