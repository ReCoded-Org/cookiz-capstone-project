import renderer from "react-test-renderer";

import SignUpChefForm from "../SignUpChef";

// eslint-disable-next-line
it("Create Sign up Chef Form Component", () => {
    const tree = renderer.create(<SignUpChefForm />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
