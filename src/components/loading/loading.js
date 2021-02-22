import React from "react";
import classes from "./loader.module.css";

class Loading extends React.PureComponent {
  render() {
    return <div className={classes.loader}></div>;
  }
}

export default Loading;
