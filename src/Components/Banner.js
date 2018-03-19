import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }
  
  render() {
    return (
      <div id="banner">
        <div className="hero-banner">
          <section className="banner-gradient pages">
            <Navbar />
            <Header />
          </section>
        </div>
      </div>
    );
  }
}

export default Banner;
