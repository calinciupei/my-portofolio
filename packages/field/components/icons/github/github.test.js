import "@testing-library/jest-dom";
import React from "react";
import { getByTestId, render } from "@testing-library/react";
import { Github } from "./github";
import styles from "./github.css";

function icon() {
  return render(<Github color="carbon" />);
}

describe("github icon", () => {
  it("should render github icon", () => {
    const { container } = icon();
    const github = getByTestId(container, "github-icon");

    expect(github).toHaveClass(styles.icon);
  });
});
