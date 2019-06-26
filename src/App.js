import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/home";
import Deployments from "./views/deployments";
import Deployment from "./views/deployment";
import Account from "./views/account";
import NotFound from "./views/notfound";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/deployments" component={Deployments} />
            <Route exact path="/deployment/:id" component={Deployment} />
            <Route exact path="/account" component={Account} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
