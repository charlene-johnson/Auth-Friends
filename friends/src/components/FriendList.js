import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Loader from 'react-loader-spinner';
import AddFriend from './AddFriend'

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

export default function FriendList(props) {
    const [friends, setFriends] = useState([])
    
    useEffect(() => {
       const getData = () => {
        axiosWithAuth()
          .get("/api/friends")
          .then((res) => {
              console.log('console here',res.data)
            setFriends(res.data);
          })
          .catch((err) => console.log(err));
       }
       getData();
    })
    return (
        <div>
        {friends.map((friend, key) => {
          return (
            <>
              {props.fetchingData && (
                <div className="key spinner">
                  <Loader type="Puff" color="#204963" height="60" width="60" />
                  <p>Loading Data</p>
                </div>
              )}

              <div className='friends' key={key}>
                <p>Friend's Name: {friend.name}</p>
                <p>Friend's Age: {friend.age}</p>
                <p>Friend's Email: {friend.email}</p>

              </div>
            </>
          );
        })}
        <AddFriend/>
      </div>
    );
}


