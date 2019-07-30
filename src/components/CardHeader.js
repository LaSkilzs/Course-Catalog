import React from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const CardHeader = props => {
  return (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h4">
          {props.title}
        </Typography>
        <Typography variant="h6" color="textSecondary" component="h6">
          {props.author}
        </Typography>
      </CardContent>
    </React.Fragment>
  );
};

export default CardHeader;
