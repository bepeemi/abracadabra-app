import React from 'react';
import RatingStars from '../RatingStars/RatingStars';
import styles from './Card.module.css';

const Card = ({ listing, onClick }) => {
  if (!listing) return null;

  return (
    <article
      className={styles.card}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <img
        src={listing.images?.[0]}
        alt={listing.name}
      />

      <div className={styles.content}>
        <h3>{listing.name}</h3>
        <p>{listing.location}</p>
        <p><strong>R$ {listing.price}</strong> / noite</p>
        <RatingStars rating={listing.rating} />
        <p>{listing.reviewsCount} avaliações</p>
      </div>
    </article>
  );
};

export default Card;