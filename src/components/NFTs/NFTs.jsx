// NFTs.jsx
import React from 'react';
import styles from './NFTs.module.css';

const NFTs = () => {
  return (
    <section className={styles.card}>
      <img
        src="https://via.placeholder.com/300x150" // Replace with the path to your image
        alt="NFTs"
        className={styles.image}
      />
      <h2>Butane Chain NFTs</h2>
      <p>
        Discover and collect unique digital art and other digital assets on the
        Butane Chain NFT platform. Our NFT marketplace provides artists, creators,
        and collectors a place to trade and showcase their valuable digital works.
      </p>
      <button>Mint Now</button>
    </section>
  );
};

export default NFTs;
