import React from "react";
import classes from "./highlight.module.css";

class Highlight extends React.Component {
  render() {
    return (
      <div style={{display:'inline-block', marginLeft:'5px', marginRight:'5px'}}>
       
        <button onClick={this.props.onClick} className={classes.highlightButton}>
          {this.props.text} 
        </button><sup className={[classes.sup,"primary-color"].join(" ")}>{this.props.annotation}</sup> {" "}
      </div>
    );
  }
}

export default Highlight;
