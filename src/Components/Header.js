import React, { Component } from 'react';
import Typing from './Typing';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="title-one">
          Website Design
        </div>
        <div className="title-two">
          that tells <span>your story,</span>
        </div>
        <div className="sub-title-one">
          Developed,
        </div>
        <div className="sub-title-two">
         to change <span>their world.</span>
          {/*<Typing strings={["Website Design...", "that tells Your Story,", "Developed...", "to change Their World.", "to change the World!"]} />*/}
        </div>
      </div>
    );
  }
}

export default Header;
