import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

const chipData = [
  "Angular",
  "jQuery",
  "Polymer",
  "React",
  "Vue.js",
  "HandleBars",
  "Flux",
  "Redux",
  "Flutter"
];

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      marginLeft: 100,
      marginRight: 100
    },
    chip: {
      margin: theme.spacing()
    }
  })
);

const Badge = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {chipData.map((data, idx) => {
        return <Chip key={idx} label={data} className={classes.chip} />;
      })}
    </Paper>
  );
};

export default Badge;
