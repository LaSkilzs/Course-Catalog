import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CourseCard from "../components/CourseCard";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: 15,
      margin: "auto",
      marginLeft: 100
    },
    card: {
      marginBottom: 20,
      padding: 10
    }
  })
);

const Card = props => {
  const classes = useStyles();
  // console.log(props);

  const card = props.cards.map(card => {
    return (
      <React.Fragment key={card.id}>
        <Grid item xs={4}>
          <CourseCard card={card} key={card.id} />
        </Grid>
      </React.Fragment>
    );
  });

  // console.log(card);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item md={12} spacing={1} className={classes.card}>
          {card}
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
