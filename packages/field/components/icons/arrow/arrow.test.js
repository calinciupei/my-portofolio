import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Arrow } from "./arrow";
import styles from "./arrow.css";

function icon() {
  return render(<Arrow color="carbon" />);
}

describe("arrow icon", () => {
  it("should have carbon color", () => {
    const { container } = icon();
    const arrow = getByTestId(container, "arrow-icon");

    expect(arrow.classList.contains(styles.arrow)).toBe(true);
  });
});
