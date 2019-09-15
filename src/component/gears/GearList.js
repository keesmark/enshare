import React, { Component } from "react";
import GearSummary from "./GearSummary";
import { getGears } from "../../store/actions/gearActions";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
});
class GearList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getGears());
  }
  render() {
    const { classes } = this.props;
    const { gears, isFetchingGears, fetchGearsFailure } = this.props;
    if (isFetchingGears) {
      return <p>Fetching gears...</p>;
    } else if (fetchGearsFailure) {
      return <p>Failed to fetch gears...</p>;
    } else if (gears.length) {
      return (
        <div className={classes.root}>
          {gears.map(gear => {
            return <GearSummary gear={gear} key={gear.id} />;
          })}
        </div>
      );
    } else {
      return <div className={classes.root}>No Post</div>;
    }
  }
}

GearList.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { gears, isFetchingGears, fetchGearsFailure } = state;
  return { gears, isFetchingGears, fetchGearsFailure };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(GearList);
