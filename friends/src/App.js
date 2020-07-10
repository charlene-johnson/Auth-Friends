import React from "react";
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import Login from "./components/Login";
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';
import Header from '../src/components/ui/Header';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from '../src/components/ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Header/>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path='/friendlist' component={FriendList} />
          <Route component={Login} />
        </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
