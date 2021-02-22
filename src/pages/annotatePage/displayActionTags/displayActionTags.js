import React from "react";
import ButtonTag from "./buttonTag";
import classes from "./displayActionTags.module.css";
import PropTypes from "prop-types";

/**
 * displays a list of tags with no action, color also changes in a range that can be clicked to preform an action
 */
class DisplayActionTags extends React.PureComponent {
  render() {
    const h = 322.8;
    const v = 94.5;
    const l = 35.5;
    return (
      <>
        <ul id="tags" className={classes.tagList}>
          {this.props.tags.map((tag, index) => {
            const color = `hsl(${h - index + 1}, ${v}%, ${l}%)`;

            return <ButtonTag onClick={()=>this.props.onClick(tag.id)} name={tag.tag} key={tag.id} color={color} />;
          })}
        </ul>
      </>
    );
  }
}

DisplayActionTags.propTypes = {
  tags: PropTypes.array.isRequired,
  onClick: PropTypes.func
};


export default DisplayActionTags;
