import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Lock } from "./lock";
import styles from "./lock.css";

function icon() {
  return render(<Lock />);
}

describe("lock icon", () => {
  it("should have carbon color", () => {
    const { container } = icon();
    const lock = getByTestId(container, "lock-icon");

    expect(lock.classList.contains(styles.lock)).toBe(true);
  });
});
