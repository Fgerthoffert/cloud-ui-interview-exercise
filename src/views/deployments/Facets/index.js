import React, { Component } from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { addRemoveFromQuery } from "../../../utils/query";
import TermFacet from "./TermFacet";
import BoolFacet from "./BoolFacet";

class Facets extends Component {
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
    const { facets, query } = this.props;
    return (
      <React.Fragment>
        {facets.map(facet => {
          if (facet.type === "text") {
            return (
              <TermFacet
                facet={facet}
                key={facet.name}
                query={query}
                addRemoveQuery={this.addRemoveQuery}
              />
            );
          } else {
            return (
              <BoolFacet
                facet={facet}
                key={facet.name}
                query={query}
                addRemoveQuery={this.addRemoveQuery}
              />
            );
          }
        })}
      </React.Fragment>
    );
  }
}

Facets.propTypes = {
  initView: PropTypes.func.isRequired,
  updateQuery: PropTypes.func.isRequired,
  query: PropTypes.object.isRequired,
  facets: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

const mapDispatch = dispatch => ({
  initView: dispatch.deployments.initView,
  updateQuery: dispatch.deployments.updateQuery
});

const mapState = state => ({
  facets: state.deployments.facets,
  query: state.deployments.query
});

export default connect(
  mapState,
  mapDispatch
)(withRouter(Facets));
