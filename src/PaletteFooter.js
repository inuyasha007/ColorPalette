import React from "react";
import styles from "./styles/PaletteFooterStyles";
import { withStyles } from "@material-ui/core";

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <div>
      <footer clasName={classes.paletteFooter}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </footer>
    </div>
  );
}

export default withStyles(styles)(PaletteFooter);
