import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { EuiToolTip } from "@elastic/eui";

import Region from "../../../components/region";

/*
 This is overkill, just there to illustrate the logic behing the directory structure
*/
class RegionTooltip extends Component {
  countDeployments = () => {
    const { regionId, deployments } = this.props;
    return deployments.filter(dep => dep.regionId === regionId).length;
  };

  render() {
    const { regionId } = this.props;

    return (
      <EuiToolTip
        position="bottom"
        content={
          "There are " + this.countDeployments() + " deployments in " + regionId
        }
      >
        <Region regionId={regionId} />
      </EuiToolTip>
    );
  }
}

RegionTooltip.propTypes = {
  regionId: PropTypes.string.isRequired,
  deployments: PropTypes.array.isRequired
};

const mapState = state => ({
  deployments: state.deployments.deployments
});

export default connect(mapState)(RegionTooltip);
