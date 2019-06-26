import React, { Component } from "react";
import PropTypes from "prop-types";

import { EuiFacetButton } from "@elastic/eui";

class Term extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  render() {
    const { value, count, addRemoveQuery, facet, selected } = this.props;
    return (
      <React.Fragment>
        <EuiFacetButton
          key={facet.type !== "bool" ? value : value.toString()}
          id={facet.type !== "bool" ? value : value.toString()}
          quantity={count}
          isSelected={selected}
          onClick={() => addRemoveQuery(value, facet)}
          style={{ height: "25px" }}
        >
          {facet[value]}
        </EuiFacetButton>
      </React.Fragment>
    );
  }
}

Term.propTypes = {
  value: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  addRemoveQuery: PropTypes.func.isRequired,
  facet: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired
};

export default Term;
