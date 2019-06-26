import React, { Component } from "react";

import {
  EuiPageContent,
  EuiTitle,
  EuiPageBody,
  EuiText,
  EuiHorizontalRule
} from "@elastic/eui";

import Layout from "../../components/layout";

class NotFound extends Component {
  render() {
    return (
      <Layout>
        <EuiPageBody>
          <EuiPageContent>
            <EuiTitle size="l">
              <h1>Page not found</h1>
            </EuiTitle>
            <EuiHorizontalRule />

            <EuiText size="s">
              Default &ldquo;404-like&ldquo; page, not styled
            </EuiText>
          </EuiPageContent>
        </EuiPageBody>
      </Layout>
    );
  }
}
export default NotFound;
