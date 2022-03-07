import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Facebook } from "./facebook";
import styles from "./facebook.css";

function icon(color) {
  return render(<Facebook color={color} />);
}

describe("facebook icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const facebook = getByTestId(container, "facebook-icon");

    expect(facebook.classList.contains(styles.carbon)).toBe(true);
  });

  it("should have grey color", () => {
    const { container } = icon("grey400");
    const facebook = getByTestId(container, "facebook-icon");

    expect(facebook.classList.contains(styles.grey400)).toBe(true);
  });
});
