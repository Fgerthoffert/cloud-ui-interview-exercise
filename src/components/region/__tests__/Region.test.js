import React from "react";
import renderer from "react-test-renderer";

import Region from "..";

test("Test the region component", () => {
  const component = renderer.create(<Region regionId={"one-region-id"} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
