import renderer from "react-test-renderer";

import CreateAccountForm from "../CreateAccountForm";

// eslint-disable-next-line
it("Create Account Form Component", () => {
    const tree = renderer.create(<CreateAccountForm />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
