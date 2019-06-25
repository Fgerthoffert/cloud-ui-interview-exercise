import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { EuiPageHeader, EuiPageHeaderSection, EuiTitle } from "@elastic/eui";

/*
 Displays the page title, this is an example of narrow-focused component aimed at taking a redux props and displaying it
*/
class Title extends Component {
  render() {
    const { deployments } = this.props;
    return (
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size="l">
            <h1>
              Deployments
              {deployments.length && (
                <React.Fragment> ({deployments.length})</React.Fragment>
              )}
            </h1>
          </EuiTitle>
        </EuiPageHeaderSection>
      </EuiPageHeader>
    );
  }
}

Title.propTypes = {
  deployments: PropTypes.array.isRequired
};

const mapState = state => ({
  deployments: state.deployments.deployments
});

export default connect(
  mapState,
  null
)(Title);
