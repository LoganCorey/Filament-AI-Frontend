import React from "react";
import Snippet from "../../components/snippet/snippet";
import Line from "../../components/line/line";
import Grid from "../../components/grid/grid";
import TextArea from "../../components/form/textArea/textArea";
import Button from "../../components/button/button";
import Box from "../../components/box/box";
import { createSnippet, getSnippets } from "../../utils/api";
import FormError from "../../components/form/formError/formError";
import QuickNavigate from "../../components/quickNavigate/quickNavigate";
import classes from "./snippetsPage.module.css";
import Loading from "../../components/loading/loading";
/**
 * Displays every snippet and lets a user add a new snippet
 */
class SnippetsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      snippets: [],
      snippet: "",
      snippetError: false,
      snippetSuccess: false,
      loadingSnippets: true,
      loadingSnippetsError: "",
      snippetErrorMessage: "",
    };
  }
  /**
   * when componenet mounts retrieve all snippets
   */
  async componentDidMount() {
    window.scrollTo(0, 0);
    const res = await getSnippets();
    if (res.status === 200) {
      this.setState((state, props) => {
        return {
          ...state,
          snippets: res.data.snippets,
          loadingSnippets: false,
        };
      });
    } else {
      this.setState((state, props) => {
        return {
          ...state,
          loadingSnippetsError: "Could not retrieve snippets",
          loadingSnippets: false,
        };
      });
    }
  }

  /**
   * handles text area updating or any other form element
   * @param {} e event
   */
  handleChange = (e) => {
    const id = e.currentTarget.id;
    this.setState((state, props) => {
      let newState = { ...state };
      newState[id] = e.target.value;
      return newState;
    });
  };

  /**
   * Function for submitting a snippet
   * @param {} e event
   */
  snippetSubmit = async (e) => {
    e.preventDefault();

    const snippetRes = await createSnippet(this.state.snippet);
    if (snippetRes.status === 201) {
      const res = await getSnippets();
      if (res.status === 200) {
        this.setState((state, props) => {
          return {
            ...state,
            snippets: res.data.snippets,
            snippet: "",
            snippetSuccess: true,
            snippetError: false,
          };
        });
      }
    }
     else {
      this.setState((state, props) => {
        return {
          ...state,
          snippetError: true,
          snippetSuccess: false,
          snippetErrorMessage: snippetRes.data.message,
        };
      });
    }
  };

  render() {
    return (
      <>
        <header>
          <QuickNavigate to="/dashboard" />
          <h1> Manage Your Snippets</h1>
          <p>
            Click any snippet below to edit it or click in the bottom right to
            create a new snippet.
          </p>
        </header>
        <main>
          {this.state.snippetError ? (
            <FormError message={this.state.snippetErrorMessage} />
          ) : null}
          {this.state.snippetSuccess ? (
            <p className="successText">Successfully added a new snippet!</p>
          ) : null}
          <form name="submit a snippet" onSubmit={this.snippetSubmit}>
            <Grid row={true} justify="center">
              <Grid column={true} sm={12} md={12}>
                <TextArea
                  rows={4}
                  cols={50}
                  for="snippet"
                  onChange={this.handleChange}
                  required={true}
                  value={this.state.snippet}
                />
              </Grid>

              <Grid column={true} sm={12} md={12}>
                <Box t={3}>
                  <Button type="submit" text="Create Snippet" />
                </Box>
              </Grid>
            </Grid>
          </form>
          <Box t={2} />
          <Line />
          <Box t={1} />
          <h1> All Snippets</h1>
          {this.state.loadingSnippets ? <Loading /> : null}
          {this.state.loadingSnippetsError !== "" ? (
            <p className="errorText">Could not load snippets</p>
          ) : null}
          <div className={classes.snippetsContainer}>
            {this.state.snippets.map((snippet, index) => {
              return (
                <Snippet
                  key={snippet.id}
                  title={`Snippet #${index + 1}`}
                  snippet={snippet.snippet}
                  id={snippet.id}
                />
              );
            })}
          </div>
        </main>
      </>
    );
  }
}

export default SnippetsPage;
