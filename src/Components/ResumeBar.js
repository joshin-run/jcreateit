import React, { Component } from 'react';

class ResumeBar extends Component {
  render() {
    return (
      <div className="resume-bar-wrapper">
        <div className="resume-bar">
          <p className="resume-bar-text">Click on one of these buttons and learn more about me.</p>
          <div className="resume-bar-buttons">

            <a href="../assets/docs/JoshHolladay-UIUXDesignerResume.pdf" target="_blank">
              <div className="resume-button_resume-bar all-caps">
                Resume ➔
              </div>
            </a>

            <a href="https://www.behance.net/josh852a" target="_blank">
              <div className="portfolio-button_resume-bar all-caps">
                <p>Portfolio ➔</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeBar;

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
