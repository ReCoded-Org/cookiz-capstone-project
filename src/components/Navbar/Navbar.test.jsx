import React from "react";
import renderer from "react-test-renderer";

import Navbar from "@/components/Navbar/Navbar";

// eslint-disable-next-line
it("Navbar Component", () => {
    const tree = renderer.create(<Navbar />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
