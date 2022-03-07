import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { At } from "./at";
import styles from "./at.css";

function icon(color) {
  return render(<At color={color} />);
}

describe("at icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const at = getByTestId(container, "at-icon");

    expect(at.classList.contains(styles.carbon)).toBe(true);
  });

  it("should have gray color", () => {
    const { container } = icon("grey400");
    const at = getByTestId(container, "at-icon");

    expect(at.classList.contains(styles.grey400)).toBe(true);
  });
});
