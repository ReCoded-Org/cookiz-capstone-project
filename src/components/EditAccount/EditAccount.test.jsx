import React from "react";
import renderer from "react-test-renderer";

import EditAccount from "./EditAccount";

// eslint-disable-next-line
it("Dashboard Component", () => {
    const tree = renderer.create(<EditAccount />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
