import React, { Component } from 'react';
import jlogoMain from '../images/jlogo-dark-blue-white-border-20px.svg';
import jlogoTri from '../images/portfolio-logos/jh-tri-logo.svg';
import jCurve from '../images/portfolio-logos/j-curve.svg';
import jsqdigi from '../images/portfolio-logos/jlogo-sq-digi.svg';
import jhexDot from '../images/portfolio-logos/j-hex-dot.png';
import jhexDotDark from '../images/portfolio-logos/j-hex-dot-dark.svg';
import jbrick from '../images/portfolio-logos/j-brick.svg';
import jcircle from '../images/portfolio-logos/j-dash-circ.svg';
import jhPentLogo from '../images/portfolio-logos/jh-pentlogo.svg';
import jlogoLightHex from '../images/portfolio-logos/jlogo-light-hex.svg';
import jlogosep from '../images/portfolio-logos/jlogo-sep.svg';
import flexpxLogo from '../images/portfolio-logos/flexgrid-pxlogo.jpg';
import fslogo from '../images/portfolio-logos/fs.jpg';
import ssrough from '../images/portfolio-logos/StoryStart-rough.svg';
import eightReflect from '../images/portfolio-logos/The8DollarTieGuy-reflection.png';
import theEightLogo from '../images/portfolio-logos/the8-logo.svg';
import theEightFinal from '../images/portfolio-logos/TheEightDollarTieGuyFinalLogo.svg';
import trebleJH from '../images/portfolio-logos/treble-clef-jhStyle.png';
import trebleClef from '../images/portfolio-logos/treble-clef.png';
import hApparelwhite from '../images/portfolio-logos/HolladayApparel_white.png';
import hApparelTag from '../images/portfolio-logos/HolladayApparel_tag.png';
import hApparelBizBlack from '../images/portfolio-logos/HolladayApparel_BizCard_black.png';
import hApparelBizWhite from '../images/portfolio-logos/HolladayApparel_BizCard_white.png';
import onceUponATie from '../images/portfolio-logos/OnceUponATie.jpg';
import PaisleyStripe from '../images/portfolio-logos/paisleyslider.png';
import KeepItBurning from '../images/portfolio-logos/KeepItBurning-Jenks2015.png';
import slcdotnet from '../images/portfolio-logos/SLCNETlogo_final.svg';
import celebrateLife from '../images/portfolio-logos/celebrate-life_logo.jpg';

class PortfolioLogos extends Component {
  render() {
    return (
      <div className="portfolio-logos-wrapper">
        <img className="logos" src={jlogoMain} alt="Josh Holladay Logo" />
        <img className="logos" src={jlogoTri} alt="JH Triangle Logo" />
        <img className="logos" src={slcdotnet} alt="SLC.Net" />
        <img className="logos" src={jCurve} alt="J Curve" />
        <img className="logos" src={jsqdigi} alt="Digi J Logo" />
        <img className="logos" src={jhexDot} alt="J Hex Dot Light Blue" />
        <img className="logos" src={jhexDotDark} alt="J Hex Dot Dark" />
        <img className="logos" src={jbrick} alt="J Brick" />
        <img className="logos" src={jcircle} alt="J Circle" />
        <img className="logos" src={jhPentLogo} alt="Pentigon Logo" />
        <img className="logos" src={jlogoLightHex} alt="JH Hexigon Logo" />
        <img className="logos" src={jlogosep} alt="JH Seven Side Logo" />
        <img className="logos" src={KeepItBurning} alt="Keep It Burning" />
        <img className="logos" src={celebrateLife} alt="Josh Holladay Logo" />
        <img className="logos" src={flexpxLogo} alt="FlexGrid" />
        <img className="logos" src={fslogo} alt="FlowState" />
        <img className="logos" src={ssrough} alt="Story Start Rough" />
        <img className="logos" src={onceUponATie} alt="Once Upon a Tie" />
        <img className="logos" src={eightReflect} alt="The $8 Tie Guy Reflected" />
        <img className="logos" src={theEightLogo} alt="The Eight Guy" />
        <img className="logos" src={theEightFinal} alt="The $8 Tie Guy Final" />
        <img className="logos" src={hApparelwhite} alt="Holladay Apparel White Logo" />
        <img className="logos" src={hApparelTag} alt="Holladay Apparel Necktie Tag" />
        <img className="logos" src={hApparelBizBlack} alt="Holladay Apparel Business Card Black" />
        <img className="logos" src={hApparelBizWhite} alt="Holladay Apparel Business Card White" />
        <img className="logos" src={PaisleyStripe} alt="Paisley Patterns" />
        <img className="logos" src={trebleJH} alt="J Style Treble Clef" />
        <img className="logos" src={trebleClef} alt="Treble Clef" />
      </div>
    );
  }
}

export default PortfolioLogos;
