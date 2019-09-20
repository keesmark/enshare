import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    width: 325,
    margin: "10px",
    [theme.breakpoints.only("xs")]: {
      margin: "10px 0"
    }
  },
  cardTitle: {
    width: 250
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  gearLink: {
    textDecoration: "none",
    color: "#000"
  }
}));

const GearSummary = ({ gear }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
  return (
    <div>
      <Card className={classes.card}>
        <Link to={"/gear/" + gear.id} className={classes.gearLink}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            title={
              <Typography noWrap className={classes.cardTitle}>
                {gear.title}
              </Typography>
            }
            subheader={<Moment format="YYYY/MM/DD">{gear.created_at}</Moment>}
          />
          <CardMedia
            className={classes.media}
            image={`${process.env.PUBLIC_URL}/sample.png`}
            title="Paella dish"
          />
        </Link>
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            noWrap
          >
            {gear.content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="shoppingCart">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{gear.content}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default GearSummary;
