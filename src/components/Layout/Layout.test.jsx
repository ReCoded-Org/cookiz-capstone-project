import React from "react";
import renderer from "react-test-renderer";

import Layout from "./Layout";

// eslint-disable-next-line
it("Dashboard Component", () => {
    const tree = renderer.create(<Layout />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
