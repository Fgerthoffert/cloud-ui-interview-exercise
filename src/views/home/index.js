import React, { Component } from "react";
import { Redirect } from "react-router-dom";

/*
 Since we don't have a "homepage", automatically re-route requests to the deployments url
*/
class Index extends Component {
  render() {
    return <Redirect to="/deployments" />;
  }
}
export default Index;
