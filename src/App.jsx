import React, { useState } from 'react';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import './style/global.css'; 

const App = () => {
  // Estado simples para navegação 
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedListingId, setSelectedListingId] = useState(null);

  const goToDetails = (id) => {
    setSelectedListingId(id);
    setCurrentPage('details');
  };

  const goToHome = () => {
    setCurrentPage('home');
    setSelectedListingId(null);
  };

  return (
    <div className="app">
      {currentPage === 'home' ? (
        <Home onCardClick={goToDetails} />
      ) : (
        <Details listingId={selectedListingId} onBack={goToHome} />
      )}
    </div>
  );
};

export default App;