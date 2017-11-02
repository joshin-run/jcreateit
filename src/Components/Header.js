import React, { Component } from 'react';
import Typing from './Typing'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div><p className="title dev">
          <Typing strings={["Website Design...", "that tells Your Story,", "Developed...", "to change Their World.", "to change the World!"]} />
        </p></div>
      </div>
    );
  }
}

export default Header;
