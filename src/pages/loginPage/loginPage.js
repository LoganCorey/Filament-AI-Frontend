import React from "react";
import Grid from "../../components/grid/grid";
import Button from "../../components/button/button";
import FormInput from "../../components/form/formInput/formInput";
import classes from "./loginPage.module.css";
import Box from "../../components/box/box";
import Line from "../../components/line/line";
import FormError from "../../components/form/formError/formError";
import { loginAction } from "../../utils/api";
import { Redirect } from "react-router";
/**
 * Page used for signing in a user
 */
class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      invalidLogin: false,
      successLogin: false,
    };
  }
  /**
   * Handles the updating of any form components in state
   * by accessing the id property
   */
  handleFormChange = (e) => {
    const id = e.currentTarget.id;
    this.setState((state, props) => {
      let newState = { ...state };
      newState[id] = e.target.value;
      return newState;
    });
  };

  loginFunc = async (e) => {
    e.preventDefault();
    const res = await loginAction(this.state.email, this.state.password);
    //console.log(res.status);
    if (res.status >= 400) {
      this.setState((state, props) => {
        return { ...state, invalidLogin: true };
      });
    } else {
      this.setState((state, props) => {
        this.props.setLoggedIn();
        return { ...state, successLogin: true };
      });
    }
  };

  render() {
    if (this.state.successLogin) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <>
        <header>
          <h1> Sign In </h1>
          <p>Login and continue labeling NLP data.</p>
          <Line />
        </header>
        <main>
          {this.props.location && this.props.location.requireLogin ? (
            <FormError message="Please login to gain access to the previous page" />
          ) : null}
          {this.state.invalidLogin ? (
            <FormError message="Incorrect Email or Password" />
          ) : null}
          <form name="Login form" onSubmit={this.loginFunc}>
            <Grid row={true} justify="center">
              <Grid column={true} sm={12} md={12}>
                <FormInput
                  onChange={this.handleFormChange}
                  label="Email"
                  for="email"
                  required={true}
                />
              </Grid>

              <Grid column={true} sm={12} md={12}>
                <FormInput
                  onChange={this.handleFormChange}
                  label="Password"
                  for="password"
                  type="password"
                  required={true}
                />
              </Grid>
            </Grid>

            <Box t={3}>
              <Button
                classes={[classes.registerButton]}
                text="Sign In"
                type="submit"
              />
            </Box>
          </form>
        </main>
      </>
    );
  }
}

export default LoginPage;
