// Stable.jsx
import React from 'react';
import styles from './Stable.module.css';
import Image from '../../assets/images/stable.png';

const Stable = () => {
  return (
    <section className={styles.card}>
      <img
        src={Image}
        alt="Stable Machine"
        className={styles.image}
      />
      <h2>Stable Machine </h2>
      <p>
        Stable Machine is a yield farm based on BUSD that can give you up to 8%
        daily! Compound bonuses that add 3% to your daily compound. You can
        compound every 12 hours for 5 days, so you end up with 30% compound
        bonus last day! Built-in anti-whale and anti-dump mechanism to ensure
        all make money. 5% tax and 2% tax to bean eco NFT holders.
      </p>
      <button>Invest Now</button>
    </section>
  );
};

export default Stable;
