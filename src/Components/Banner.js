import React, { Component } from 'react';
import Header from './Header'
import Slider from './Slider'

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
