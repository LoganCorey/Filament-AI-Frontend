import React from "react";
import Paper from "../paper/paper";
import Box from "../box/box";
import { Link } from "react-router-dom";
import classes from "./snippet.module.css";

class Snippet extends React.PureComponent {
  render() {
    return (
      <div >
        <Paper classes={[classes.snippet]}>
          <Box p={3}>{this.props.snippet}</Box>
        </Paper>
        <div>
        <h3 style={{ textAlign: "center" }}>{this.props.title}</h3>
        <Link to={`/snippet/${this.props.id}`}>Edit Snippet</Link><br/>
        <Link to={`/annotate_snippet/${this.props.id}`}>Annotate Snippet</Link>
        </div>
      </div>
    );
  }
}

export default Snippet;
