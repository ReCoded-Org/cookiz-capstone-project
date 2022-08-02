import React from "react";
import renderer from "react-test-renderer";

import Cards from "../Footer";

// eslint-disable-next-line
it("renders correctly", () => {
    const tree = renderer.create(<Footer />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
