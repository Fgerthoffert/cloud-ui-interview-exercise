import React, { Component } from "react";

import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderLogo,
  EuiHeaderSectionItem
} from "@elastic/eui";

import Menus from "./Menus";

class Header extends Component {
  render() {
    const menus = [
      { path: "/deployments", title: "Deployments", key: "dep" },
      { path: "/account", title: "Account", key: "acc" }
    ];

    return (
      <EuiHeader>
        <EuiHeaderSection grow={true}>
          <EuiHeaderSectionItem border="right">
            <EuiHeaderLogo href="/" iconType={"logoElastic"} />
          </EuiHeaderSectionItem>
          {menus.map(menu => (
            <Menus key={menu.key} {...menu} />
          ))}
        </EuiHeaderSection>
      </EuiHeader>
    );
  }
}

export default Header;
