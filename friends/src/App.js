import React from "react";
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import Login from "./components/Login";
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend'
import PrivateRoute from './components/PrivateRoute';
import Header from '../src/components/ui/Header';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from '../src/components/ui/Theme';
import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Header/>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path='/friendlist' component={FriendList} />
          <PrivateRoute exact path='/addfriend' component={AddFriend}/>
          <Route component={Login} />
        </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
