import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { EuiText } from "@elastic/eui";

class Count extends Component {
  render() {
    const { deploymentsFiltered, deployments } = this.props;
    if (deploymentsFiltered.length === deployments.length) {
      return null;
    }
    return (
      <EuiText size="s">
        Displaying {deploymentsFiltered.length} out of {deployments.length}{" "}
        deployments
      </EuiText>
    );
  }
}

Count.propTypes = {
  deploymentsFiltered: PropTypes.array.isRequired,
  deployments: PropTypes.array.isRequired
};

const mapState = state => ({
  deploymentsFiltered: state.deployments.deploymentsFiltered,
  deployments: state.deployments.deployments
});

export default connect(
  mapState,
  null
)(Count);
