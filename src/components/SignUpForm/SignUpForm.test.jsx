import React from "react";
import renderer from "react-test-renderer";

import SignUpForm from "./SignUpForm";

// eslint-disable-next-line
it("Dashboard Component", () => {
    const tree = renderer.create(<SignUpForm />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
