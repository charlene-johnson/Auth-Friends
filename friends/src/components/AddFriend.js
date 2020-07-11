import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  FormControl,
  TextField,
  Grid,
  Typography,
  Paper,
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
      height: 390,
      width: 300,
      color: theme.palette.common.purple
  },
  button: {
    ...theme.typography.buttons,
    marginTop: '1em',
    fontSize: "1.5rem"
    
  }
  
}));

export default function AddFriend(props) {
  const classes = useStyles();
  const [addFriend, setAddFriend] = useState({
    name: "",
    age: "",
    email: "",
  });
  const handleChanges = (e) => {
    setAddFriend({
      ...addFriend,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setAddFriend({ name: "", age: "", email: "" });
    axiosWithAuth()
      .post("/api/friends", addFriend)
      .then((res) => {
        setAddFriend(res.data);
        props.history.push("/friendlist")
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Paper elevation={10} className={classes.paper}>
          <Grid item className={classes.formGridItem}>
          <Grid item className={classes.formGridItem}>
            <Typography align='center'
            variant="h3">Add Friend</Typography>
          </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <FormControl
                className={classes.formControl}
                onSubmit={handleSubmit}
              >
                <Grid item container justify="center" alignItems="center"
                direction="column">
                  <Grid item className={classes.formGridItem}>
                    <TextField
                      type="text"
                      name="name"
                      value={addFriend.name}
                      onChange={handleChanges}
                      label="Friend's Name"
                      variant="outlined"
                      color="secondary"
                    />
                  </Grid>
                  <Grid item className={classes.formGridItem}>
                    <TextField
                      type="text"
                      name="age"
                      value={addFriend.age}
                      onChange={handleChanges}
                      label="Friend's Age"
                      variant="outlined"
                      color="secondary"
                    />
                  </Grid>
                  <Grid item className={classes.formGridItem}>
                    <TextField
                      type="text"
                      name="email"
                      value={addFriend.email}
                      onChange={handleChanges}
                      label="Friend's Email"
                      variant="outlined"
                      color="secondary"
                    />
                    <Grid item className={classes.formGridItem} align="center">
                      
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleSubmit}
                        className={classes.button}
                      >
                        Add Friend
                      </Button>
                     
                    </Grid>
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
