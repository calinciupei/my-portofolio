import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { CircleDot } from "./circle-dot";
import styles from "./circle-dot.css";

function icon() {
  return render(<CircleDot color="carbon" />);
}

describe("circle dot icon", () => {
  it("should have carbon color", () => {
    const { container } = icon();
    const circle = getByTestId(container, "circle-dot");

    expect(circle.classList.contains(styles.carbon)).toBe(true);
  });
});
