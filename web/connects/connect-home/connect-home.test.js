import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { connect } from "react-redux";
import ConnectHome from "./connect-home";

const dispatchMock = jest.fn();

jest.mock("@crew/store", () => jest.fn(() => {}));
jest.mock("../../config/routing", () => {
  jest.fn(() => {
    resolve: resolveMock;
  });
});
jest.mock("react-redux", () => {
  const connectMock = jest.fn().mockReturnValue((component) => component);
  const useDispatchMock = () => dispatchMock;

  return { connect: connectMock, useDispatch: useDispatchMock };
});

function setup(state) {
  const { currentRoute } = state;

  return render(<ConnectHome currentRoute={currentRoute} />);
}

function setupMapStateToProps(state) {
  const [mapStateToProps] = connect.mock.calls[0];
  setup(state);

  return mapStateToProps(state);
}

describe("connect app component", () => {
  describe("set mapStateToPros", () => {
    const stateMock = {
      currentRoute: "/"
    };

    it("should return the current route", () => {
      const result = setupMapStateToProps(stateMock);

      expect(result).toStrictEqual({});
    });
  });
});
