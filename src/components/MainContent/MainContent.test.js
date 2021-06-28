import React from "react";
import { shallow } from "enzyme";
import MainContent from "./MainContent";

describe("MainContent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MainContent />);
    expect(wrapper).toMatchSnapshot();
  });
});
