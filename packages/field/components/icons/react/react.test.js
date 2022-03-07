import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { ReactIcon } from "./react";
import styles from "./react.css";

function icon(color) {
  return render(<ReactIcon color={color} />);
}

describe("react icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const react = getByTestId(container, "react-icon");

    expect(react.classList.contains(styles.icon)).toBe(true);
    expect(react.classList.contains(styles.carbon)).toBe(true);
  });
});
