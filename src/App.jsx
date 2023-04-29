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
      <Hero />
      <AboutUs />
      <CardsContainer />
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
