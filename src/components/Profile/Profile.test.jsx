import React from "react";
import renderer from "react-test-renderer";

import Profile from "@/components/Profile/Profile";

// eslint-disable-next-line
it("Dashboard Component", () => {
    const tree = renderer.create(<Profile />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
