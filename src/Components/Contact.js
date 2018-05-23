import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="contact-wrapper">
        <div className="">

          <div className="contact_header_container">
            <p className="contact_header">Contact Us</p>
            <p className="contact_header-sub">Tell us about your next project.</p>
            <p className="contact_content">We would love to hear all about it. </p>
            <p className="contact_content">Send us an email or take a look at more of our creative work.</p>
            <div className="buttons-container-contact">
              <a href="mailto:josh@jcreateit.com" target="_top"><button className="button-email all-caps">Email Us</button></a>
              <a href="https://www.behance.net/josh852a"><button className="button-empty-contact all-caps">View Projects</button></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
