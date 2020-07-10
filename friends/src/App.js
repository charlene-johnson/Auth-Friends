import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path='/friendlist' component={FriendList} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
