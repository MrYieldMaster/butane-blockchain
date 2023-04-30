// GasToken.jsx
import React from 'react';
import styles from './GasToken.module.css';
import Image from '../../assets/images/token.png';

const GasToken = () => {
  return (
    <section className={styles.card}>
      <img
        src={Image}
        alt="Gas Token"
        className={styles.image}
      />
      <h2>$GAS - Native Coin</h2>
      <p>
        $GAS is the native coin of Butane SmartChain. The coin is available on
        BSC as well as the native chain. To come to the native chain, you need
        to buy $GAS, also known as WGAS, on BSC and then use our native bridge
        and come to Butane SmartChain. Once bridged, you can buy newly launched
        tokens or trade, buy, and sell $GAS. You can also become a validator or
        delegator.
      </p>
      <p>
        Butane Contract 0x........
        <br />
        BSC Contract: 0x........
        <br />
        ETH Contract: 0x........
      </p>
      <div className={styles.buttons}>
        <button>Open Charts</button>
        <button>Buy Now</button>
        <button>Butanescan</button>
      </div>
    </section>
  );
};

export default GasToken;
