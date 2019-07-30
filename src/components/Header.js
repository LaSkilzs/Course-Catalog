import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 30,
    marginLeft: 30,
    marginBottom: 25
  }
}));
const Header = () => {
  const classes = useStyles();
  return (
    <Typography variant="h2" component="h2" className={classes.root}>
      <Box letterSpacing={1}> Course Catalog</Box>
    </Typography>
  );
};

export default Header;
