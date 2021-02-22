import React from "react";
import classes from './line.module.css';
/**
 * Creates a stylish looking line, used to create a seperator between content
 */
class Line extends React.Component {
  render() {
    return <hr className={classes.line} />;
  }
}

export default Line;
