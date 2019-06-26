import React, { Component } from "react";
import PropTypes from "prop-types";

import { EuiBadge } from "@elastic/eui";

class Badge extends Component {
  render() {
    const { facet, value, addRemoveQuery } = this.props;
    return (
      <EuiBadge
        iconType="cross"
        iconSide="right"
        onClick={() => addRemoveQuery(value.value, facet)}
        onClickAriaLabel="Remove from query"
      >
        {facet.name}: {facet.type !== "bool" ? value.value : facet[value.value]}
      </EuiBadge>
    );
  }
}

Badge.propTypes = {
  facet: PropTypes.object.isRequired,
  value: PropTypes.object.isRequired,
  addRemoveQuery: PropTypes.func.isRequired
};

export default Badge;
