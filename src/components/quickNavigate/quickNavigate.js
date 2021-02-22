import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classes from './quickNavigate.module.css';

/**
 * Used as a way to go back to a previous page or a relevant page
 */
class QuickNavigate extends React.PureComponent {
  render() {
    return (
      <div>
        {" "}
        <Link to={this.props.to} className={classes.quickNavigate}>Go Back</Link>
      </div>
    );
  }
}

QuickNavigate.propTypes = {
  to: PropTypes.string.isRequired
}

export default QuickNavigate;
