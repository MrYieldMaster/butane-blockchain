import React, { useEffect } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Roadmap from './components/Roadmap/Roadmap';
import FAQ from './components/FAQ/FAQ';
import CursorEffect from './components/CursorEffect';

import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className={styles.App}>
      <CursorEffect />
      <Header />
      <Hero id="hero" />
      <AboutUs id="aboutus" />
      <CardsContainer id="cardscontainer" />
      <Roadmap id="roadmap" />
      <FAQ id="faq" />
      <Footer id="footer" />
    </div>
  );
}

export default App;
