import React, { Component } from 'react';
import Navbar from './Navbar'
import Header from './Header'

class Banner extends Component {
  render() {
    return (
      <div id="home" className="hero-banner">
        <Header />
      </div>
    );
  }
}

export default Banner;
