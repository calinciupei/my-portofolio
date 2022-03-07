import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Html5 } from "./html5";
import styles from "./html5.css";

function icon() {
  return render(<Html5 color="carbon" />);
}

describe("html5 icon", () => {
  it("should have carbon color", () => {
    const { container } = icon();
    const html5 = getByTestId(container, "html5-icon");

    expect(html5.classList.contains(styles.carbon)).toBe(true);
  });
});
