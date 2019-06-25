import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { EuiInMemoryTable, EuiHealth } from "@elastic/eui";

import RegionTooltip from "./RegionTooltip";

class Table extends Component {
  renderHealthStatus(status) {
    const color = status ? "success" : "danger";
    const label = status ? "Healthy" : "Unhealthy";
    return <EuiHealth color={color}>{label}</EuiHealth>;
  }

  renderStoppedStatus(status) {
    const color = !status ? "success" : "danger";
    const label = !status ? "Running" : "Stopped";
    return <EuiHealth color={color}>{label}</EuiHealth>;
  }

  render() {
    const { deployments } = this.props;
    const columns = [
      {
        field: "displayId",
        name: "ID",
        sortable: true,
        truncateText: true,
        width: "80px",
        render: (displayId, item) => (
          <Link to={`/deployment/${item.id}`}>{displayId}</Link>
        )
      },
      {
        field: "displayName",
        name: "Name",
        sortable: true,
        truncateText: true,
        render: (displayName, item) => (
          <Link to={`/deployment/${item.id}`}>{displayName}</Link>
        )
      },
      {
        field: "regionId",
        name: "Region",
        width: "170px",
        sortable: true,
        truncateText: true,
        render: regionId => <RegionTooltip regionId={regionId} />
      },
      {
        field: "isStopped",
        name: "State",
        width: "150px",
        sortable: true,
        render: isStopped => {
          const color = !isStopped ? "success" : "danger";
          const label = !isStopped ? "Running" : "Stopped";
          return <EuiHealth color={color}>{label}</EuiHealth>;
        }
      },
      {
        field: "healthy",
        name: "Health",
        width: "150px",
        sortable: true,
        render: healthy => {
          const color = healthy ? "success" : "danger";
          const label = healthy ? "Healthy" : "Unhealthy";
          return <EuiHealth color={color}>{label}</EuiHealth>;
        }
      }
    ];

    return (
      <React.Fragment>
        <EuiInMemoryTable
          items={deployments}
          columns={columns}
          pagination={true}
          sorting={true}
        />
      </React.Fragment>
    );
  }
}

Table.propTypes = {
  deployments: PropTypes.array.isRequired
};

const mapState = state => ({
  deployments: state.deployments.deployments
});

export default connect(
  mapState,
  null
)(Table);
