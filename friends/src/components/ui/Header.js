import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tab,
  Tabs,
  Typography,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
  },
  logoContainer: {
    padding: 0, 
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginRight: "75px",
  },
}));

export default function Header({loggedIn, setLoggedIn}) {
  const classes = useStyles();

  const [value, setValue] = useState(0);
 

  const handleChange = (e, value) => {
    setValue(value);
  };
  useEffect(() => {
    switch (window.location.pathname) {
      case "/login":
        if (value !== 0) {
          setValue(0);
        }
        break;
      default:
        break;
    }
  }, [value]);
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
              <Button
                component={Link}
                to='/'
                disableRipple
                onClick={() =>setValue(0)}
                className={classes.logoContainer}>
            <Typography variant="h1" style={{ fontFamily: "Pangolin" }}>
              Friends
            </Typography>
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
            >
             {loggedIn ? (
                 <Tab
                className={classes.tab}
                component={Link}
                to="/login"
                label="Logout"
                onClick={() => setLoggedIn(false)}
              /> 
             ):(
                <Tab
                className={classes.tab}
                component={Link}
                to="/login"
                label="Login"
              />  
             )}  
            )}   
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
