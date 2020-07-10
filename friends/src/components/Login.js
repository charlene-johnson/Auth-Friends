import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  FormControl,
  TextField,
  Grid,
  Typography,
  Paper
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  formGridItem: {
    margin: ".5em",
  },
  paper: {
      padding: '2em',
      height: 250,
      color: theme.palette.common.purple
  },
  
}));

export default function Login(props) {
  const classes = useStyles();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        window.localStorage.setItem("token", res.data.payload);
        props.history.push("/friendlist");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
         <Paper
            elevation={10}
            className={classes.paper}
            > 
        <Grid item className={classes.formGridItem}>
          <Typography align="center" variant="h3">Sign In</Typography>
        </Grid>
        
        <Grid item className={classes.formGridItem}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <FormControl className={classes.formControl} onSubmit={login}>
              <Grid item container justify="center" alignItems="center">
                <Grid item className={classes.formGridItem}>
                  <TextField
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChanges}
                    label="Username"
                    variant="outlined"
                    color="secondary"
                    
                  />
                </Grid>
                <Grid item className={classes.formGridItem}>
                  <TextField
                    type="password"
                    name="password"
                    color="secondary"
                    value={credentials.password}
                    onChange={handleChanges}
                    label="Password"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid item className={classes.formGridItem} align="center">
                <Button variant="contained" color="secondary" onClick={login}>
                  Login
                </Button>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
        </Paper>
      </Grid>
    </>
  );
}
