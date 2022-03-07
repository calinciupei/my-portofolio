import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Chevron } from "./chevron";
import styles from "./chevron.css";

function icon(color, type = "") {
  return render(<Chevron color={color} type={type} />);
}

describe("chevron icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const chevron = getByTestId(container, "chevron-icon");

    expect(chevron.classList.contains(styles.carbon)).toBe(true);
  });

  it("should have white color", () => {
    const { container } = icon("white");
    const chevron = getByTestId(container, "chevron-icon");

    expect(chevron.classList.contains(styles.white)).toBe(true);
  });

  it("should have grey400 color", () => {
    const { container } = icon("grey400");
    const chevron = getByTestId(container, "chevron-icon");

    expect(chevron.classList.contains(styles.grey400)).toBe(true);
  });

  it("should point down", () => {
    const { container } = icon("carbon", "down");
    const chevron = getByTestId(container, "chevron-icon");

    expect(chevron.classList.contains(styles.down)).toBe(true);
  });
});
