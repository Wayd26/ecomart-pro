import React from "react";
import { shallow } from "enzyme";
import Catalogues from "./Catalogues";

describe("Catalogues", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Catalogues />);
    expect(wrapper).toMatchSnapshot();
  });
});
