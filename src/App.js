import React, { Component } from 'react';
import Banner from './Components/Banner';
import WhatWeDo from './Components/WhatWeDo';
import RecentWork from './Components/RecentWork';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './styles/main.css'

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <WhatWeDo />
        <RecentWork />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
