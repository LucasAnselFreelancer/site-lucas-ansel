import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ServicesIntro from './components/ServicesIntro';
import Services from './components/Services';
import Method from './components/Method';
import Results from './components/Results';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <ServicesIntro />
      <Services />
      <Method />
      <Results />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;