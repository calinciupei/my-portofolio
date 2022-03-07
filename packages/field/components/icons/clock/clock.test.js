import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Clock } from "./clock";
import styles from "./clock.css";

function icon(color) {
  return render(<Clock color={color} />);
}

describe("clock icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const clock = getByTestId(container, "clock-icon");

    expect(clock.classList.contains(styles.carbon)).toBe(true);
  });

  it("should have grey400 color", () => {
    const { container } = icon("grey400");
    const clock = getByTestId(container, "clock-icon");

    expect(clock.classList.contains(styles.grey400)).toBe(true);
  });
});
