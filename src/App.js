import React, { Component } from 'react';
import Banner from './Components/Banner';
import WhatWeDo from './Components/WhatWeDo';
import RecentWork from './Components/RecentWork';
import PersonalProjects from './Components/PersonalProjects';
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './styles/main.css'

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <WhatWeDo />
        <RecentWork />
        <PersonalProjects />
        <Testimonials />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
