// Blockchain.jsx
import React from 'react';
import styles from '../Blockchain/Blockchain.module.css';
import Image from '../../assets/images/blockchain.png';

const Blockchain = () => {
    return (
      <div className={styles.card}>
        <img 
          src={Image}
          alt="Blockchain"
          className={styles.image}
        />
        <h2 className={styles.title}>Blockchain</h2> 
        <p>
          Butane is proof of stake which means the holders of $GAS have a chance
          at becoming the chain validators and will receive 15% of all
          transactions fees. Audit by CertiK in progress.
        </p>
        <a href="https://example.com/explorer" target="_blank" rel="noreferrer" className={styles.firstButton}>
          Open Explorer
        </a>
        <div className={styles.buttons}>
          <a href="https://example.com/graph" target="_blank" rel="noreferrer" className={styles.button}>
            Graph
          </a>
          <a href="https://example.com/bot" target="_blank" rel="noreferrer" className={styles.button}>
            Bot
          </a>
          <a href="https://example.com/mainrpc" target="_blank" rel="noreferrer" className={styles.button}>
            Main RPC
          </a>
          <a href="https://example.com/testrpc" target="_blank" rel="noreferrer" className={styles.button}>
            Test RPC
          </a>
          <a href="https://example.com/testnet" target="_blank" rel="noreferrer" className={styles.button}>
            TestNet
          </a>
          <a href="https://example.com/faucet" target="_blank" rel="noreferrer" className={styles.button}>
            Faucet
          </a>
          <a href="https://example.com/validator" target="_blank" rel="noreferrer" className={styles.button}>
            Validator
          </a>
          <a href="https://example.com/mainnetstatus" target="_blank" rel="noreferrer" className={styles.button}>
            MainNet Status
          </a>
        </div>
      </div>
    );
  };
  
  export default Blockchain;