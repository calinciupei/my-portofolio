import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Linkedin } from "./linkedin";
import styles from "./linkedin.css";

function icon(color) {
  return render(<Linkedin color={color} />);
}

describe("linkedin icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const linkedin = getByTestId(container, "linkedin-icon");

    expect(linkedin.classList.contains(styles.carbon)).toBe(true);
  });

  it("should have grey color", () => {
    const { container } = icon("grey400");
    const linkedin = getByTestId(container, "linkedin-icon");

    expect(linkedin.classList.contains(styles.grey400)).toBe(true);
  });
});
