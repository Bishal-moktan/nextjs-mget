import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.css';

const Card = ({ img, name, info, description }) => {
  return (
    <Link href={'/testimonials'}>
      <div className={styles.card}>
        <div className={styles.content}>{description}</div>
        <div className={styles.info}>
          <div className={styles.image}>
            <Image src={img} alt={name} />
          </div>
          <div className={styles.desc}>
            <p className="margin">{name}</p>
            <span>{info}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;
