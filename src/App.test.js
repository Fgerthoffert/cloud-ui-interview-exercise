import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { init } from "@rematch/core";
import { Provider } from "react-redux";

import * as models from "./models/index.data.js";

// generate Redux store
const store = init({
  models
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
