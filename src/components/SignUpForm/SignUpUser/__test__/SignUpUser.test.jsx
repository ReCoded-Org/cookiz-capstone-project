import renderer from "react-test-renderer";

import SignUpUserForm from "../SignUpUser";

// eslint-disable-next-line
it("Create Sign up User Form Component", () => {
    const tree = renderer.create(<SignUpUserForm />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
