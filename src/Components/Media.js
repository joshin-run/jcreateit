import React, { Component } from 'react';

class Media extends Component {
  render() {
    return (
      <div>
        <ul clsssName="media-container">
          <li className="media-menu">
            <a href="https://www.linkedin.com/in/joshholladay/" target="_blank">LinkedIn</a>
          </li>
          <li className="media-menu">
            <a href="https://twitter.com/iamjoshholladay" target="_blank">Twitter</a>
          </li>
          <li className="media-menu">
            <a href="https://github.com/joshin-run" target="_blank">GitHub</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Media;
