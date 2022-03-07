import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { MenuOpened } from "./menu-opened";
import styles from "./menu-opened.css";

function icon(color) {
  return render(<MenuOpened color={color} />);
}

describe("menu-opened icon", () => {
  it("should have white color", () => {
    const { container } = icon("white");
    const menuOpened = getByTestId(container, "menu-opened-icon");

    expect(menuOpened.classList.contains(styles.menuOpened)).toBe(true);
    expect(menuOpened.classList.contains(styles.white)).toBe(true);
  });
});
