// Dex.jsx
import React from 'react';
import styles from './Dex.module.css';
import Image from '../../assets/images/dex.png'

const Dex = () => {
  return (
    <section className={styles.card}>
      <img
        src={Image}
        alt="Decentralized Exchange"
        className={styles.image}
      />
      <h2>Butane Decentralized Exchange (DEX)</h2>
      <p>
        The Butane Decentralized Exchange allows users to trade tokens securely
        and efficiently without relying on a centralized authority. Experience
        our innovative, user-friendly DEX and take advantage of its features
        like swapping, liquidity provision, farms, and pools. 
      </p>
      <div className={styles.buttons}>
        <button>Open DEX</button>
        <button>Swap</button>
        <button>Liquidity</button>
        <button>Farms</button>
        <button>Pools</button>
      </div>
    </section>
  );
};

export default Dex;
