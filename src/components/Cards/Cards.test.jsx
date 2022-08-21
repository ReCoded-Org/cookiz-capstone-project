import React from "react";
import renderer from "react-test-renderer";

import Cards from "@/components/Cards/Cards";

// eslint-disable-next-line
it("Dashboard Component", () => {
    const tree = renderer.create(<Cards />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
