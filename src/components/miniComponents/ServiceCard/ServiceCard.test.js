import React from "react";
import { shallow } from "enzyme";
import ServiceCard from "./ServiceCard";

describe("ServiceCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ServiceCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
