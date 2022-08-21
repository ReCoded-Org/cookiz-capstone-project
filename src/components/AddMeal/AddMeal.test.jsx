import React from "react";
import renderer from "react-test-renderer";

import AddMeal from "@/components/AddMeal/AddMeal";

// eslint-disable-next-line
it("Dashboard Component", () => {
    const tree = renderer.create(<AddMeal />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
