import React, { Component } from 'react';
import Banner from './Components/Banner';
import WhatWeDo from './Components/WhatWeDo';
import RecentWork from './Components/RecentWork';
import Footer from './Components/Footer';
import './styles/main.css'

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <WhatWeDo />
        <RecentWork />
        <Footer />
      </div>
    );
  }
}

export default App;