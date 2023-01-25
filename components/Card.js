import styles from '@/styles/Card.module.css';

const Card = () => {
  const cardContent = [
    {
      title: 'On-Grid Solar Power',
      description:
        'On-Grid Systems are solar pv systems that only generate power when the utility power grid is available. They can send excess power generated back to the grid.',
    },
    {
      title: 'Off-Grid Solar Power',
      description:
        'Off-grid solar is a solar panel system not connected to the power grid at all. They completely rely on electricity powered by the sun and stored in batteries.',
    },
    {
      title: 'Hybrid Solar Power',
      description:
        'Hybrid solar systems generate power in the same way as a common grid-tie solar system but use special hybrid inverters and batteries to store energy for later use.',
    },
  ];
  return (
    <div className={`${styles.container} ${styles.card__container}`}>
      {cardContent.map((item, index) => {
        const { title, description } = item;
        return (
          <div className={styles.card} key={index}>
            <h2>{title}</h2>
            <p className={styles.textLight}>{description}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
