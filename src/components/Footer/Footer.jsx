// Footer.jsx
import React from 'react';
import styles from './Footer.module.css';




const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        {/* Replace # with your social media links */}
        <a href="https://t.me/butanechain" target="_blank" rel="noreferrer">
  <i className={`fab fa-telegram-plane ${styles.icon}`}></i>
</a>
<a href="https://t.me/butanechain" target="_blank" rel="noreferrer">
  <i className={`fab fa-twitter ${styles.icon}`}></i>
</a>
<a href="https://t.me/butanechain" target="_blank" rel="noreferrer">
  <i className={`fab fa-linkedin-in ${styles.icon}`}></i>
</a>
<a href="https://t.me/butanechain" target="_blank" rel="noreferrer">
  <i className={`fab fa-instagram ${styles.icon}`}></i>
</a>


      </div>
      <div className={styles.email}>
        {/* Replace mailto: with your email address */}
        <a href="mailto:you@example.com">Contact@Butane.tech</a>
      </div>
      <div className={styles.buttons}>
      <a href="https://example.com/explore" target="_blank" rel="noreferrer" className={styles.exploreButton}>
          Buy Now
        </a>
        <a href="https://example.com/explore" target="_blank" rel="noreferrer" className={styles.exploreButton}>
          Explore
        </a>
      </div>
      <div className={styles.copyright}>
        &copy; {(new Date().getFullYear())} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
