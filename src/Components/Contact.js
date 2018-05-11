import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="contact-wrapper">
        <div className="">

          <div className="contact_header_container">
            <p className="contact_header">Contact</p>
            <p className="contact_header-sub">Tell me about your next big thing.</p>
            <p className="contact_content">I'm currently accepting new projects and would love to hear all about yours. </p>
            <p className="contact_content">Send me an email or take a look at more of my creative work.</p>
            <div className="buttons-container-contact">
              <a href="mailto:josh@jcreateit.com" target="_top"><button className="button-email all-caps">Email Josh</button></a>
              <a href="https://www.behance.net/josh852a"><button className="button-empty-contact all-caps">View Projects</button></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
