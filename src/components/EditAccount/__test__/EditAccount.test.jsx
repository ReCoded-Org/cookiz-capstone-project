import renderer from "react-test-renderer";

import EditAccount from "../EditAccount";

// eslint-disable-next-line
it("Edit Account Component", () => {
    const tree = renderer.create(<EditAccount />).toJSON();
    // eslint-disable-next-line
    expect(tree).toMatchSnapshot();
});
