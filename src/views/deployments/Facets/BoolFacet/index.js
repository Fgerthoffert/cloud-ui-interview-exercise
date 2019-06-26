import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  EuiTitle,
  EuiFacetGroup,
  EuiPageContent,
  EuiSpacer
} from "@elastic/eui";

import Term from "./Term";

class BoolFacet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  collapseFacet = value => () => {
    this.setState({ collapsed: value });
  };

  render() {
    const { facet, query, addRemoveQuery } = this.props;
    const { collapsed } = this.state;
    let facetsData = facet.values.sort((a, b) => b.count - a.count);
    if (collapsed) {
      facetsData = facet.values.slice(0, 5);
    }

    let selectedValue = "";
    if (query[facet.key] !== undefined) {
      selectedValue = query[facet.key]["$eq"];
    }
    return (
      <React.Fragment>
        <EuiPageContent style={{ padding: "10px" }}>
          <EuiTitle size="xs">
            <h4>{facet.name}</h4>
          </EuiTitle>
          <EuiFacetGroup style={{ maxWidth: 200 }}>
            {facetsData.map(term => (
              <Term
                key={term.value}
                addRemoveQuery={addRemoveQuery}
                facet={facet}
                selected={selectedValue === term.value}
                {...term}
              />
            ))}
          </EuiFacetGroup>
        </EuiPageContent>
        <EuiSpacer size="m" />
      </React.Fragment>
    );
  }
}

BoolFacet.propTypes = {
  facet: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired,
  addRemoveQuery: PropTypes.func.isRequired
};

export default BoolFacet;
