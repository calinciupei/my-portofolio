import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Node } from "./node";
import styles from "./node.css";

function icon(color) {
  return render(<Node color={color} />);
}

describe("node icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const node = getByTestId(container, "node-icon");

    expect(node.classList.contains(styles.icon)).toBe(true);
    expect(node.classList.contains(styles.carbon)).toBe(true);
  });
});
