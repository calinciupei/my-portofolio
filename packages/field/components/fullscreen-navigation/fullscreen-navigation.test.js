import { render } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { FullScreenNavigation } from "./fullscreen-navigation";
import styles from "./fullscreen-navigation.css";

const mockMenu = [
  {
    href: "#about",
    label: "About",
    target: "_self"
  },
  {
    href: "#experience",
    label: "Experience",
    target: "_self"
  },
  {
    href: "#contact",
    label: "Contact",
    target: "_self"
  },
  {
    href: "/resume",
    label: "Resume",
    target: "_self"
  }
];

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

function setup(props) {
  const { isOpened, menuList } = props;
  return render(<FullScreenNavigation isOpened={isOpened} menuList={menuList} />);
}

describe("fullscreen-navigation-component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should hide navigation", () => {
    const component = setup({ isOpened: true, menuList: [] });
    const menu = component.getByTestId("fullscreen-navigation");

    expect(menu.classList.contains(styles.menu)).toBe(true);
  });

  it("should show render menu", () => {
    const component = setup({ isOpened: true, menuList: mockMenu });
    const list = component.getAllByTestId("menu-item");

    expect(list).toHaveLength(4);
  });

  describe("use effect", () => {
    it("should show navigation", () => {
      const { container } = setup({ isOpened: false, menuList: [] });

      act(() => {
        jest.runAllTimers();
      });

      expect(setTimeout).toHaveBeenCalled();
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 900);
      expect(container.children).toHaveLength(0);
    });
  });
});
