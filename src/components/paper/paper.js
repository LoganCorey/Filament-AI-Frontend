import React from "react";
import PropTypes from "prop-types";
import classes from "./paper.module.css";

/**
 * Paper Base component which adds a drop shadow and rounded edges with a white background color
 */
class Paper extends React.PureComponent {
  render() {
    return (
      <div className={[classes.paper, ...this.props.classes].join(" ")}>
        {this.props.children}
      </div>
    );
  }
}

Paper.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.element,
  elevation: PropTypes.oneOf(Array.from(Array(10).keys())),
};

Paper.defaultProps = {
  elevation: 0,
  classes: [],
};
export default Paper;
