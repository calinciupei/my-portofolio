import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Sass } from "./sass";
import styles from "./sass.css";

function icon(color) {
  return render(<Sass color={color} />);
}

describe("sass icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const sass = getByTestId(container, "sass-icon");

    expect(sass.classList.contains(styles.icon)).toBe(true);
    expect(sass.classList.contains(styles.carbon)).toBe(true);
  });
});
