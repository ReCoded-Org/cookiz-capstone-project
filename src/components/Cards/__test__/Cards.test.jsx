import React from "react";
import renderer from "react-test-renderer";

import Cards from "../Cards";

// eslint-disable-next-line
it("renders correctly", () => {
    const tree = renderer.create(<Cards />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
