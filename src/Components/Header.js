import React, { Component } from 'react';
import Typing from './Typing';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="title-one">
          <p>Website Design</p>
        </div>
        <div className="title-two">
          <p>that tells <span>your story,</span></p>
        </div>
        <div className="sub-title-one">
          <p>Developed,</p>
        </div>
        <div className="sub-title-two">
          <p>to change <span>their world.</span></p>
        </div>
      </div>
    );
  }
}

export default Header;
