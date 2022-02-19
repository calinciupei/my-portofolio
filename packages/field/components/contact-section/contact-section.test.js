import { fireEvent, getByText, render } from "@testing-library/react";
import React from "react";
import { ContactSection } from "./contact-section";

import styles from "./contact-section.css";

jest.mock("dompurify", () => ({
  sanitize: (purified) => purified
}));

const mockOnClick = jest.fn();
const mockProps = {
  title: "title",
  salute: "salute",
  text: "text",
  label: "label",
  onClick: mockOnClick
};

function setup(mockProps) {
  const props = { ...mockProps };

  return render(<ContactSection {...props} />);
}

describe("contact section component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should show title", () => {
    const { container } = setup(mockProps);

    const hesitate = getByText(container, "title");
    const hi = getByText(container, "salute");

    expect(hesitate.className).toEqual(styles.hesitate);
    expect(hi.className).toEqual(styles.hi);
  });

  it("should show text", () => {
    const { container } = setup(mockProps);
    const text = getByText(container, "text");

    expect(text.parentElement.className).toEqual(styles.item);
  });

  it("should call click", () => {
    const { container } = setup(mockProps);
    const button = getByText(container, "label").parentElement;

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
