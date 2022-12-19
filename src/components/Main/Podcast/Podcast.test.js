import React from "react";
import { shallow } from "enzyme";
import Podcast from "./Podcast";

describe("Podcast", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Podcast />);
    expect(wrapper).toMatchSnapshot();
  });
});
