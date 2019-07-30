import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "./CardHeader";

const useStyles = makeStyles(
  createStyles({
    card: {
      maxWidth: "25rem"
    },
    media: {
      height: "15rem"
    }
  })
);

const CourseCard = props => {
  const classes = useStyles();
  // console.log(props);
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardHeader title={props.card.title} author={props.card.author} />
        <CardMedia className={classes.media} image={props.card.image} />
      </CardActionArea>
    </Card>
  );
};

export default CourseCard;
