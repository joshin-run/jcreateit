import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Bio from './Components/Bio';
import Projects from './Components/Projects';
import Design from './Components/Design';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import WhatWeDo from './Components/WhatWeDo';
import './styles/main.css'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <WhatWeDo />
        <Footer />
      </div>
    );
  }
}

export default App;
