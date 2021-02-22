import React from "react";
import Highlight from "./highlight";
import classes from "./textHighlighter.module.css";

class TextHighlighter extends React.Component {
  getAnnotationId = (annotationText) => {
    return this.props.annotations.filter(
      (annotation) => annotation.annotation === annotationText
    )[0].id;
  };

  getAnnotationTag = (annotationText) => {
    const tagId = this.props.annotations.filter(
      (annotation) => annotation.annotation === annotationText
    )[0].tagid;
    return this.props.tags.filter((tag) => tag.id === tagId)[0].tag;
  };

  render() {
    const annotationsList = this.props.annotations.map((annotation) => {
      return annotation.annotation;
    });
    let reg = "(";
    for(let i =0; i < annotationsList.length; i++){
      if(i === annotationsList.length - 1){
        //reg += "(?:^|\\W|[.!?\\-])" + "(" + annotationsList[i]+ ")"+ "(?:^|\\W|[.!?\\-])"
        //reg+= "(:?^|\\s)(:?" +annotationsList[i] + ")(:?^|\\s)";
        reg+="\\b" + annotationsList[i] + "\\b"
      
      }
      else{
        //reg += "(?:^|\\W|[.!?\\-])" +"(" + annotationsList[i]+ ")"+"(?:$|\\W|[.!?\\-])|";
        //reg+= "(:?^|\\s)(" +annotationsList[i] + ")(:?^|\\s)|";
        reg += "\\b" +annotationsList[i] +"\\b|"
      }
    }
    reg+=")"
   // console.log(reg);
    
      //new RegExp(
    //    "((?<=\\s|^)" + annotationsList.join("|") + "(?=\\s|$|[.!?\\-,]))",
      //  "gi"
   //   )
   //"((?<=\\s|^)" + annotationsList.join("|") + "(?=\\s|$|[.!?\\-,]))"
   console.log(annotationsList)
    const parts = this.props.snippet.split(new RegExp(reg,"gi"));
    return (
      <div className={classes.textArea}>
        <span>
          {parts.map((part, i) =>
            annotationsList.includes(part) ? (
              <Highlight
                onClick={() =>
                  this.props.deleteAnnotation(this.getAnnotationId(part))
                }
                key={i}
                text={part}
                annotation={this.getAnnotationTag(part)}
              />
            ) : (
              part
            )
          )}
        </span>
      </div>
    );
  }
}

export default TextHighlighter;
