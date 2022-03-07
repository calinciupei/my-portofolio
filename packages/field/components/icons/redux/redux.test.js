import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Redux } from "./redux";
import styles from "./redux.css";

function icon(color) {
  return render(<Redux color={color} />);
}

describe("redux icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const redux = getByTestId(container, "redux-icon");

    expect(redux.classList.contains(styles.icon)).toBe(true);
    expect(redux.classList.contains(styles.carbon)).toBe(true);
  });
});
