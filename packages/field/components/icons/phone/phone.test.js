import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Phone } from "./phone";
import styles from "./phone.css";

function icon(color) {
  return render(<Phone color={color} />);
}

describe("phone icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const phone = getByTestId(container, "phone-icon");

    expect(phone.classList.contains(styles.icon)).toBe(true);
    expect(phone.classList.contains(styles.carbon)).toBe(true);
  });

  it("should have grey color", () => {
    const { container } = icon("grey400");
    const phone = getByTestId(container, "phone-icon");

    expect(phone.classList.contains(styles.grey400)).toBe(true);
  });
});
