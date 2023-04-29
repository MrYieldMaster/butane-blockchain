import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane, faTwitter, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.socials}>
        <a href="https://t.me/butanechain" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTelegramPlane} className={styles.icon} />
        </a>
        <a href="https://twitter.com/Butane_Network" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
        </a>
        <a href="https://medium.com/@butanegas101" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faMediumM} className={styles.icon} />
        </a>
      </div>
      <div className={styles.email}>
        <a href="mailto:you@example.com">Contact@Butane.tech</a>
      </div>
      <div className={styles.buttons}>
        <a href="https://pancakeswap.finance/swap" target="_blank" rel="noreferrer" className={styles.exploreButton}>
          Buy Now
        </a>
        <a href="https://example.com/explore" target="_blank" rel="noreferrer" className={styles.exploreButton}>
          Explore
        </a>
      </div>
      <div className={styles.copyright}>
        &copy; {(new Date().getFullYear())} Butane BlockChain. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

