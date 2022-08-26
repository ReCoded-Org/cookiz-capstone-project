import renderer from "react-test-renderer";

import AddMeal from "../AddMeal";

// eslint-disable-next-line no-undef
it("renders correctly", () => {
    const tree = renderer.create(<AddMeal />).toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
});
