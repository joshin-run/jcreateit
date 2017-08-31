import React, { Component } from 'react';
import Navbar from './Navbar'

class Banner extends Component {
  render() {
    return (
      <div className="hero-banner">
        <a id="home"></a>
        <Navbar />
      </div>
    );
  }
}

export default Banner;
