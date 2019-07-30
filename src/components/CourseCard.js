import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "./CardHeader";

const useStyles = makeStyles(
  createStyles({
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    }
  })
);

const CourseCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardHeader />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
        />
      </CardActionArea>
    </Card>
  );
};

export default CourseCard;
