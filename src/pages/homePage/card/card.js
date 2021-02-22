import React from "react";
import Paper from "../../../components/paper/paper";
import Box from "../../../components/box/box";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classes from "./card.module.css";

/**
 * Card componenet used to provide the user with a point of interaction
 */
class Card extends React.PureComponent {
  render() {
    return (
      <Box t={2}>
        <Paper>
          <Box p={2}>
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
            <Box t={2}>
              <Link
                to={this.props.link}
                className={[classes.link, "primary-background-color "].join(
                  " "
                )}
              >
                {this.props.text}
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
