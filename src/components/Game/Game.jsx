// Game.jsx
import React from 'react';
import styles from './Game.module.css';
import Image from '../../assets/images/game.png';

const Game = () => {
  return (
    <section className={styles.card}>
      <img
        src={Image}
        alt="Game"
        className={styles.image}
      />
      <h2>Decentralized Gaming Platform</h2>
      <p>
        Dive into our decentralized gaming platform, powered by Butane Chain.
        Discover a wide variety of games, compete with players worldwide, and
        earn rewards while enjoying a secure, provably fair gaming experience. 
      </p>
      <button className={styles.playNow}>Play Now</button>
    </section>
  );
};

export default Game;
