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

    const parts = this.props.snippet.split(
      new RegExp(
        "((?<=\\s|^)" + annotationsList.join("|") + "(?=\\s|$|[.!?\\-,]))",
        "gi"
      )
    );

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
