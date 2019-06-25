import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  EuiPageBody,
  EuiTitle,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageContent,
  EuiCallOut,
  EuiButton
} from "@elastic/eui";

/*
 This component is displayed when a particular deployment is not found
*/
class NotFound extends Component {
  render() {
    const { deploymentId } = this.props;
    return (
      <EuiPageBody>
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>Deployment not found</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent>
          <EuiCallOut
            title="Deployment not found"
            color="warning"
            iconType="help"
          >
            <p>
              We haven&rsquo;t been able to locate deployment with id:{" "}
              {deploymentId}
            </p>
            <Link to={`/deployments`}>
              <EuiButton color="warning">Your deployments</EuiButton>
            </Link>
          </EuiCallOut>
        </EuiPageContent>
      </EuiPageBody>
    );
  }
}

NotFound.propTypes = {
  deploymentId: PropTypes.string
};

const mapState = state => ({
  deploymentId: state.deployment.deploymentId
});

export default connect(
  mapState,
  null
)(NotFound);
