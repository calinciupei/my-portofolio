import "@testing-library/jest-dom/extend-expect";
import { createNavigationStateSelector, getNavigationState } from "./menu-navigation";

const stateMock = {
  layout: {
    menuNavigation: {
      isOpen: false,
    },
  },
};

describe("getNavigationState", () => {
  it("should return modal state", () => {
    expect(getNavigationState(stateMock)).toEqual(false);
  });
});

describe("createNavigationStateSelector", () => {
  it("should return null", () => {
    const getNavigationState = createNavigationStateSelector();
    const { isOpen } = getNavigationState(stateMock);

    expect(isOpen).toEqual(false);
  });
});
