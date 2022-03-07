import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { Express } from "./express";
import styles from "./express.css";

function icon() {
  return render(<Express color="carbon" />);
}

describe("express icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const express = getByTestId(container, "express-icon");

    expect(express.classList.contains(styles.carbon)).toBe(true);
  });
});
