import React, { Component } from 'react';
import logo from '../images/tri-j-logo-mid2j.png'
import logo2 from '../images/biz-logos/tri-j-logo-onWhite.png'
import $ from 'jquery';

class NavLogo extends Component {
  render() {
    // $(document).ready(function(){
    //   $(window).scroll(function(){
    //     var scroll = $(window).scrollTop();
    //     if (scroll > 200) {
    //       $("#logoImage").attr("src" , "{logo2}");
    //     }
    //     else{
    //       $("#logoImage").attr("src" , "{logo}");
    //     }
    //   })
    // })
    return (
      <a href="#home">
        <img id="logoImage" className="logo-img"  src={logo} alt="jh-logo" />
      </a>
    );
  }
}

export default NavLogo;
