import React from "react";
import renderer from "react-test-renderer";

import LandingMeals from "./LandingMeals";

// eslint-disable-next-line
it("renders correctly", () => {
    const tree = renderer.create(<LandingMeals />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
