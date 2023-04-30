// Hero.jsx
import React from 'react';
import styles from './Hero.module.css';
import HeroImage from '../../assets/images/hero1.png'; // Replace with your hero image URL

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Welcome to the Butane Ecosystem</h1>
        <p>
          Butane Chain is a blockchain designed for novices and experts alike. It
          offers an expanding range of features and tools for projects, from
          crowdfunding to decentralized marketplaces. Its proof-of-stake
          consensus algorithm ensures energy efficiency and low hardware
          requirements.
        </p>
        <div className={styles.buttons}>
          <a href="#ecosystem" className={styles.button}>
            Ecosystem
          </a>
          <a href="#charts" className={styles.button}>
            Charts
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={HeroImage} alt="Hero"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default Hero;
