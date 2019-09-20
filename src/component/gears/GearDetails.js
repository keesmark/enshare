import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Grid from "@material-ui/core/Grid";
import { getGear, deleteGear } from "../../store/actions/gearActions";
import { connect } from "react-redux";
import { compose } from "redux";
import Moment from "react-moment";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = theme => ({
  card: {
    maxWidth: "600px",
    marginTop: "20px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  },
  root: {
    flexGrow: 1
  },
  favorites: {
    marginLeft: "auto"
  },
  button: {
    margin: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  gearLink: {
    textDecoration: "none",
    color: "#000"
  }
});
class GearDetails extends Component {
  componentDidMount() {
    this.props.getGear(this.props.match.params.id);
  }
  render() {
    const { classes } = this.props;
    const { gear, isFetchingGear, fetchGearFailure } = this.props;
    if (isFetchingGear) {
      return <p>Fetching posts...</p>;
    } else if (fetchGearFailure) {
      return <p>Failed</p>;
    } else {
      return (
        <div className="root">
          <Grid
            container
            spacing={3}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  title={gear.title}
                  subheader={
                    <Moment format="YYYY/MM/DD">{gear.created_at}</Moment>
                  }
                />
                <CardMedia
                  className={classes.media}
                  image={`${process.env.PUBLIC_URL}/sample.png`}
                />
                <CardActions disableSpacing>
                  <Link
                    to={`/gears/${gear.id}/edit`}
                    className={classes.gearLink}
                  >
                    <Button color="primary" className={classes.button}>
                      編集
                    </Button>
                  </Link>
                  <Button
                    color="secondary"
                    className={classes.button}
                    onClick={() => this.props.deleteGear(gear.id)}
                  >
                    削除
                  </Button>
                  <IconButton
                    aria-label="add to favorites"
                    className={classes.favorites}
                  >
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="shoppingCart">
                    <ShoppingCartIcon />
                  </IconButton>
                </CardActions>
                <CardContent>
                  <Typography paragraph>{gear.content}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}
const mapStateToProps = ({ gear, isFetchingGear, fetchGearFailure }) => ({
  gear,
  isFetchingGear,
  fetchGearFailure
});

const mapDispatchToProps = { getGear, deleteGear };

GearDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(GearDetails);
