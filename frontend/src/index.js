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
import Questionnaire from "./screens/Questionnaire";
import Notfound from "./screens/notfound";
import Userinfo from "./screens/Userinfo";
import LoginScreen from "./screens/LoginScreen";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/userinfo" component={Userinfo}/>
        <Route path="/questionnaire" component={Questionnaire}/>
        <Route path="/login" component={LoginScreen} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
