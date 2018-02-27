import React, { Component } from 'react';
import ampersand from '../images/ampersand.png'
// import downArrow from '../images/icons/down-circle-white.svg'


class Header extends Component {
  render() {
    return (
      <div className="header-container">

        <div className="title-one">
          <p>Website Design that tells <span>your story</span>.</p>
        </div>

        <div className="title-two">
          <p>Developed, to change <span>their world</span>.</p>
        </div>

      </div>
    );
  }
}

export default Header;
// <img className="down-arrow" src={downArrow} alt="Down Arrow" />

// <div className="header-container">
//
// <div className="sub-title-one">
// <p>Website Design that tells <span>your story</span></p>
// </div>
//
// <div className="sub-title-two">
// <p>Developed to change <span>their world</span></p>
// </div>
// </div>
// <div className="header-container">
//   <div className="title-one">
//     <p>Website Design</p>
//   </div>
//   <div className="sub-title-one">
//     <p>that tells <span>your story</span></p>
//   </div>
//   <div className="title-two">
//     <p>Developed</p>
//   </div>
//   <div className="sub-title-two">
//     <p>to change <span>their world</span></p>
//   </div>
// </div>


// <div className="sub-title-one">
//   <p>that tells <span>your story</span></p>
// </div>
// <div className="sub-title-two">
//   <p>to change <span>their world</span></p>
// </div>

// <div className="header-container">
//   <div className="title-one">
//     <p>Design</p>
//   </div>
//
//   <div className="ampersand">
//     <p>&</p>
//   </div>
//
//   <div className="title-two">
//     <p>Development</p>
//   </div>
//
// </div>
