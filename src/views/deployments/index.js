import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import { EuiPageContent, EuiPageBody, EuiLoadingSpinner } from "@elastic/eui";

import Title from "./Title";
import Table from "./Table";

class Deployments extends Component {
  /*
    When component mounts, fetch the deployments data from the "API" (i.e. here just a json file)
  */
  componentDidMount() {
    const { initView } = this.props;
    initView();
  }

  render() {
    const { deployments } = this.props;

    /*
      The loading spinner below is debatable, loading from local file shouldn't take much time.
    */
    return (
      <EuiPageBody>
        <Title />
        <EuiPageContent>
          {isEmpty(deployments) ? <EuiLoadingSpinner size="xl" /> : <Table />}
        </EuiPageContent>
      </EuiPageBody>
    );
  }
}

Deployments.propTypes = {
  initView: PropTypes.func.isRequired
};

const mapDispatch = dispatch => ({
  initView: dispatch.deployments.initView
});

const mapState = state => ({
  deployments: state.deployments.deployments
});

export default connect(
  mapState,
  mapDispatch
)(Deployments);
