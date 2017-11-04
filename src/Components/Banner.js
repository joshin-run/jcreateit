import React, { Component } from 'react';
import Header from './Header';

class Banner extends Component {
  render() {
    return (
      <div>
      <div id="home" className="hero-banner">
        {/*<Slider />*/}
        <Header />
      </div>
      </div>
    );
  }
}

export default Banner;
