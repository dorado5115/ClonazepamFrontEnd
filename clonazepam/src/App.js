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

import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn"

function App() {
  return (
  <Router>
    <section class="">
    <nav>
      <ul>
        <li>
          <Link to="/signUp">SignUp</Link>
        </li>
        <li>
          <Link to="/logIn">LogIn</Link>
        </li>
      </ul>
    </nav>
    </section>
    <Switch>
      <Route path="/signUp">
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
