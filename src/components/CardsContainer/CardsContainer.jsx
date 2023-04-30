import React from 'react';
import styles from './CardsContainer.module.css';
import Blockchain from '../Blockchain/Blockchain';
import Bridge from '../Bridge/Bridge';
import Casino from '../Casino/Casino';
import Dex from '../Dex/Dex';
import Game from '../Game/Game';
import NFTs from '../NFTs/NFTs';
import GasToken from '../GasToken/GasToken';
import Miner from '../Miner/Miner';
import Stable from '../Stable/Stable';


const CardsContainer = () => {
    return (
        <div id="cardscontainer" className={styles.container}>
      <div data-aos="fade-up"><Blockchain /></div>
      <div data-aos="fade-up"><Bridge /></div>
      <div data-aos="fade-up"><Stable /></div>
      <div data-aos="fade-up"><GasToken /></div>
      <div data-aos="fade-up"><NFTs /></div>
      <div data-aos="fade-up"><Miner /></div>
      <div data-aos="fade-up"><Dex /></div>
      <div data-aos="fade-up"><Game /></div>
      <div data-aos="fade-up"><Casino /></div>
    </div>
    )
}

export default CardsContainer