import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import App from "./App";
import Users from "./users";
import Contact from "./contact";
import Notfound from "./notfound";
import Demographics from "./Demographics";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/demographics" component={Demographics}/>
        <Route path="/contact" component={Contact} />
        <Route path="/users" component={Users} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
