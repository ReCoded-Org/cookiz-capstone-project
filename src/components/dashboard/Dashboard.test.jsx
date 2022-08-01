import React from "react";
import renderer from "react-test-renderer";

import Dashboard from "@/components/dashboard/Dashboard";

// eslint-disable-next-line
it("Dashboard Component", () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
