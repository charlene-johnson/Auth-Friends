import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import Kitty from "../img/kitteh.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formGridItem: {
    margin: ".5em",
  },
  logoContainer: {
    padding: 0,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));
export default function Welcome() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item className={classes.formGridItem}>
          <Typography variant="h1">Welcome To The Friend App!</Typography>
        </Grid>
        <Button
          component={Link}
          to="/friendlist"
          disableRipple
          className={classes.logoContainer}
        >
          <img src={Kitty} alt="My drawn Picture" className={classes.pic} />
        </Button>
        <Typography variant="subtitle1">
          Click the Picture to go to Login, or go to the Friend List if you're
          already logged in
        </Typography>
      </Grid>
    </>
  );
}
