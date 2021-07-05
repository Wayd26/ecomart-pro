import React from "react";
import { shallow } from "enzyme";
import CatalogCard from "./CatalogCard";

describe("CatalogCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CatalogCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
