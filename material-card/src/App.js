import React from "react";
import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(() => ({
  "@global": {
    body: {
      backgroundColor: "tomato"
    }
  },
  card: {
    width: "450px",
    backgroundColor: "white"
  }
}))

const App = () => {
  const classes = styles()
  return (
    <div className={classes.card}>
      Hello World!
    </div>
  );
}

export default App;
