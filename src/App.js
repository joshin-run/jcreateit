import React, { Component } from 'react';
import Banner from './Components/Banner';
import Bio from './Components/Bio';
import Projects from './Components/Projects';
import Design from './Components/Design';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './styles/main.css'

class App extends Component {
  render() {
    return (
      <div className="">
        <Banner />
        {/*<Projects />
        <Contact />*/}
        <Footer />
      </div>
    );
  }
}

export default App;
