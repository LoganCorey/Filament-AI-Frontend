import React from "react";
import PropTypes from "prop-types";

/**
 * Displays a message if something went wrong when
 * filling out a form
 */
class FormError extends React.PureComponent {
  render() {
    return <p style={{ color: "red" }}>{this.props.message}</p>;
  }
}

FormError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default FormError;
