import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { BottomNavigation } from "./bottom-navigation";
import { Icons } from "../icons/icons";
import styles from "./bottom-navigation.css";

const { MenuOpened } = Icons;

const menuClickMock = jest.fn();

jest.mock("../icons/icons", () => ({
  Icons: {
    MenuOpened: jest.fn(() => <menu-opened></menu-opened>),
    MenuOpenedColor: jest.fn(() => <menu-opened></menu-opened>),
    Instagram: jest.fn(() => <menu-opened></menu-opened>),
    InstagramColor: jest.fn(() => ({ Carbon: "" })),
    Github: jest.fn(() => <github-icon></github-icon>),
    GithubColor: jest.fn(() => ({ Carbon: "" })),
    Linkedin: jest.fn(() => <linkedin-icon></linkedin-icon>),
    LinkedinColor: jest.fn(() => ({ Carbon: "" })),
    Twitter: jest.fn(() => <twitter-icon></twitter-icon>),
    TwitterColor: jest.fn(() => ({ Carbon: "" })),
    Menu: jest.fn(() => <menu-icon></menu-icon>),
    MenuColor: jest.fn(() => ({ Carbon: "" }))
  }
}));

function setup() {
  return render(<BottomNavigation onClick={menuClickMock} />);
}

describe("BottomNavigation", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should render component", () => {
    const component = setup();
    const menu = component.getByTestId("bottom-navigation");

    expect(menu).not.toBeNull();
    expect(menu.classList.contains(styles.menu)).toBe(true);
  });

  it("should show close icon", () => {
    const component = setup();
    const button = component.getByTestId("button-navigation");

    fireEvent.click(button);

    expect(MenuOpened).toHaveBeenCalled();
  });
});
