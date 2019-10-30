import React from "react";

export default function paletteFooter(props) {
  const { paletteName, emoji } = props;
  return (
    <div>
      <footer clasName="Palette-footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  );
}
