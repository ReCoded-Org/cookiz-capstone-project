import renderer from "react-test-renderer";
import Cards from "../Cards"

it("renders correctly", () => {
    const tree = renderer.create(<Cards />).toJSON();
    expect(tree).toMatchSnapshot();
});