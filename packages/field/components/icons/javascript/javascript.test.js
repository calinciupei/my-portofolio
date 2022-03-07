import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Javascript } from "./javascript";
import styles from "./javascript.css";

function icon(color) {
  return render(<Javascript color={color} />);
}

describe("javascript icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const javascript = getByTestId(container, "javascript-icon");

    expect(javascript.classList.contains(styles.carbon)).toBe(true);
  });
});
