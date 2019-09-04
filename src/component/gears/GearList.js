import React from "react";
import GearSummary from "./GearSummary";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
}));
const GearList = ({ gears }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {gears &&
        gears.map(gear => {
          return <GearSummary gear={gear} key={gear.id} />;
        })}
    </div>
  );
};

export default GearList;
