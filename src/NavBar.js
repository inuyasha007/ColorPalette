import React, { Component } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="NavBar">
        <div className="logo">
          <a href="#">reactcolorpicker</a>
        </div>
        <div className="slider">
          <div className="slider-container">
            <span>Level:{level}</span>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
      </header>
    );
  }
}
