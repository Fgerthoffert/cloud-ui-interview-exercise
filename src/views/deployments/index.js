import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import { withRouter } from "react-router-dom";

import {
  EuiPageContent,
  EuiPageBody,
  EuiLoadingSpinner,
  EuiPageSideBar
} from "@elastic/eui";

import Count from "./Count";
import Table from "./Table";
import Layout from "../../components/layout";
import Facets from "./Facets";
import Query from "./Query";

class Deployments extends Component {
  /*
    When component mounts, fetch the deployments data from the "API" (i.e. here just a json file)
  */
  componentDidMount() {
    const { initView } = this.props;
    initView();
  }

  componentDidUpdate() {
    const { updateQuery, location } = this.props;
    const params = new URLSearchParams(location.search);
    if (params.get("q") !== null) {
      const queryUrl = decodeURIComponent(params.get("q"));
      updateQuery(JSON.parse(queryUrl));
    } else {
      updateQuery({});
    }
  }

  render() {
    const { deployments } = this.props;

    /*
      The loading spinner below is debatable, loading from local file shouldn't take much time.
    */
    return (
      <Layout>
        <EuiPageSideBar>
          <Facets />
        </EuiPageSideBar>
        <EuiPageBody>
          <EuiPageContent>
            <Query />
            {isEmpty(deployments) ? <EuiLoadingSpinner size="xl" /> : <Table />}
            <Count />
          </EuiPageContent>
        </EuiPageBody>
      </Layout>
    );
  }
}

Deployments.propTypes = {
  initView: PropTypes.func.isRequired,
  updateQuery: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  deployments: PropTypes.array.isRequired
};

const mapDispatch = dispatch => ({
  initView: dispatch.deployments.initView,
  updateQuery: dispatch.deployments.updateQuery
});

const mapState = state => ({
  deployments: state.deployments.deployments
});

export default connect(
  mapState,
  mapDispatch
)(withRouter(Deployments));
