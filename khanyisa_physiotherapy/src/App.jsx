import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;