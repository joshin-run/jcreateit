import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="title-one">
          <p>Website Design</p>
        </div>
        <div className="sub-title-one">
          <p>that tells <span>your story</span></p>
        </div>
        <div className="title-two">
          <p>Developed</p>
        </div>
        <div className="sub-title-two">
          <p>to change <span>their world</span></p>
        </div>
      </div>
    );
  }
}

export default Header;

// <div className="header-container">
//   <div className="title-one">
//     <p>WEBSITE DESIGN</p>
//   </div>
//   <div className="sub-title-one">
//     <p>that tells <span>your story</span></p>
//   </div>
//   <div className="title-two">
//     <p>DEVELOPED</p>
//   </div>
//   <div className="sub-title-two">
//     <p>to change <span>their world</span></p>
//   </div>
// </div>
