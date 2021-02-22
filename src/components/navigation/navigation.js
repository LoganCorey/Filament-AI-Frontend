import React from "react";
import classes from "./navigation.module.css";
import { NavLink } from "react-router-dom";
import annotateJWT from "../../utils/annotateJWT";

/**
 * Simple navigation showing only main items with nothing fancy
 */
class Navigation extends React.Component {
  render() {
    let links;
    // if the user is logged in show them main app routes
    if (this.props.isLoggedIn === true || annotateJWT.getJwt() !== null) {
      links = [
        { name: "Tags", link: "/tags" },
        { name: "Snippets", link: "/snippets" },
        { name: "Logout", link: "/logout" },
      ];
    } else {
      links = [
        { name: "Login", link: "/login" },
        { name: "Register", link: "/register" },
      ];
    }
    return (
      <nav className={classes.navigation}>
        <h3
         
          className={[classes.navigationLogo, "primary-color"].join(" ")}
        >
          Annotator
        </h3>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.name}>
                {" "}
                <NavLink to={link.link} activeClassName="selected">
                  {" "}
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navigation;

/*

  <div className={classes.logoContainer}>
          <a className={[classes.logo, "primary-color"].join(" ")}>Annotator</a>

          <div className={classes.menuRight}>
            <Link to="/login"> Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
*/
