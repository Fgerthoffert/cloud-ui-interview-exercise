import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import { init } from "@rematch/core";
import { Provider } from "react-redux";

import NotFound from "../NotFound";
import * as models from "../../../models";

const store = init({
  models
});

// Since we are loading a single file, initializing the store here is probably fine,
// we'd want to mock that data up though if we were calling an API
test("Requested deployment does not exist", () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
