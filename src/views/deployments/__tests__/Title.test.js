import React, { Component } from "react";
import renderer from "react-test-renderer";

import { init } from "@rematch/core";
import { Provider } from "react-redux";

import * as models from "../../../models";
import Title from "../Title";

const store = init({
  models
});

test("Test the view title", () => {
  const component = renderer.create(
    <Provider store={store}>
      <Title />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
