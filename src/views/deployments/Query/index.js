import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import { withRouter } from "react-router-dom";

import { EuiText, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

import { addRemoveFromQuery } from "../../../utils/query";

import Badge from "./Badge";

class Query extends Component {
  addRemoveQuery = (valueName, facet) => {
    const { query, history } = this.props;
    const modifiedQuery = addRemoveFromQuery(valueName, facet, query);
    history.push({
      pathname: "/deployments",
      search: "?q=" + encodeURIComponent(JSON.stringify(modifiedQuery)),
      state: { detail: modifiedQuery }
    });
  };

  render() {
    const { query, facets } = this.props;

    if (isEmpty(query)) {
      return null;
    }

    //Build an array of the filters currently in the query
    const activeValues = [];
    for (let facet of facets) {
      for (let value of facet.values) {
        if (query[facet.key] !== undefined) {
          if (facet.type === "text") {
            if (query[facet.key]["$in"].indexOf(value.value) !== -1) {
              activeValues.push({ facet: { ...facet }, value: { ...value } });
            }
          } else if (facet.type === "bool") {
            if (query[facet.key]["$eq"] === value.value) {
              activeValues.push({ facet: { ...facet }, value: { ...value } });
            }
          }
        }
      }
    }

    return (
      <EuiFlexGroup>
        <EuiFlexItem grow={false}>
          <EuiText size="s">Query:</EuiText>{" "}
        </EuiFlexItem>
        {activeValues.map(filter => (
          <EuiFlexItem
            grow={false}
            key={filter.facet.id + filter.value.value}
            style={{ marginLeft: "0px" }}
          >
            <Badge
              value={filter.value}
              facet={filter.facet}
              addRemoveQuery={this.addRemoveQuery}
            />
          </EuiFlexItem>
        ))}
      </EuiFlexGroup>
    );
  }
}

Query.propTypes = {
  query: PropTypes.object.isRequired,
  facets: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

const mapState = state => ({
  query: state.deployments.query,
  facets: state.deployments.facets
});

export default connect(
  mapState,
  null
)(withRouter(Query));
