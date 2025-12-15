import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import Carousel from '../../components/Carousel/Carousel';
import Card from '../../components/Card/Card';
import { mockListings, featuredLocations } from '../../data/mockData.jsx';
import styles from './Home.module.css';

const Home = () => {
  const [filteredListings, setFilteredListings] = useState(mockListings);

  const handleSearch = (filters) => {
    // Simulação de filtro para quando integrar com API
    setFilteredListings(mockListings.filter(item => item.location.includes(filters.location)));
  };

  return (
    <div className={styles.home}>
      <Header />
      <main className="container">
        <section className={styles.hero}>
          <SearchBar onSearch={handleSearch} />
          <Carousel images={featuredLocations.map(loc => loc.image)} title="Localidades Destacadas" />
        </section>
        <section className={styles.listings}>
          <h2>Quartos Disponíveis</h2>
          <div className={styles.grid}>
            {filteredListings.map((item) => (
              <Card
                key={item.id}
                listing={item}
                onClick={() => alert('Ir para detalhes')}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home