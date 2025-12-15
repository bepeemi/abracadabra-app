import React from 'react';
import RatingStars from '../RatingStars/RatingStars';
import styles from './Card.module.css';

const Card = ({ listing, onClick }) => {
  return (
    <article className={styles.card} onClick={onClick} role="button" tabIndex={0}>
      <img src={listing.images[0]} alt={listing.name} loading="lazy" />
      <div className={styles.content}>
        <h3>{listing.name}</h3>
        <p>{listing.location}</p>
        <p>R$ {listing.price}/noite</p>
        <RatingStars rating={listing.rating} />
        <p>{listing.reviewsCount} avaliações</p>
      </div>
    </article>
  );
};

export default Card;