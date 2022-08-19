import renderer from "react-test-renderer";

import SignUpForm from "../SignUpForm";

// eslint-disable-next-line
it("Create Account Form Component", () => {
    const tree = renderer.create(<SignUpForm />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
