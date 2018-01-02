import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';

class Banner extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="hero-banner">
          <Header />
        </div>
      </div>
    );
  }
}

export default Banner;
