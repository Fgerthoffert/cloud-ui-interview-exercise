import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { EuiHeaderSectionItem, EuiHeaderLink } from "@elastic/eui";

class Header extends Component {
  render() {
    const { path, location, title } = this.props;
    return (
      <EuiHeaderSectionItem border="right">
        <Link to={path}>
          <EuiHeaderLink isActive={path === location.pathname}>
            {title}
          </EuiHeaderLink>
        </Link>
      </EuiHeaderSectionItem>
    );
  }
}

Header.propTypes = {
  path: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default withRouter(Header);
