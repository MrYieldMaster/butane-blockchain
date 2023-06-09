// Miner.jsx
import React from 'react';
import styles from './Miner.module.css';
import Image from '../../assets/images/miner.png'

const Miner = () => {
  return (
    <section className={styles.card}>
      <img
        src={Image}
        alt="Butane Miner"
        className={styles.image}
      />
      <h2>$GAS Miner - 8% Yield </h2>
      <p>
        Audited Butane Miner, which offers a huge 2,920% APY and can reward
        investors with up to 8% daily returns. Same contract as the well-known
        Baked Beans Miner. Unique referral system that incentivizes everyone to
        help shill and spread the love. dApp is protected by advanced
        anti-malware software. Tax collected from Butane Beans Miner will be
        used to market the entire ecosystem.
      </p>
      <div className={styles.buttons}>
        <button>Invest Now</button>
        <button>Whitepaper</button>
      </div>
    </section>
  );
};

export default Miner;
