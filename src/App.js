import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./pages/register/register";
import LoginPage from "./pages/loginPage/loginPage";
import TagsPage from "./pages/tagsPage/tagsPage";
import AnnotatePage from "./pages/annotatePage/annotatePage";
import SnippetsPage from "./pages/snippetsPage/snippetsPage";
import HomePage from "./pages/homePage/homePage";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import Container from "./components/container/container";
import Box from "./components/box/box";
import AccessControl from "./components/accessControl/accessControl";
import SnippetPage from "./pages/snippetPage/snippetPage";
import LogoutPage from "./pages/logoutPage/logoutPage";
import Page404 from './pages/404Page/404Page';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isloggedIn: false };
  }

  setLoggedIn = () => {
    this.setState((state, props) => {
      return { ...state, isLoggedIn: true };
    });
  };
  setLoggedOut = () => {
    this.setState((state, props) => {
      return { ...state, isLoggedIn: false };
    });
  };

  render() {
    return (
      <div>
        <Router>
          <Navigation isLoggedIn={this.state.isloggedIn} />
          <Box t={4}>
            <Container>
              <Switch>
                <Route
                  path="/login"
                  render={(props) => (
                    <LoginPage {...props} setLoggedIn={this.setLoggedIn} />
                  )}
                />
                <Route
                  path="/logout"
                  render={(props) => (
                    <LogoutPage {...props} setLoggedOut={this.setLoggedOut} />
                  )}
                />
                 <Route
                  path="/register"
                  render={(props) => (
                    <Register {...props} setLoggedIn={this.setLoggedIn}/>
                  )}
                />
                <Route path="/tags">
                  <AccessControl>
                    <TagsPage />
                  </AccessControl>
                </Route>
                <Route path="/snippets">
                  <AccessControl>
                    <SnippetsPage />
                  </AccessControl>
                </Route>
                <Route path="/snippet/:id">
                  <AccessControl>
                    <SnippetPage />
                  </AccessControl>
                </Route>
                <Route path="/annotate_snippet/:id">
                  <AccessControl>
                    <AnnotatePage />
                  </AccessControl>
                </Route>
                <Route path="/dashboard">
                  <AccessControl>
                    <HomePage />
                  </AccessControl>
                </Route>
                <Route
                  path="/"
                  render={(props) => (
                    <LoginPage {...props} setLoggedIn={this.setLoggedIn} />
                  )}
                />
                <Route component={Page404}/>
              </Switch>
            </Container>
          </Box>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
