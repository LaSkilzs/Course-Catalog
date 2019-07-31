import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import {
  createStyles,
  makeStyles,
  createMuiTheme
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "./CardHeader";

const useStyles = makeStyles(
  createStyles({
    card: {
      maxWidth: "25rem",
      height: "25rem"
    },
    media: {
      height: "15rem"
    }
  })
);

const theme = createMuiTheme({
  overrides: {
    MuiCardMedia: {
      root: {
        backgroundSize: "contain",
        width: "14rem",
        margin: "auto"
      }
    }
  }
});

const CourseCard = props => {
  const classes = useStyles();
  // console.log(props);
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardHeader title={props.card.title} author={props.card.author} />
        <ThemeProvider theme={theme}>
          <CardMedia className={classes.media} image={props.card.image} />
        </ThemeProvider>
      </CardActionArea>
    </Card>
  );
};

export default CourseCard;
