import React, { Component } from "react";
import PropTypes from "prop-types";

import { EuiPage } from "@elastic/eui";

import Header from "../header";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Header />
        <EuiPage>{children}</EuiPage>
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
