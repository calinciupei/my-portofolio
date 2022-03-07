import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Jest } from "./jest";
import styles from "./jest.css";

function icon(color) {
  return render(<Jest color={color} />);
}

describe("jest icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const jest = getByTestId(container, "jest-icon");

    expect(jest.classList.contains(styles.carbon)).toBe(true);
  });
});
