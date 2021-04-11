import './App.css';

import { LogIn, SignUp, Home, Analytics } from "./components"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
  <Router>
    {/* <section class="">
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
    </section> */}
    <Switch>
      <Route path="/signUp">
        <SignUp />
      </Route>
      <Route path="/logIn">
        <LogIn />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/analytics">
        <Analytics />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;