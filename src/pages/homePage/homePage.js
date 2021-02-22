import React from "react";
import Line from "../../components/line/line";
import Grid from "../../components/grid/grid";
import Box from "../../components/box/box";
import Card from "./card/card";

/**
 * Page holds calls to action for a user and some information about the app
 */
class HomePage extends React.PureComponent {
  render() {
    return (
      <Box t={5}>
        <header>
          <h1> Welcome Back!</h1>
          <p>
            Welcome to your dashboard. If you're new here please start adding
            some tags and then some snippets by clicking go in the "Manage Your
            Tags" box.
          </p>
          <Line />
        </header>
        <main>
          <Box t={2}>
            <Grid row={true}>
              <Grid column={true} sm={12} md={6}>
                <Card
                  title="Manage Your Snippets"
                  description="Click here to view all your snippets or modify/add some"
                  text="Manage Snippets"
                  link="/snippets"
                />
              </Grid>
              <Grid column={true} sm={12} md={6}>
                <Card
                  title="Manage Your Tags"
                  description="Click here to view all your tags or modify/add some"
                  text="Manage Tags"
                  link="/tags"
                />
              </Grid>
            </Grid>
          </Box>
        </main>
      </Box>
    );
  }
}

export default HomePage;
