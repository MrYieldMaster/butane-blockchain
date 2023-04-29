// Bridge.jsx
import React from 'react';
import styles from '../Bridge/Bridge.module.css';

const Bridge = () => {
  return (
    <div className={styles.card}>
      <img
        src="https://via.placeholder.com/300x150" // Replace with your image URL
        alt="Bridge"
        className={styles.image}
      />
      <h2 className={styles.title}>Bridge</h2>
      <p>
        This is the description for the Bridge component. You can add more
        information about the Bridge component here.
      </p>
      <a href="https://example.com/openbridge" target="_blank" rel="noreferrer" className={styles.firstButton}>
        Open Bridge
      </a>
      <div className={styles.buttons}>
        <a href="https://example.com/graph" target="_blank" rel="noreferrer" className={styles.button}>
          The Graph
        </a>
        <a href="https://example.com/monitor" target="_blank" rel="noreferrer" className={styles.button}>
          Monitor
        </a>
      </div>
    </div>
  );
};

export default Bridge;
