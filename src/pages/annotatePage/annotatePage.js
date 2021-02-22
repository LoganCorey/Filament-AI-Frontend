import React from "react";
import Line from "../../components/line/line";
import {
  getAnnotationBySnippetId,
  createAnnotation,
  deleteAnnotation,
} from "../../utils/api";
import TextHighlighter from "../../components/textHighlighter/textHighlighter";
import QuickNavigate from "../../components/quickNavigate/quickNavigate";
import DisplayActionTags from "./displayActionTags/displayActionTags";
import Loading from '../../components/loading/loading';
class AnnotatePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      snippet: "",
      id: null,
      tags: [],
      annotations: [],
      replacedText: [],
      failedMount: false,
      loading:true,
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    const id = window.location.href.split("/").pop();
    const res = await getAnnotationBySnippetId(id);
    //console.log(res);

    if (res.status >= 200 || res.status < 300) {
      const snippet = res.data.snippet[0].snippet;
      const tags = res.data.tags;
      const annotations = res.data.annotations;
      this.setState((state, props) => {
        return {
          ...state,
          snippet,
          id,
          tags,
          annotations,
          failedMount: false,
          loading:false
        };
      });
    } else {
      this.setState((state, props) => {
        return { ...state, failedMount: true, loading:false };
      });
    }
  }
  /**
   * Retrieves highlighted text
   */
  getSelectedText = () => {
    let text = "";
    if (window.getSelection) {
      text = window.getSelection().toString();
    } else if (document.selection && document.selection.type !== "Control") {
      text = document.selection.createRange().text;
    }
    return text;
  };

  addAnnotation = async (tagid) => {
    const selectedText = this.getSelectedText();
    if (selectedText !== null || selectedText.length !== 0) {
      const snippetid = this.state.id;
      const res = await createAnnotation(tagid, snippetid, selectedText);
      if (res.status === 201) {
        const resRefresh = await getAnnotationBySnippetId(this.state.id);
        if (resRefresh.status >= 200 || resRefresh.status < 300) {
          const newAnnotation = resRefresh.data.annotations.pop();
          this.setState((prevState) => {
            return {
              ...prevState,
              annotations: [...prevState.annotations, newAnnotation],
            };
          });
        }
      }
    }
  };

  deleteAnnotation = async (annotationId) => {
    const deleteAnn = await deleteAnnotation(annotationId);
    if (deleteAnn.status === 201) {
      const resAnnotations = await getAnnotationBySnippetId(this.state.id);
      if (resAnnotations.status >= 200 || resAnnotations.stauts < 300) {
        this.setState((prevState) => {
          console.log(this.prevState);
          return {
            ...this.state,
            annotations: [...resAnnotations.data.annotations],
          };
        });
      }
    }
  };
  render() {
    return (
      <>
        <QuickNavigate to="/snippets" />
        <h1> Annotate Snippet</h1>
        <p style={{maxWidth:'80%'}}>
          To annotate the snippet highlight some text and then click the desired
          tag in the tags box directly below.  Also if you wish to delete a tag then click on the tag in the snippet below.
        </p>
        <Line />
        { this.state.loading? <Loading/>: null}
        {this.state.failedMount ? (
          <p className="errorText">
            {" "}
            Could not retrieve information for snippet!
          </p>
        ) : null}
        {this.state.tags ? (
          <DisplayActionTags
            tags={this.state.tags}
            onClick={this.addAnnotation}
          />
        ) : (
          <p>No tags found.</p>
        )}

        <h2>Snippet</h2>
        { this.state.loading? <Loading/>: null}
        {this.state.failedMount !== "" ? (
          <TextHighlighter
            annotations={this.state.annotations}
            snippet={this.state.snippet}
            deleteAnnotation={this.deleteAnnotation}
            tags={this.state.tags}
          />
        ) : (
          <p className="errorText">Could not retrieve snippet!</p>
        )}
      </>
    );
  }
}
/* <span>{this.state.replacedText.map(part => part.toLowerCase() === this.state.annotations[0].annotation.toLowerCase() || part.toLowerCase() === this.state.annotations[1].annotation.toLowerCase() ? <b>{part}</b> : part)}</span>*/
export default AnnotatePage;

/**
 * 
 * 
 * 
 * 
 *         <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            maxWidth: "50%",
          }}
        >
          {this.state.tags.map((tag, index) => {
            // purple was #01579b 280, 61, 50
            /*  const h = 346.4;
              const v = 100;
              const l = 66.3;
              */
/*
             const h = 322.8;
             const v = 94.5;
             const l = 35.5;
             const color = `hsl(${h - index + 1}, ${v}%, ${l}%)`;
             return (
               <div
                 key={tag.id}
                 style={{
                   marginLeft: 10,
                   marginRight: 10,
                   marginBottom: 20,
                 }}
               >
                 <Button
                   text={tag.tag}
                   color={color}
                   onClick={() => this.addAnnotation(tag.id)}
                 />
               </div>
             );
           })}
         </div>
         <h2>Snippet</h2>
         {this.state.snippet !== "" ? (
           <TextHighlighter
             annotations={this.state.annotations}
             snippet={this.state.snippet}
             deleteAnnotation={this.deleteAnnotation}
             tags={this.state.tags}
           />
         ) : null}
 */
