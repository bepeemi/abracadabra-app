import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ location, dates, guests });
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit} role="search">
      <input
        type="text"
        placeholder="Localidade"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        aria-label="Buscar por localidade"
      />
      <input
        type="text"
        placeholder="Datas"
        value={dates}
        onChange={(e) => setDates(e.target.value)}
        aria-label="Selecionar datas"
      />
      <input
        type="number"
        placeholder="Hóspedes"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min="1"
        aria-label="Número de hóspedes"
      />
      <button type="submit" aria-label="Buscar">Buscar</button>
    </form>
  );
};

export default SearchBar;