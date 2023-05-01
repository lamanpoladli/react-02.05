import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Slider from './Slider';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <About/>
      <Contact/>
      <Slider/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
