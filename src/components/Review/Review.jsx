import RatingStars from '../RatingStars/RatingStars';
import styles from './Review.module.css';

const Review = ({ review }) => {
  return (
    <div className={styles.review}>
      <h4>{review.user}</h4>
      <p>{review.date}</p>
      <RatingStars rating={review.rating} />
      <p>{review.comment}</p>
    </div>
  );
};

export default Review;