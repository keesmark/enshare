import React, { Component } from "react";
import { connect } from "react-redux";
import { getGear, updateGear } from "../../store/actions/gearActions";
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
import { compose } from "redux";

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

class EditGear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      amazonUrl: "",
      imgUrl: "",
      content: ""
    };
  }
  componentDidMount() {
    this.props.getGear(this.props.match.params.id).then(() => {
      const { gear } = this.props;
      const { title, content, amazonUrl, imgUrl } = gear;
      this.setState({
        title,
        content,
        amazonUrl,
        imgUrl
      });
    });
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const id = this.props.gear.id;
    const { title, content, amazonUrl, imgUrl } = this.state;
    const gear = { id, title, content, amazonUrl, imgUrl };
    this.props.updateGear(gear);
  };
  render() {
    const { classes } = this.props;
    const { title, content, amazonUrl, imgUrl } = this.state;
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <CreateIcon />
            </Avatar>
            <Typography component="h2" variant="h5">
              編集画面
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
                    value={title}
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
                    value={amazonUrl}
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
                      value={imgUrl}
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
                    id="content"
                    multiline
                    onChange={this.handleChange}
                    rows="10"
                    include_hidden="false"
                    value={content}
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

EditGear.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ gear }) => ({ gear });

const mapDispatchToProps = { updateGear, getGear };

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EditGear);
