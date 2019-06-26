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
          key={value}
          id={value}
          quantity={count}
          isSelected={selected}
          onClick={() => addRemoveQuery(value, facet)}
          style={{ height: "25px" }}
        >
          {value}
        </EuiFacetButton>
      </React.Fragment>
    );
  }
}
Term.propTypes = {
  value: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  addRemoveQuery: PropTypes.func.isRequired,
  facet: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired
};
export default Term;
