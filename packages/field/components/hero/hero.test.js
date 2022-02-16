import React from "react";
import { render } from "@testing-library/react";
import { Hero } from "./hero";

function setup() {
  return render(<Hero />);
}

describe("Hero component", () => {
  it("should call hero component with proper props", () => {
    const wrapper = setup(0);
    const hero = wrapper.getByTestId("hero-section");

    expect(hero).not.toBeNull();
  });

  it("should call hero component with proper props", () => {
    const { container } = setup(100);

    expect(container).not.toBeNull();
  });
});
