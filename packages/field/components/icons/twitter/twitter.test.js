import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Twitter } from "./twitter";
import styles from "./twitter.css";

function icon(color) {
  return render(<Twitter color={color} />);
}

describe("twitter icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const twitter = getByTestId(container, "twitter-icon");

    expect(twitter.classList.contains(styles.icon)).toBe(true);
    expect(twitter.classList.contains(styles.carbon)).toBe(true);
  });

  it("should have grey color", () => {
    const { container } = icon("grey400");
    const twitter = getByTestId(container, "twitter-icon");

    expect(twitter.classList.contains(styles.grey400)).toBe(true);
  });
});
