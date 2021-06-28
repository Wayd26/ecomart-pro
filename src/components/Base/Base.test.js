import React from "react";
import { shallow } from "enzyme";
import Base from "./Base";

describe("Base", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Base />);
    expect(wrapper).toMatchSnapshot();
  });
});
