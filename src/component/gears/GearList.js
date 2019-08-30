import React from "react";
import GearSummary from "./GearSummary";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(theme => ({
//   gearSummaryList: {
//     display: flex,
//   }
// }));

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
}));
const GearList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GearSummary />
      <GearSummary />
      <GearSummary />
      <GearSummary />
    </div>
  );
};

export default GearList;
