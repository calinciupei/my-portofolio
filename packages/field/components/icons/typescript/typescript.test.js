import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Typescript } from "./typescript";
import styles from "./typescript.css";

function icon(color) {
  return render(<Typescript color={color} />);
}

describe("typescript icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const typescript = getByTestId(container, "typescript-icon");

    expect(typescript.classList.contains(styles.icon)).toBe(true);
    expect(typescript.classList.contains(styles.carbon)).toBe(true);
  });
});
