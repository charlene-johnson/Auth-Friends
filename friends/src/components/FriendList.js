import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { Button, Grid, Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// class FriendList extends React.Component {
//   state = {
//     friends: [],
//   };

//   componentDidMount() {
//     this.getData();
//   }
//   getData = () => {
//     axiosWithAuth()
//       .get("/api/friends")
//       .then((res) => {
//         this.setState({ friends: res.data });
//       })
//       .catch((err) => console.log(err));
//   };
//   render() {
//     return (
//       <div>
//         {this.state.friends.map((friend) => {
//           return (
//             <>
//               {this.props.fetchingData && (
//                 <div className="key spinner">
//                   <Loader type="Puff" color="#204963" height="60" width="60" />
//                   <p>Loading Data</p>
//                 </div>
//               )}

//               <div>
//                 <p>Friend's Name: {friend.name}</p>
//                 <p>Friend's Age: {friend.age}</p>
//                 <p>Friend's Email: {friend.email}</p>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     );
//   }
// }

// Changed class component into a function component!

const useStyles = makeStyles((theme) => ({
  formGridItem: {
    margin: ".5em",
  },
  button: {
    ...theme.typography.buttons,
    fontSize: "1.5rem",
    marginTop: "1em",
  },
  heading: {
    color: theme.palette.common.orange,
  },
  root: {
    minWidth: 500,
    height: 150,
  },
}));

export default function FriendList(props) {
  const [friends, setFriends] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const getData = () => {
      axiosWithAuth()
        .get("/api/friends")
        .then((res) => {
          console.log("console here", res.data);
          setFriends(res.data);
        })
        .catch((err) => console.log(err));
    };
    getData();
  });
  return (
    <>
      <Typography variant="h3" align="center" className={classes.heading}>
        Friends List
      </Typography>
      <Grid container direction="row" justify="center" alignItems="center">
        {friends.map((friend, key) => {
          return (
            <>
              {props.fetchingData && (
                <div className="key spinner">
                  <Loader type="Puff" color="#DEFCE0" height="60" width="60" />
                  <p>Loading Data</p>
                </div>
              )}
              <Grid item className={classes.formGridItem}>
                <Card className={classes.root}>
                  <CardContent>
                    <div className="friends" key={key}>
                      <Typography variant="h4"> {friend.name}</Typography>
                      <Typography variant="subtitle1">
                        Friend's Age: {friend.age}
                      </Typography>
                      <Typography variant="subtitle1">
                        Friend's Email: {friend.email}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
      <Link to={"/addfriend"} style={{ textDecoration: "none" }}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Add Friend
          </Button>
        </Grid>
      </Link>
    </>
  );
}
