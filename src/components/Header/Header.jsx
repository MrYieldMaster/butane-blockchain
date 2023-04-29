// Header.jsx
import React from 'react';
import styles from './Header.module.css';
import HeaderLogo from '../../assets/images/headerLogo1.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Replace the text with your logo image */}
        <a href="/"> 
          <img src={HeaderLogo} alt="Butane Logo" />
        
           </a>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#cardscontainer">Explore</a>
          </li>
          <li>
            <a href="#roadmap">Roadmap</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#footer">Socials</a>
          </li>
          <li>
          {styles.buyButton}
          <a href="https://example.com/explore" target="_blank" rel="noreferrer" className={styles.exploreButton}>
          Buy Now
        </a>
          </li>
          <li>
            {/* Replace # with your Telegram link */}
            <a href="https://t.me/butanechain" target="_blank" rel="noreferrer">
              <i className={`fab fa-telegram-plane ${styles.telegramIcon}`}></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
