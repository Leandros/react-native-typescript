import * as React from "react";
import renderer from "react-test-renderer";
import Hello from "../hello";

it("renders correctly", () => {
  const tree = renderer.create(<Hello name="World" />).toJSON();
  expect(tree).toMatchSnapshot();
});
