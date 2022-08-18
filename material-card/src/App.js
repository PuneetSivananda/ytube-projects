import React from "react";
import { makeStyles } from "@material-ui/core/styles"

import Card from "./components/Card"

const styles = makeStyles(() => ({
  "@global": {
    "*": {
      margin: 0,
      padding: 0
    },
    body: {
      backgroundColor: "tomato"
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
