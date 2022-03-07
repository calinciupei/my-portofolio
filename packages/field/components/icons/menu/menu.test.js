import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Menu } from "./menu";
import styles from "./menu.css";

function icon(color) {
  return render(<Menu color={color} />);
}

describe("menu icon", () => {
  it("should have white color", () => {
    const { container } = icon("white");
    const menu = getByTestId(container, "menu-icon");

    expect(menu.classList.contains(styles.menu)).toBe(true);
    expect(menu.classList.contains(styles.white)).toBe(true);
  });
});
