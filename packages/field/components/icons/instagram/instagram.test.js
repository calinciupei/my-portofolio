import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Instagram } from "./instagram";
import styles from "./instagram.css";

function icon(color) {
  return render(<Instagram color={color} />);
}

describe("instagram icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const instagram = getByTestId(container, "instagram-icon");

    expect(instagram.classList.contains(styles.carbon)).toBe(true);
  });

  it("should have grey color", () => {
    const { container } = icon("grey400");
    const instagram = getByTestId(container, "instagram-icon");

    expect(instagram.classList.contains(styles.grey400)).toBe(true);
  });
});
