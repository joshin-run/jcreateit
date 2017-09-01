import React, { Component } from 'react';
import Navbar from './Navbar'
import Header from './Header'

class Banner extends Component {
  render() {
    return (
      <div className="hero-banner">
        <a id="home"></a>
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default Banner;
