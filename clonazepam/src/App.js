import './App.css';

import { LogIn, SignUp, Home, Analytics } from "./components"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';


function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/signUp">
        <SignUp />
      </Route>
      <Route exact path="/logIn">
        <LogIn />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/navbar">
        <Home />
      </Route>
      <Route exact={true} path="/analytics">
        <Analytics />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;