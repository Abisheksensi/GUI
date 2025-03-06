import React, { Component } from "react";
import HeroSec from "../../Sections/Homepage/HeroSec/HeroSec";
import GallerySec from "../../Sections/Homepage/GallerySec/GallerySec";
import FeatureSec from "../../Sections/Homepage/FeaturesSec/FeatureSec";
import TrendsSec from "../../Sections/Homepage/TrendsSec/TrendsSec";
import MapSec from "../../Sections/Homepage/MapSec/MapSec";
import Footer from "../../Sections/Homepage/Footer/Footer";
import './Homepage.css';

export class Homepage extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      scrollTarget: 0,
      scrollCurrent: 0,
    };
    this.contentRef = React.createRef();
    this.animationFrame = null;
    this.maxScroll = 0;
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel, { passive: false });
    this.updateMaxScroll(); // Calculate initial maxScroll
    this.animateScroll();
    // Recalculate maxScroll after content fully loads
    window.addEventListener('resize', this.updateMaxScroll); // Handle window resize
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
    window.removeEventListener('resize', this.updateMaxScroll);
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  updateMaxScroll = () => {
    if (this.contentRef.current) {
      this.maxScroll = this.contentRef.current.scrollHeight - window.innerHeight;
      // Ensure scrollTarget stays within bounds
      this.setState(prevState => ({
        scrollTarget: Math.min(prevState.scrollTarget, this.maxScroll),
        scrollCurrent: Math.min(prevState.scrollCurrent, this.maxScroll)
      }));
    }
  };

  handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * 2; // Sensitivity
    this.setState(prevState => {
      const newTarget = prevState.scrollTarget + delta;
      return {
        scrollTarget: Math.max(0, Math.min(newTarget, this.maxScroll))
      };
    });
    if (!this.animationFrame) {
      this.animateScroll();
    }
  };

  animateScroll = () => {
    const { scrollCurrent, scrollTarget } = this.state;
    const ease = 0.08;
    const newScroll = scrollCurrent + (scrollTarget - scrollCurrent) * ease;

    if (this.contentRef.current) {
      this.contentRef.current.style.transform = `translate3d(0, ${-newScroll}px, 0)`;
    }

    this.setState({ scrollCurrent: newScroll });

    if (Math.abs(scrollTarget - newScroll) > 1) {
      this.animationFrame = requestAnimationFrame(this.animateScroll);
    } else {
      this.animationFrame = null;
    }
  };

  render() {
    return (
      <div className="homepage">
        <div className="homepage-sections" ref={this.contentRef}>
          <HeroSec />
          <GallerySec />
          <FeatureSec />
          <TrendsSec />
          <MapSec />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Homepage;