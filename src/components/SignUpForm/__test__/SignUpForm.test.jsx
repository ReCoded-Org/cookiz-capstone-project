import renderer from "react-test-renderer";

import SignUpLanding from "../SignUpForm";

// eslint-disable-next-line
it("Create Sign up Landing page Component", () => {
    const tree = renderer.create(<SignUpLanding />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
