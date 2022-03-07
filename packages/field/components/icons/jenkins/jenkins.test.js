import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Jenkins } from "./jenkins";
import styles from "./jenkins.css";

function icon(color) {
  return render(<Jenkins color={color} />);
}

describe("jenkins icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const jenkins = getByTestId(container, "jenkins-icon");

    expect(jenkins.classList.contains(styles.carbon)).toBe(true);
  });
});
