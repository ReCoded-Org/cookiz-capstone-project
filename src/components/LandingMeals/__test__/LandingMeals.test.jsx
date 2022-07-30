
import renderer from "react-test-renderer";

import LandingMeals from "../LandingMeals";


it("renders correctly", () => {
  const tree = renderer.create(<LandingMeals />).toJSON();
  expect(tree).toMatchSnapshot();
});