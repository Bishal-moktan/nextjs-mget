import Link from 'next/link';
import styles from './jobitem.module.css';

const JobItem = () => {
  return (
    <div className={styles.card}>
      <h3>Business Analyst</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
        asperiores doloremque sint sit dicta incidunt quo perspiciatis est?
        Magnam ipsam ratione sequi rerum tenetur natus nostrum atque. Nisi, sint
        illum.
      </p>
      <Link href={'/careers/1'}>
        <button> Read More </button>
      </Link>
    </div>
  );
};
export default JobItem;
