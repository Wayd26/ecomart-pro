import React from "react";
import { shallow } from "enzyme";
import GetInTouchForm from "./GetInTouchForm";

describe("GetInTouchForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GetInTouchForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
