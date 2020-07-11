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
    margin: "1em",
  },
  textField: {
    width: 250
  },
  paper: {
    padding: "2em",
    height: 390,
    width: 600,
    color: theme.palette.common.darkGreen,
  },
  button: {
    ...theme.typography.buttons,
    marginTop: "1em",
    fontSize: "1.5rem",
  },
}));

export default function AddFriend(props) {
  const classes = useStyles();
  const [addFriend, setAddFriend] = useState({
    name: "",
    race: "",
    weapon: "",
    occupation: "",
  });
  const handleChanges = (e) => {
    setAddFriend({
      ...addFriend,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setAddFriend({ name: "", race: "", weapon: "", occupation: "" });
    axiosWithAuth()
      .post("/api/friends", addFriend)
      .then((res) => {
        setAddFriend(res.data);
        props.history.push("/friendlist");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Paper elevation={10} className={classes.paper}>
          <Grid item className={classes.formGridItem}>
            <Typography align="center" variant="h3">
              Add Friend
            </Typography>
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
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                direction="row"
              >
                <Grid item className={classes.formGridItem}>
                  <TextField
                    type="text"
                    name="name"
                    value={addFriend.name}
                    onChange={handleChanges}
                    label="Friend's Name"
                    variant="outlined"
                    color="secondary"
                    className={classes.textField}
                  />
                </Grid>
                <Grid item className={classes.formGridItem}>
                  <TextField
                    type="text"
                    name="race"
                    value={addFriend.race}
                    onChange={handleChanges}
                    label="Friend's Race"
                    variant="outlined"
                    color="secondary"
                    className={classes.textField}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                direction="row"
              >
                <Grid item className={classes.formGridItem}>
                  <TextField
                    type="text"
                    name="weapon"
                    value={addFriend.weapon}
                    onChange={handleChanges}
                    label="Friend's Favorite Weapon"
                    variant="outlined"
                    color="secondary"
                    className={classes.textField}
                  />
                </Grid>
                <Grid item className={classes.formGridItem}>
                  <TextField
                    type="text"
                    name="occupation"
                    value={addFriend.occupation}
                    onChange={handleChanges}
                    label="Friend's Occupation"
                    variant="outlined"
                    color="secondary"
                    className={classes.textField}
                  />
                </Grid>
              </Grid>
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
            </FormControl>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
