import React, { Component } from "react";
import PropTypes from "prop-types";

import { EuiIcon, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

/*
 This is likely overkill, but this acts as an illustration of a shared component
*/
class Region extends Component {
  render() {
    const { regionId } = this.props;

    return (
      <EuiFlexGroup>
        <EuiFlexItem grow={false} style={{ marginRight: "0px" }}>
          <EuiIcon type="globe" />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>{regionId}</EuiFlexItem>
      </EuiFlexGroup>
    );
  }
}

Region.propTypes = {
  regionId: PropTypes.string.isRequired
};

export default Region;
