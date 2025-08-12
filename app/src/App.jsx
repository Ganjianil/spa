import React from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Amenities from './Amenities';
import Deals from './Deals';
import BookNow from './BookNow';
import Contact from './Contact';
import Footer from './Footer';
import Images from './Images';
import Stats from './Stats';
import MapEmbed from './MapEmbed';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Images />

      <Amenities />

      <BookNow />
      <MapEmbed/>
      <Footer />
    </div>
  );
}

export default App;