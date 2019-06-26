import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  EuiPageContent,
  EuiTitle,
  EuiPageBody,
  EuiText,
  EuiHorizontalRule,
  EuiPageSideBar,
  EuiSpacer
} from "@elastic/eui";

import Layout from "../../components/layout";

class Account extends Component {
  render() {
    return (
      <Layout>
        <EuiPageSideBar>
          <Link to="#">Sub-section 1 (not impl.)</Link>
          <EuiSpacer />
          <Link to="#">Sub-section 1 (not impl.)</Link>
        </EuiPageSideBar>
        <EuiPageBody>
          <EuiPageContent>
            <EuiTitle size="l">
              <h1>Account</h1>
            </EuiTitle>
            <EuiHorizontalRule />
            <EuiText size="s">This page has not been implemented</EuiText>
          </EuiPageContent>
        </EuiPageBody>
      </Layout>
    );
  }
}
export default Account;
