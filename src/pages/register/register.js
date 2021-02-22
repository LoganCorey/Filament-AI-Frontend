import React from "react";
import Grid from "../../components/grid/grid";
import Button from "../../components/button/button";
import FormInput from "../../components/form/formInput/formInput";
import classes from "./register.module.css";
import Box from "../../components/box/box";
import Line from "../../components/line/line";
import FormError from "../../components/form/formError/formError";
import { registerAction } from "../../utils/api";
import { Redirect } from "react-router";

/**
 * Page used for regisering a user to the platform
 */
class Register extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      phone: "",
      passwordConfirm: "",
      password: "",
      invalidRegister: false,
      successRegister: false,
    };
  }

  handleChange = (e) => {
    const id = e.currentTarget.id;

    this.setState((state, props) => {
      let newState = { ...state };
      newState[id] = e.target.value;
      return newState;
    });
  };

  registerFunc = async (e) => {
    e.preventDefault();
    const res = await registerAction(this.state.email, this.state.phone, this.state.password, this.state.passwordConfirm);
    if (res.status >= 400) {
      this.setState((state, props) => {
        return { ...state, invalidRegister: true };
      });
    } else {
      this.setState((state, props) => {
        return { ...state, successRegister: true };
      });
    }
  };

  render() {
    if (this.state.successRegister) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <>
        <header>
          <h1> Register </h1>
          <p>Sign up and begin labeling NLP data faster and more efficently</p>
          <Line />
        </header>
        <main>
          {this.state.invalidRegister ? (
            <FormError message="Something went wrong.  Please confirm your passwords are correct or try a different email." />
          ) : null}
          <form name="Register form" onSubmit={this.registerFunc}>
          <Grid row={true}>
            <Grid column={true} sm={12} md={6}>
              <FormInput
                onChange={this.handleChange}
                label="Email"
                for="email"
              />
            </Grid>
            <Grid column={true} sm={12} md={6}>
              <FormInput
                onChange={this.handleChange}
                label="Phone Number"
                for="phone"
              />
            </Grid>
          </Grid>
          <Box t={2}>
            <Grid row={true}>
              <Grid column={true} sm={12} md={6}>
                <FormInput
                  onChange={this.handleChange}
                  label="Password"
                  for="password"
                  type="password"
                />
              </Grid>
              <Grid column={true} sm={12} md={6}>
                <FormInput
                  onChange={this.handleChange}
                  label="Confirm Password"
                  for="passwordConfirm"
                  type="password"
                />
              </Grid>
            </Grid>
          </Box>
          <Box t={3}>
            <Button type="submit" classes={[classes.registerButton]} text="Register" />
          </Box>
          </form>
        </main>
      </>
    );
  }
}

export default Register;
