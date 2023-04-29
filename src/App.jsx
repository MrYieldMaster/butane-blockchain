import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Roadmap from './components/Roadmap/Roadmap';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <div className={styles.App}>
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
