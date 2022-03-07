import { getByTestId, render } from "@testing-library/react";
import React from "react";
import { MapMarker } from "./map-marker";
import styles from "./map-marker.css";

function icon(color) {
  return render(<MapMarker color={color} />);
}

describe("map-marker icon", () => {
  it("should have carbon color", () => {
    const { container } = icon("carbon");
    const mapMarker = getByTestId(container, "map-marker-icon");

    expect(mapMarker.classList.contains(styles.carbon)).toBe(true);
  });

  it("should have grey color", () => {
    const { container } = icon("grey400");
    const mapMarker = getByTestId(container, "map-marker-icon");

    expect(mapMarker.classList.contains(styles.grey400)).toBe(true);
  });
});
