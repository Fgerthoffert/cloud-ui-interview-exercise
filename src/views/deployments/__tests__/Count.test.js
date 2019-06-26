import React, { Component } from "react";
import renderer from "react-test-renderer";

import { init } from "@rematch/core";
import { Provider } from "react-redux";

import * as models from "../../../models";
import Count from "../Count";

const store = init({
  models
});

test("Test the view title", () => {
  const component = renderer.create(
    <Provider store={store}>
      <Count />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
