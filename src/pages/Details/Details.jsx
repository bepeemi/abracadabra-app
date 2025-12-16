import Carousel from '../../components/Carousel/Carousel';
import RatingStars from '../../components/RatingStars/RatingStars';
import Review from '../../components/Review/Review';
import Button from '../../components/Button/Button';
import { mockListings } from '../../data/mockData.jsx';
import styles from './Details.module.css';


const Details = ({ listingId }) => {

  const listing = mockListings.find(item => item.id === listingId) || mockListings[0];

  const handleReserve = () => {
    alert('Reserva realizada!'); // Placeholder para integração com backend
  };

  return (
    <main className={`container ${styles.details}`} role="main">
      <section className={styles.carouselSection}>
        <Carousel images={listing.images} title={listing.name} />
      </section>
      <section className={styles.info}>
        <h1>{listing.name}</h1>
        <p className={styles.location}>{listing.location}</p>
        <p className={styles.price}>R$ {listing.price}/noite</p>
        <div className={styles.rating}>
          <RatingStars rating={listing.rating} />
          <span>({listing.reviewsCount} avaliações)</span>
        </div>
        <p className={styles.description}>{listing.description}</p>
        <h2>Comodidades</h2>
        <ul className={styles.amenities}>
          {listing.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </section>
      <section className={styles.reviews}>
        <h2>Avaliações</h2>
        <div className={styles.average}>
          <RatingStars rating={listing.rating} />
          <span>Média: {listing.rating}/5</span>
        </div>
        {listing.reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </section>
      <div className={styles.cta}>
        <Button onClick={handleReserve}>Reservar Agora</Button>
      </div>
    </main>
  );
};

export default Details;