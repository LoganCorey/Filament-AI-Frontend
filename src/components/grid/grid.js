import React from "react";
import classes from "./grid.module.css";
import PropTypes from "prop-types";


/**
 * General utility component for flexible grid to components
 */
class Grid extends React.PureComponent {
  render() {
    const {
      alignItems,
      children,
      column,
      expanded,
      justify,
      lg,
      md,
      row,
      sm,
    } = this.props;
    const isRow = row || !column;
    const styles =
      (!isRow ? classes.column : classes.row) +
      // Row styling
      (isRow && expanded ? ` ${classes.expanded}` : "") +
      (isRow && justify ? ` ${classes[justify]}` : "") +
      (isRow && alignItems ? ` ${classes["align-" + alignItems]}` : "") +
      // Column styling
      (!isRow && sm ? ` ${classes["sm-" + sm]}` : "") +
      (!isRow && md ? ` ${classes["md-" + md]}` : "") +
      (!isRow && lg ? ` ${classes["lg-" + lg]}` : "");

    return <div className={styles}>{children}</div>;
  }
}

const gridSizes = [1,2,3,4,5,6,7,8,9,10,11,12];

Grid.propTypes = {
  alignItems: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "stretch",
    "baseline",
  ]),
  column: PropTypes.bool,
  expanded: PropTypes.bool,
  justify: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
    "space-evenly",
  ]),
  lg: PropTypes.oneOf(gridSizes),
  md: PropTypes.oneOf(gridSizes),
  row: PropTypes.bool,
  sm: PropTypes.oneOf(gridSizes),
};

export default Grid;
