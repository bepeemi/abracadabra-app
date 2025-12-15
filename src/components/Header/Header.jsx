import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header} role="banner">
      <div className={styles.logo}>
        <h1>Locação de Quartos</h1> {/* SEO: Heading principal */}
      </div>
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label="Abrir menu de navegação"
      >
        ☰
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} role="navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;