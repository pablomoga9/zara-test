import React from "react";
import { shallow } from "enzyme";
import Play from "./Play";

describe("Play", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Play />);
    expect(wrapper).toMatchSnapshot();
  });
});
