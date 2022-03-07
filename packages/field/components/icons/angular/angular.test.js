import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Angular } from "./angular";
import styles from "./angular.css";

function icon() {
  return render(<Angular color="carbon" />);
}

describe("angular icon", () => {
  it("should have carbon color", () => {
    const { container } = icon();
    const angular = getByTestId(container, "angular-icon");

    expect(angular.classList.contains(styles.carbon)).toBe(true);
  });
});
