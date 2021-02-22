import React from "react";
import PropTypes from "prop-types";
/**
 * General utility component for adding margin and padding
 */
class Box extends React.PureComponent {
  render() {
    const amount = 8;

    let styles = {};
    if (this.props.m) {
      styles["margin"] = amount * this.props.m;
    }
    if (this.props.p) {
      styles["padding"] = amount * this.props.p;
    }
    if (this.props.t) {
      styles["marginTop"] = amount * this.props.t;
    }
    return <div style={styles}>{this.props.children}</div>;
  }
}

const spacingSizes = [-2, -1, 1, 2, 3, 4, 5];

Box.propTypes = {
  m: PropTypes.oneOf(spacingSizes),
  p: PropTypes.oneOf(spacingSizes),
  t: PropTypes.oneOf(spacingSizes),
};

export default Box;
