import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Graphql } from "./graphql";
import styles from "./graphql.css";

function icon() {
  return render(<Graphql color="carbon" />);
}

describe("graphql icon", () => {
  it("should have carbon color", () => {
    const { container } = icon();
    const graphql = getByTestId(container, "graphql-icon");

    expect(graphql.classList.contains(styles.carbon)).toBe(true);
  });
});
