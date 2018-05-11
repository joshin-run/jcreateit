import React, { Component } from 'react';
// import logo from '../images/tri-j-logo-mid2j.png'
import Media from './Media'
import BottomBorder from './BottomBorder'

class Footer extends Component {
  render() {
    return (
      <div id="contact-us" className="footer-wrapper">
        <div className="footer-container">
          <div className="logo-container">
            <a href="#home"><img className="footer-logo"  src="http://res.cloudinary.com/jahmsc/image/upload/v1519680052/tri-j-logo-onWhite_gajmuc.png" alt="jh-logo" /></a>
          </div>
          <div className="media-links">
            <ul>
              <li className="media-menu">
                <p className="copy">Handcrafted with &#10084; in Utah.</p>
              </li>
              <li className="media-menu dot">•</li>
              <li className="media-menu">
                <p className="copy">J Create It, LLC.</p>
              </li>
              <li className="media-menu dot">•</li>
              <li className="media-menu">
                <p className="copy">Copyright 2018. All rights reserved.</p>
              </li>

            </ul>
          </div>
          <Media />
        </div>
        <BottomBorder />
      </div>
    );
  }
}

export default Footer;

// <img className="menu-media-icons" src={} alt="Facebook" />


//
// import React, { Component } from 'react';
// // import logo from '../images/tri-j-logo-mid2j.png'
// import icon from '../images/icons/tri-j-icon-blue.png'
// import Media from './Media'
//
// class Footer extends Component {
//   render() {
//     return (
//       <div id="contact-us" className="footer-wrapper">
//         <div className="footer-container">
//           <div className="logo-container">
//             <a href="#home"><img className="footer-logo"  src={icon} alt="jh-logo" /></a>
//           </div>
//           <Media />
//         </div>
//         <p className="copy">J Create It, LLC &copy; 2018</p>
//       </div>
//     );
//   }
// }
//
// export default Footer;
