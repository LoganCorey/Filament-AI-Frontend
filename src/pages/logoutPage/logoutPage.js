import React from "react";
import annotateJWT from "../../utils/annotateJWT";

class Logout extends React.PureComponent {
  componentDidMount() {
    this.props.setLoggedOut();
    annotateJWT.eraseJwt();
  }

  render() {
    return (
      <main>
        <h1>You have been successfully logged out </h1>
      </main>
    );
  }
}

export default Logout;
