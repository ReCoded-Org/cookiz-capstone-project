import React from "react";
import renderer from "react-test-renderer";

import Hero from "@/components/hero/Hero";
// eslint-disable-next-line
it("Hero Component", () => {
    const tree = renderer.create(<Hero />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
