import React from "react";
import "./CSS/styles.css";
import Login from "./components/login";
import Signup from './components/signup';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/signup" component={Signup} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
