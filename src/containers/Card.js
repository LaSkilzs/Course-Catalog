import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CourseCard from "../components/CourseCard";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      marginLeft: 150,
      marginTop: 60
    },
    card: {
      marginBottom: 20
    }
  })
);

function Card() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <CourseCard />
        </Grid>
        <Grid item xs={4}>
          <CourseCard />
        </Grid>
        <Grid item xs={4}>
          <CourseCard />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item md={12} spacing={1} className={classes.card}>
          <FormRow />
        </Grid>
        <Grid container item md={12} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item md={12} spacing={1}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

export default Card;
