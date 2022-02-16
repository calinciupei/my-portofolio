import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import React from "react";
import { connect } from "react-redux";
import ConnectApp from "./connect-app";
import { BottomNavigation, FullScreenNavigation } from "@crew/field";
import { act } from "react-dom/test-utils";

const mockDispatch = jest.fn();

jest.mock("../../config/routing", () => {
  return jest.fn(() => ({
    resolve: jest.fn().mockImplementation(() => Promise.resolve())
  }));
});

jest.mock("@crew/store", () => jest.fn(() => {}));
jest.mock("@crew/field", () => ({
  FullScreenNavigation: jest.fn(() => <full-screen-navigation />),
  BottomNavigation: jest.fn(() => <bottom-navigation-mock data-testid="nav"></bottom-navigation-mock>),
  Stylist: jest.fn(({ children }) => <sty-list>{children}</sty-list>)
}));
jest.mock("../connect-helmet/connect-helmet", () => jest.fn(() => <connect-helmet />));
jest.mock("react-redux", () => {
  const connectMock = jest.fn().mockReturnValue((component) => component);
  const useDispatchMock = () => mockDispatch;

  return { connect: connectMock, useDispatch: useDispatchMock };
});

function renderApp(stateMock) {
  const {
    router: { currentRoute }
  } = stateMock;

  return render(<ConnectApp currentRoute={currentRoute} />);
}

function setMapStateToProps(mockData) {
  renderApp(mockData);

  const [mapStateToProps] = connect.mock.calls[0];

  return mapStateToProps(mockData);
}

describe("connect app component", () => {
  beforeEach(() => {});

  const stateMock = {
    router: {
      currentRoute: "/fake"
    }
  };

  describe("set mapStateToProps", () => {
    it("should dispatch PUSH", () => {
      setMapStateToProps({ ...stateMock, router: { currentRoute: "" } });

      expect(mockDispatch).toHaveBeenCalled();
    });

    it("should return state with current route", () => {
      const result = setMapStateToProps(stateMock);

      expect(result).toStrictEqual({
        bottomNavigation: {
          github: "https://github.com/calinciupei",
          instagram: "",
          linkedin: "",
          twitter: ""
        },
        currentRoute: "/fake"
      });
    });

    it("should create bottom navigation", () => {
      renderApp(stateMock);

      expect(BottomNavigation).toHaveBeenCalled();
    });
  });

  describe("should handle menu click", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("should change state of menu", async () => {
      await waitFor(() => renderApp(stateMock));

      const nav = BottomNavigation.mock.calls[0][0];
      act(() => {
        nav.onClick();
      });

      expect(FullScreenNavigation).toHaveBeenCalled();
    });
  });
});
