import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Firebase } from "./firebase";
import styles from "./firebase.css";

function icon(color) {
  return render(<Firebase color={color} />);
}

describe("firebase icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const firebase = getByTestId(container, "firebase-icon");

    expect(firebase.classList.contains(styles.carbon)).toBe(true);
  });
});
