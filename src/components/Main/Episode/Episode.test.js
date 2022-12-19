import React from "react";
import { shallow } from "enzyme";
import Episode from "./Episode";

describe("Episode", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Episode />);
    expect(wrapper).toMatchSnapshot();
  });
});
