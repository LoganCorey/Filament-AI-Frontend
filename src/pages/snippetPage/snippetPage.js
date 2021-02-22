import React from "react";
import { getSnippet, patchSnippet } from "../../utils/api";
import TextArea from "../../components/form/textArea/textArea";
import Button from "../../components/button/button";
import FormError from "../../components/form/formError/formError";
import QuickNavigate from "../../components/quickNavigate/quickNavigate";
import Box from "../../components/box/box";

/**
 * Displays a single snippet for edditing
 */
class SnippetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snippet: null,
      snippetRetrievedFailed: false,
      successFullyPatched: false,
      failed: false,
      id: null,
    };
  }

  /**
   * Retrieve the desired snippet
   */
  async componentDidMount() {
    window.scrollTo(0, 0);
    const id = window.location.href.split("/").pop();
    const res = await getSnippet(id);
    if (res.status === 200) {
      this.setState((state, props) => {
        return { ...state, snippet: res.data.snippet.snippet, id };
      });
    } else {
      this.setState((state, props) => {
        return { ...state, snippetRetrievedFailed: true };
      });
    }
  }

  handleChange = (e) => {
    const id = e.currentTarget.id;

    this.setState((state, props) => {
      let newState = { ...state };
      newState[id] = e.target.value;
      return newState;
    });
  };

  onSnippetPatch = async (e) => {
    e.preventDefault();
    const res = await patchSnippet(this.state.id, this.state.snippet);

    if (res.status === 200) {
      this.setState((state, props) => {
        return { ...state, successFullyPatched: true, failed: false };
      });
    } else {
      this.setState((state, props) => {
        return { ...state, failed: true, successFullyPatched: false };
      });
    }
  };
  render() {
    return (
      <>
      <header>
        <QuickNavigate to="/snippets" />
        <h1>Edit Snippet</h1>
        <p>Edit the text in the below box to update your snippet!</p>
        </header>
        <main>
        {this.state.failed ? (
          <FormError text="Could not update this snippet" />
        ) : null}
        {this.state.successFullyPatched ? (
          <p className="successText">Successfully updated this snippet!</p>
        ) : null}
        {this.state.snippetRetrievedFailed? <p className="errorText">Could not retrieve snippet!</p>:null}
        <form name="Update snippet form" onSubmit={this.onSnippetPatch}>
          <TextArea
            onChange={this.handleChange}
            for="snippet"
            value={this.state.snippet ? this.state.snippet : ""}
            rows={4}
            cols={40}
            required={true}
          />
          <Box t={3} />
          <Button type="submit" text="Update" />
        </form>
        </main>
      </>
    );
  }
}

export default SnippetPage;