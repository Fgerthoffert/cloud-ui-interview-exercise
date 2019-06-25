import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Home from "./views/home";
import Deployments from "./views/deployments";
import Deployment from "./views/deployment";

import {
  EuiPage,
  EuiPageSideBar,
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderLogo,
  EuiHeaderSectionItem,
  EuiSpacer
} from "@elastic/eui";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <EuiHeader>
            <EuiHeaderSection grow={true}>
              <EuiHeaderSectionItem border="right">
                <EuiHeaderLogo href="#" iconType={"logoElastic"} />
              </EuiHeaderSectionItem>
            </EuiHeaderSection>
          </EuiHeader>
          <EuiPage>
            <EuiPageSideBar>
              <Link to="/">Home</Link>
              <EuiSpacer />
              <Link to="/deployments">Deployments</Link>
            </EuiPageSideBar>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/deployments" component={Deployments} />
              <Route exact path="/deployment/:id" component={Deployment} />
            </Switch>
          </EuiPage>
        </div>
      </Router>
    );
  }
}

export default App;
