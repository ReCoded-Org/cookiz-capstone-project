import React from "react";
import renderer from "react-test-renderer";

import Navbar from "@/components/navbar/Navbar";

// eslint-disable-next-line
it("Navbar Component", () => {
    const tree = renderer.create(<Navbar />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
