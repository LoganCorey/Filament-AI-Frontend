import React from "react";
import classes from "./button.module.css";
import PropTypes from "prop-types";

/**
 * Button component for user actions
 */
class Button extends React.PureComponent {
  render() {
    return (
      <button
        type={this.props.type}
        style={{ backgroundColor: this.props.color }}
        onClick={this.props.onClick}
        className={[
          classes.btn,
          "primary-background-color",
          ...this.props.classes,
        ].join(" ")}
      >
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  classes: [],
  type: "button",
};
export default Button;
