import styles from './RatingStars.module.css';

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={styles.stars} aria-label={`Avaliação: ${rating} de 5 estrelas`}>
      {[...Array(fullStars)].map((_, i) => <span key={i} className={styles.star}>★</span>)}
      {halfStar && <span className={styles.star}>☆</span>}
      {[...Array(emptyStars)].map((_, i) => <span key={i} className={styles.starEmpty}>☆</span>)}
    </div>
  );
};

export default RatingStars;