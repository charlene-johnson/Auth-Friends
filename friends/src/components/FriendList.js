import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Loader from 'react-loader-spinner';

class FriendList extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        this.setState({ friends: res.data });
        this.setState({ SuccessMsg: res.statusText });
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        {this.state.friends.map((friend) => {
          return (
            <>
              {this.props.fetchingData && (
                <div className="key spinner">
                  <Loader type="Puff" color="#204963" height="60" width="60" />
                  <p>Loading Data</p>
                </div>
              )}

              <div>
                <p>Friend's Name: {friend.name}</p>
                <p>Friend's Age: {friend.age}</p>
                <p>Friend's Email: {friend.email}</p>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}

export default FriendList;
