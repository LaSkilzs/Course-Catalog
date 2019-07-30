import React from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const CardHeader = props => {
  return (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom variant="h4" component="h4">
          Title
        </Typography>
        <Typography variant="h6" color="textSecondary" component="h6">
          Author
        </Typography>
      </CardContent>
    </React.Fragment>
  );
};

export default CardHeader;
