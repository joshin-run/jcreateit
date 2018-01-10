import React, { Component } from 'react';
import Banner from './Components/Banner';
import WhatWeDo from './Components/WhatWeDo';
import RecentWork from './Components/RecentWork';
import Testimonials from './Components/Testimonials';
import PersonalProjects from './Components/PersonalProjects';
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
        <Footer />
      </div>
    );
  }
}

export default App;
