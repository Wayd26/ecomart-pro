import React from "react";
import { shallow } from "enzyme";
import CartList from "./CartList";

describe("CartList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CartList />);
    expect(wrapper).toMatchSnapshot();
  });
});
