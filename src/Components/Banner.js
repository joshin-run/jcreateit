import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';

class Banner extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section id="home" data-type="background" data-speed="10" className="hero-banner pages">
          <Header />
        </section>
      </div>
    );
  }
}

export default Banner;
