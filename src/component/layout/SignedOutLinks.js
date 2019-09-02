import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  linkColor: {
    color: "#fff",
    textDecoration: "none"
  }
}));

const SignedOutLinks = () => {
  const classes = useStyles();
  return (
    <Toolbar>
      <NavLink to="/signUp" className={classes.linkColor}>
        <Button color="inherit">会員登録</Button>
      </NavLink>
      <NavLink to="/signIn" className={classes.linkColor}>
        <Button color="inherit">ログイン</Button>
      </NavLink>
    </Toolbar>
  );
};

export default SignedOutLinks;
