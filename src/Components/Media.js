import React, { Component } from 'react';
import linkedin from '../images/Linkedin-w.svg'
import github from '../images/Github-w.svg'
import twitter from '../images/Twitter-w.svg'

class Media extends Component {
  render() {
    return (
      <div>
        <ul>
          <div>
            <ul>
              <li className="media-menu">
                <a href="https://www.linkedin.com/in/joshholladay/" target="_blank">LinkedIn</a>
              </li>
              <li className="media-menu">•</li>
              <li className="media-menu">
                <a href="https://twitter.com/iamjoshholladay" target="_blank">Twitter</a>
              </li>
              <li className="media-menu">•</li>
              <li className="media-menu">
                <a href="https://github.com/joshin-run" target="_blank">GitHub</a>
              </li>
              <li className="media-menu">•</li>
              <li className="media-menu">
                <a href="https://www.behance.net/josh852a" target="_blank">Behance</a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    );
  }
}

export default Media;

// <li className="media-menu">
//   <a href="https://www.linkedin.com/in/joshholladay/"><img className="linkedin media-icon" src={linkedin} alt="linkedin" /></a>
// </li>
// <li className="media-menu">
//   <a href="https://twitter.com/iamjoshholladay"><img className="twitter media-icon" src={twitter} alt="twitter" /></a>
// </li>
// <li className="media-menu">
//   <a href="https://github.com/joshin-run"><img className="github media-icon" src={github} alt="github" /></a>
// </li>
