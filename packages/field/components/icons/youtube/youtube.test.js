import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Youtube } from "./youtube";
import styles from "./youtube.css";

function icon(color) {
  return render(<Youtube color={color} />);
}

describe("youtube icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const youtube = getByTestId(container, "youtube-icon");

    expect(youtube.classList.contains(styles.icon)).toBe(true);
    expect(youtube.classList.contains(styles.carbon)).toBe(true);
  });

  it("should have grey color", () => {
    const { container } = icon("grey400");
    const youtube = getByTestId(container, "youtube-icon");

    expect(youtube.classList.contains(styles.grey400)).toBe(true);
  });
});
