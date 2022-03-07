import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Css } from "./css";
import styles from "./css.css";

function icon() {
  return render(<Css color="carbon" />);
}

describe("css icon", () => {
  it("should have carbon color", () => {
    const { container } = icon();
    const css = getByTestId(container, "css-icon");

    expect(css.classList.contains(styles.carbon)).toBe(true);
  });
});
