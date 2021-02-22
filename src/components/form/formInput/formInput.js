import React from "react";
import PropTypes from "prop-types";
import classes from "./formInput.module.css";

class FormInput extends React.PureComponent {
  render() {
    return (
      <div className={classes.inputContainer}>
        <label htmlFor={this.props.for} className={classes.label}>
          {this.props.label}
        </label>
        <input
          id={this.props.for}
          onChange={this.props.onChange}
          htmlFor={this.props.for}
          type={this.props.type}
          required={this.props.required}
          className={classes.input}
        />
      </div>
    );
  }
}

FormInput.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  for: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  classes: [],
  type: "text",
  required: PropTypes.bool,
};

export default FormInput;
