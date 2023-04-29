import React from 'react';
import styles from './CardsContainer.module.css';
import Blockchain from '../Blockchain/Blockchain';
import Bride from '../Bridge/Bridge';
import Casino from '../Casino/Casino';
import Dex from '../Dex/Dex';
import Game from '../Game/Game';
import NFTs from '../NFTs/NFTs';
import GasToken from '../GasToken/GasToken';
import Miner from '../Miner/Miner';
import Stable from '../Stable/Stable';


const CardsContainer = () => {
    return (
        <div className={styles.container}>
            <Blockchain />
            <Bride />
            <Stable />
            <GasToken />
            <NFTs />
            <Miner />
            <Dex />
            <Game />
            <Casino />
        </div>
    )
}

export default CardsContainer