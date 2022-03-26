import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { CircleFull } from "./circle";
import styles from "./circle.css";

function icon() {
  return render(<CircleFull color="carbon" />);
}

describe("", () => {
  it("should have carbon color", () => {
    const { container } = icon();
    const circle = getByTestId(container, "circle-full");

    expect(circle.classList.contains(styles.carbon)).toBe(true);
  });
});
