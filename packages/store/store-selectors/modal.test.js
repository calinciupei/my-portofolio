import "@testing-library/jest-dom/extend-expect";
import {
  createModalSelector,
  getModalOpenState,
  getModalTitleState,
} from "./modal";

const stateMock = {
  layout: {
    modal: {
      isOpen: false,
      title: "Modal Title",
    },
  },
};

describe("getModalOpenState", () => {
  it("should return modal state", () => {
    expect(getModalOpenState(stateMock)).toEqual(false);
  });
});

describe("getModalTitleState", () => {
  it("should return modal title", () => {
    expect(getModalTitleState(stateMock)).toEqual("Modal Title");
  });
});

describe("createModalSelector", () => {
  it("should return null", () => {
    const getModalState = createModalSelector();
    const { isOpen, title } = getModalState(stateMock);

    expect(isOpen).toEqual(false);
    expect(title).toEqual("Modal Title");
  });
});
