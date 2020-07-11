import React, {useState} from "react";
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import Welcome from './components/Welcome'
import Login from "./components/Login";
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend'
import PrivateRoute from './components/PrivateRoute';
import Header from '../src/components/ui/Header';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from '../src/components/ui/Theme';
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Switch>
          <Route exact path ='/' component={Welcome}/>
          <Route exact path="/login">
            <Login setLoggedIn={setLoggedIn}/>
          </Route>
          <PrivateRoute exact path='/friendlist' component={FriendList} />
          <PrivateRoute exact path='/addfriend' component={AddFriend}/>
        </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
