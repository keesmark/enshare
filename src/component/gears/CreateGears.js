import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import CreateIcon from "@material-ui/icons/Create";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  button: {
    margin: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  input: {
    display: "none"
  }
});

class CreateGears extends Component {
  state = {
    title: "",
    amazonUrl: "",
    imgUrl: "",
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <CreateIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              新規投稿
            </Typography>
            <form
              onSubmit={this.handleSubmit}
              className={classes.form}
              noValidate
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="title"
                    label="title"
                    name="title"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="amazonUrl"
                    label="amazon URL"
                    name="amazonUrl"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="imgUrl"
                    multiple
                    type="file"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="imgUrl">
                    <Button
                      variant="contained"
                      component="span"
                      className={classes.button}
                      color="default"
                      fullWidth
                      id="imgUrlBtn"
                      name="imgUrlBtn"
                      size="large"
                    >
                      Upload
                      <CloudUploadIcon className={classes.rightIcon} />
                    </Button>
                  </label>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="content"
                    label="レビューとコメント"
                    type="content"
                    id="content"
                    multiline
                    onChange={this.handleChange}
                    rows="10"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                投稿
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    まだアカウントをお持ちでない方は会員登録してください。
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}
CreateGears.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateGears);
