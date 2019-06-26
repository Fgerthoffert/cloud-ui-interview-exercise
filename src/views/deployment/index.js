import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import {
  EuiPageContent,
  EuiTitle,
  EuiPageBody,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiHorizontalRule,
  EuiIcon,
  EuiToolTip,
  EuiLoadingSpinner
} from "@elastic/eui";

import NotFound from "./NotFound";
import Region from "../../components/region";
import Layout from "../../components/layout";

class Deployment extends Component {
  /*
    When component mounts, fetch the data about a single deployment from the "API" (i.e. here just a json file).
    If the deployment doesn't exit (which could happen if the page was bookmarked), display an error with a button to link back to deployments
  */
  componentDidMount() {
    const { initView, match } = this.props;
    if (match.params.id !== undefined) {
      initView(match.params.id);
    }
  }

  render() {
    const { deployment } = this.props;

    if (deployment === undefined) {
      return (
        <Layout>
          <NotFound />
        </Layout>
      );
    }

    /*
      If the deployment object is empty, consider data is currently loading and display a spinner
    */
    if (isEmpty(deployment)) {
      return (
        <Layout>
          <EuiPageBody>
            <EuiPageContent>
              <EuiLoadingSpinner size="xl" />
            </EuiPageContent>
          </EuiPageBody>
        </Layout>
      );
    }

    /*
      If the view was more to be complex, it will be broken down in multiple component, each accessing their own props through redux
    */
    return (
      <Layout>
        <EuiPageBody>
          <EuiPageContent>
            <EuiText size="s">{deployment.displayId}</EuiText>
            <EuiFlexGroup
              gutterSize="m"
              alignItems="center"
              justifyContent="spaceBetween"
              direction="row"
            >
              <EuiFlexItem grow={false}>
                <EuiTitle size="l">
                  <h1>{deployment.displayName}</h1>
                </EuiTitle>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                {deployment.healthy ? (
                  <EuiToolTip
                    position="bottom"
                    content="Your deployment is healthy"
                  >
                    <EuiIcon
                      type="checkInCircleFilled"
                      color="secondary"
                      size="xl"
                    />
                  </EuiToolTip>
                ) : (
                  <EuiToolTip
                    position="bottom"
                    content="Your deployment is unhealthy"
                  >
                    <EuiIcon
                      type="crossInACircleFilled"
                      color="danger"
                      size="xl"
                    />
                  </EuiToolTip>
                )}
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiHorizontalRule />
            <EuiFlexGroup>
              <EuiFlexItem grow={false}>
                <EuiText size="s">Region: </EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <Region regionId={deployment.regionId} />
              </EuiFlexItem>
            </EuiFlexGroup>

            <EuiText size="s">
              More layout elements displaying details about the deployment
            </EuiText>
          </EuiPageContent>
        </EuiPageBody>
      </Layout>
    );
  }
}

Deployment.propTypes = {
  initView: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  deployment: PropTypes.object
};

const mapDispatch = dispatch => ({
  initView: dispatch.deployment.initView
});

const mapState = state => ({
  deployment: state.deployment.deployment
});

export default connect(
  mapState,
  mapDispatch
)(Deployment);
