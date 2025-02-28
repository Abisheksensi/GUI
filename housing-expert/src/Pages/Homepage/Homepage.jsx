import React, { Component } from "react";
import HeroSec from "../../Sections/Homepage/HeroSec/HeroSec";
import GallerySec from "../../Sections/Homepage/GallerySec/GallerySec";
import FeatureSec from "../../Sections/Homepage/FeaturesSec/FeatureSec";
import TrendsSec from "../../Sections/Homepage/TrendsSec/TrendsSec";
import MapSec from "../../Sections/Homepage/MapSec/MapSec";
import Footer from "../../Sections/Homepage/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

export class Homepage extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="homepage">
        <NavBar />
        <HeroSec />

        <GallerySec />
<FeatureSec/>

        <TrendsSec />

        <MapSec />

        <Footer />
      </div>
    );
  }
}

export default Homepage;