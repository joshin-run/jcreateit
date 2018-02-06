import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';

class Banner extends Component {
  render() {
    return (
      <div id="banner">
        <div className="hero-banner">
          <section id="home" data-type="background" data-speed="10" className="banner-gradient pages">
            <Navbar />
            <Header />
          </section>
        </div>
      </div>
    );
  }
}

export default Banner;
