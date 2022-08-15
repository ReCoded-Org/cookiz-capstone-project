import React from "react";
import renderer from "react-test-renderer";

import Orders from "../Orders";

// eslint-disable-next-line
it("Navbar Component", () => {
    const tree = renderer.create(<Orders />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
