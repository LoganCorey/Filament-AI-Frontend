import React from "react";
import Tag from "../tag/tag";
import classes from "./displayTags.module.css";
import PropTypes from "prop-types";

/**
 * displays a list of tags with no action, color also changes in a range
 */
class DisplayTags extends React.PureComponent {
  render() {
    const h = 322.8;
    const v = 94.5;
    const l = 35.5;
    return (
      <>
        <ul id="tags" className={classes.tagList}>
          {this.props.tags.map((tag, index) => {
            const color = `hsl(${h - index + 1}, ${v}%, ${l}%)`;

            return <Tag name={tag.tag} key={tag.id} color={color} />;
          })}
        </ul>
      </>
    );
  }
}

DisplayTags.propTypes = {
  tags: PropTypes.array.isRequired
};


export default DisplayTags;
