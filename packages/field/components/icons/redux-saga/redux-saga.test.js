import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { ReduxSaga } from "./redux-saga";
import styles from "./redux-saga.css";

function icon(color) {
  return render(<ReduxSaga color={color} />);
}

describe("redux-saga icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const reduxSaga = getByTestId(container, "redux-sage-icon");

    expect(reduxSaga.classList.contains(styles.icon)).toBe(true);
    expect(reduxSaga.classList.contains(styles.carbon)).toBe(true);
  });
});
