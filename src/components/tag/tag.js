import React from "react";
import Paper from "../paper/paper";
import PropTypes from "prop-types";
import classes from "./tag.module.css";

/**
 * displays a tag 
 */
class Tag extends React.PureComponent {
  render() {
    return (
      <li
        className={classes.tag}
        style={{ backgroundColor: this.props.color }}
      >
        {this.props.name}
      </li>
    );
  }
}

Paper.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Tag;
