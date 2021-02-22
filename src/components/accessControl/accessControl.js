import React from "react";
import annotateJWT from "../../utils/annotateJWT";
import { Redirect } from "react-router";

/**
 * Route is used to protect pages that require authroization,
 * everything expect for login and register
 */
class AccessControl extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }
  componentDidMount() {
    if (!annotateJWT.getJwt()) {
      //redirect to login
      this.setState((state, props) => ({
        ...state,
        redirect: true,
      }));
    }
  }

  render() {
    return (
      <>
        {this.state.redirect ? (
          <Redirect
            to={{
              pathname: "/login",
               requireLogin: true ,
            }}
          />
        ) : (
          this.props.children
        )}
      </>
    );
  }
}

export default AccessControl;
