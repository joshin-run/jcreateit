import React, { Component } from 'react';
import Banner from './Components/Banner';
import Menu from './Components/Menu';
import WhatWeDo from './Components/WhatWeDo';
import RecentWork from './Components/RecentWork';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './styles/main.css'

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Menu />
        <WhatWeDo />
        <RecentWork />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
