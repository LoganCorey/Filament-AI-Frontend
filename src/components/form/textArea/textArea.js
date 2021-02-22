import React from "react";
import PropTypes from "prop-types";

class TextArea extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.for}>{this.props.label}</label>
        <textarea
        style={{minWidth:'400px', minHeight:'200px'}}
          id={this.props.for}
          name={this.props.for}
          onChange={this.props.onChange}
          rows={this.props.rows}
          cols={this.props.cols}
          value={this.props.value}
          required={this.props.required}
        />
      </div>
    );
  }
}

TextArea.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  for: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  cols: PropTypes.number,
  value: PropTypes.string
};

TextArea.defaultProps = {
  classes: [],
  required: PropTypes.bool,
  value: ""
};

export default TextArea;
