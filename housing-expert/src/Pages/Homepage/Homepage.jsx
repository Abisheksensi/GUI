import React, { Component } from "react";
import HeroSec from "Sections/Homepage/HeroSec/HeroSec";
import GallerySec from "Sections/Homepage/GallerySec/GallerySec";
import FeaturesSec from "Sections/Homepage/FeaturesSec/FeaturesSec";
import TrendsSec from "Sections/Homepage/TrendsSec/TrendsSec";
import MapSec from "Sections/Homepage/MapSec/MapSec";
import Footer from "Sections/Homepage/Footer/Footer";

export class Homepage extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="homepage">
        <HeroSec />

        <FeaturesSec />

        <GallerySec />


        <TrendsSec />

        <MapSec />

        <Footer />
      </div>
    );
  }
}

export default Homepage;