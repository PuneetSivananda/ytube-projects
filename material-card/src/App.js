import React from "react";
import { makeStyles } from "@material-ui/core/styles"

import Card from "./components/Card"
import { paleBlue } from "./constants";
const styles = makeStyles(() => ({
  "@global": {
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box"
    },
    body: {
      backgroundColor: paleBlue,
      backgroundImage: `url(${"./images/pattern-background-desktop.svg"})`,
      backgroundRepeat: "no-repeat",
      fontFamily: "Red Hat Display" | "sans-serif",
      fontSize: "16px"
    }
  }
}))

const App = () => {
  styles()
  return (
    <>
      <Card />
    </>
  );
}

export default App;
