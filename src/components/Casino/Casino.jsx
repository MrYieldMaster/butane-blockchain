// Casino.jsx
import React from 'react';
import styles from './Casino.module.css';
import Image from '../../assets/images/casino.png';

const Casino = () => {
  return (
    <section className={styles.card}>
      <img
        src={Image}
        alt="Casino"
        className={styles.image}
      />
      <h2>Decentralized Casino</h2>
      <p>
        Experience the thrill of our decentralized casino, built on the Butane
        Chain. Play your favorite games, compete with others, and win big in a
        secure, provably fair environment.
      </p>
      <button className={styles.playNow}>Play Now</button>
    </section>
  );
};

export default Casino;
