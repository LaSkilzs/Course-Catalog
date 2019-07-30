import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

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

const Badge = props => {
  const classes = useStyles();
  console.log(props);
  return (
    <Paper className={classes.root}>
      {props.badges.map(badge => {
        return (
          <Chip
            key={badge.id}
            label={badge.name + "   |   " + badge.number}
            className={classes.chip}
          />
        );
      })}
    </Paper>
  );
};

export default Badge;
