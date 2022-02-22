import { render, act, screen } from "@testing-library/react";
import React from "react";
import { ProgressLine } from "./progress-line";

import styles from "./progress-line.css";

jest.useFakeTimers();
jest.spyOn(global, "setInterval");

function setup(label = "", delay = null, progress = 0, color = "") {
  return render(<ProgressLine color={color} delay={delay} progress={progress} label={label} />);
}

describe("progress line component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render progress line", () => {
    const component = setup();
    const label = component.getByTestId("progress-line-label");

    expect(label.classList.contains(styles.label)).toBe(true);
  });

  it("should render with no progress", () => {
    const component = setup();
    const progressBar = component.getByTestId("progress-bar");

    expect(progressBar.firstChild.getAttribute("aria-valuenow")).toBe("0");
  });

  it("should render with 50% progress", () => {
    const component = setup("Progress Bar", 1000, 50, "blue");
    const progressBar = component.getByTestId("progress-bar");

    act(() => {
      jest.runAllTimers();
    });

    screen.debug();

    expect(progressBar.getAttribute("data-color")).toEqual("blue");
    expect(progressBar.firstChild.getAttribute("aria-valuenow")).toEqual("50");
  });

  it("should render progress with green", () => {
    const component = setup("Progress Bar", 1000, 50, "green");
    const progressBar = component.getByTestId("progress-bar");

    expect(progressBar.getAttribute("data-color")).toEqual("green");
  });

  it("should render progress with red", () => {
    const component = setup("Progress Bar", 1000, 50, "red");
    const progressBar = component.getByTestId("progress-bar");

    expect(progressBar.getAttribute("data-color")).toEqual("red");
  });
});
