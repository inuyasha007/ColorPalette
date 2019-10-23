import React, { Component } from "react";
import { palette } from "@material-ui/system";
import { Link } from "react-router-dom";

export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>React Colors</h1>
        {palettes.map(palette => (
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        ))}
      </div>
    );
  }
}
