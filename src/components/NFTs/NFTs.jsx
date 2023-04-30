// NFTs.jsx
import React from 'react';
import styles from './NFTs.module.css';
import Image from '../../assets/images/nft.png';

const NFTs = () => {
  return (
    <section className={styles.card}>
      <img
        src={Image}
        alt="NFTs"
        className={styles.image}
      />
      <h2>$GAS Chain NFTs</h2>
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
