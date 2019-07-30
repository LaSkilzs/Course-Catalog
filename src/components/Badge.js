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
      margin: theme.spacing(),
      fontSize: "1rem",
      background: "black",
      color: "white"
    }
  })
);

const Badge = props => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      {props.badges.map(badge => {
        return (
          <Chip
            key={badge.id}
            label={badge.name + "   |   " + badge.number}
            className={classes.chip}
            onClick={() => props.handleBadgeClick(badge.name)}
            // onClick={() => console.log(badge.name)}
          />
        );
      })}
    </Paper>
  );
};

export default Badge;
