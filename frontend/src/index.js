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
import Userinfo from "./Userinfo";
import LoginScreen from "./LoginScreen";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/userinfo" component={Userinfo}/>
        <Route path="/contact" component={Contact} />
        <Route path="/users" component={Users} />
        <Route path="/login" component={LoginScreen} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
