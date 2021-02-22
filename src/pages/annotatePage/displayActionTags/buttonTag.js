import React from "react";
import Paper from "../../../components/paper/paper";
import PropTypes from "prop-types";
import classes from "./buttonTag.module.css";

/**
 * displays a tag
 */
class ButtonTag extends React.PureComponent {
  render() {
    return (
      <li className={classes.tag}> 
        <button
          className={classes.btn}
          style={{ backgroundColor: this.props.color }}
          onClick={this.props.onClick}
        >
          {" "}
          {this.props.name}
        </button>
      </li>
    );
  }
}

Paper.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ButtonTag;
