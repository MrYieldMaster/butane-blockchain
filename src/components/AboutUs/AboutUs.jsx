// AboutUs.jsx
import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <h2 data-aos="fade-up" data-aos-delay="25" >
       About Us</h2>
      <p>
        At Butane Chain, we're dedicated to creating an inclusive and
        innovative blockchain ecosystem. Our team of experts brings together
        diverse backgrounds and skill sets to provide the best possible
        platform for projects and developers. With our ongoing commitment to
        growth and improvement, Butane Chain is the ideal environment for
        driving the future of blockchain technology.
      </p>
    </section>
  );
};

export default AboutUs;

