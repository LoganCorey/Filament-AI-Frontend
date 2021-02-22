import React from "react";
import DisplayTags from "../../components/displayTags/displayTags";
import Line from "../../components/line/line";
import { getTags } from "../../utils/api";
import Box from "../../components/box/box";
import QuickNavigate from "../../components/quickNavigate/quickNavigate";
import Loading from '../../components/loading/loading';
/**
 * Currently this page is used for display every tag in the database
 */
class TagsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      tagsError: false,
      loading:true,
    };
  }
  /**
   * Retrieves all the tags in the database
   */
  async componentDidMount() {
    window.scrollTo(0, 0);
    const res = await getTags();
    if (res.status === 200) {
      this.setState((state, props) => {
        return { ...state, tags: res.data.tags, tagsError: false, loading:false };
      });
    } else {
      this.setState((state, props) => {
        return { ...state, tagsErorr: true, loading:false };
      });
    }
  }
  render() {
    return (
      <>
        <header>
          <QuickNavigate to="/dashboard" />
          <h1> View Your Tags</h1>
          <p>
            Here are all the tags that have been created. If you want another
            one be sure to ask the admin!
          </p>
          <Line />
          {this.state.loading? <Loading/>: null}
          {this.state.tagsError ? (
            <h4 className="errorText">
              We weren't able to retrieve any tags :(
            </h4>
          ) : null}
        </header>
        <Box m={2} />
        <main>
          <DisplayTags tags={this.state.tags} />
        </main>
      </>
    );
  }
}

export default TagsPage;
