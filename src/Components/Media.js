import React, { Component } from 'react';

class Media extends Component {
  render() {
    return (
      <div>
        <ul clsssName="media-wrapper">
          <li className="media-menu">
            <a href="https://www.linkedin.com/in/joshholladay/" target="_blank">LINKEDIN</a>
          </li>
          <li className="media-menu">|</li>
          <li className="media-menu">
            <a href="https://joshholladay.wordpress.com/" target="_blank">WORDPRESS</a>
          </li>
          <li className="media-menu">|</li>
          <li className="media-menu">
            <a href="https://twitter.com/iamjoshholladay" target="_blank">TWITTER</a>
          </li>
          <li className="media-menu">|</li>
          <li className="media-menu">
            <a href="https://github.com/joshin-run" target="_blank">GITHUB</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Media;
