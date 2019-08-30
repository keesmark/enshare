import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(theme => ({
  linkColor: {
    color: "#fff",
    textDecoration: "none"
  }
}));

const SignedInLinks = () => {
  const [auth] = React.useState(true);
  const classes = useStyles();
  return (
    <Toolbar>
      <NavLink to="/" className={classes.linkColor}>
        <Button color="inherit">新規投稿</Button>
      </NavLink>
      <NavLink to="/" className={classes.linkColor}>
        <Button color="inherit">ログアウト</Button>
      </NavLink>
      {auth && (
        <div>
          <NavLink to="/" className={classes.linkColor}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </NavLink>
        </div>
      )}
    </Toolbar>
  );
};

export default SignedInLinks;
