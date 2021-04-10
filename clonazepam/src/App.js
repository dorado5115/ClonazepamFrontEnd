import './App.css';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createNavigatorFactory, useNavigationBuilder } from '@react-navigation/core';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SignIn from "./components/SignIn"
import LogIn from "./components/LogIn"

import { render } from 'react-dom';

function App() {
  return (
  <Router>

    <nav>
      <ul>
        <li>
          <Link to="/signIn">SignIn</Link>
        </li>
        <li>
          <Link to="/logIn">LogIn</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/signIn">
        <SignIn />
      </Route>
      <Route path="/logIn">
        <LogIn />
      </Route>
    </Switch>
  </Router>
  );
}



export default App;
