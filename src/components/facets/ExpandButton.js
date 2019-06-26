import React, { Component } from "react";
import PropTypes from "prop-types";

import { EuiButtonEmpty } from "@elastic/eui";

class ExpandButton extends Component {
  render() {
    const { collapsed, length, onClick } = this.props;
    if (collapsed && length > 5) {
      return (
        <EuiButtonEmpty size="xs" onClick={onClick(false)}>
          more...
        </EuiButtonEmpty>
      );
    } else if (!collapsed && length > 5) {
      return (
        <EuiButtonEmpty size="xs" onClick={onClick(true)}>
          less
        </EuiButtonEmpty>
      );
    } else {
      return null;
    }
  }
}

ExpandButton.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  length: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ExpandButton;
