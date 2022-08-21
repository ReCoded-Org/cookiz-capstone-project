import React from "react";
import renderer from "react-test-renderer";

import SearchCities from "./SearchCities";

// eslint-disable-next-line
it("Dashboard Component", () => {
    const tree = renderer.create(<SearchCities />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
