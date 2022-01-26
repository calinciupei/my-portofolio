import "@testing-library/jest-dom";
import "@testing-library/react";
import { render } from "@testing-library/react";
import React from "react";
import ConnectHelmet from "../connect-helmet/connect-helmet";
import ConnectApp from "./connect-app";

const dispatchMock = jest.fn();
const resolveMock = jest.fn();

jest.mock("@crew/store", () => jest.fn(() => {}));
jest.mock("../connect-helmet/connect-helmet", () => jest.fn(() => <connect-helmet />));
jest.mock("react-redux", () => {
  const connectMock = jest.fn().mockReturnValue((component) => component);
  const useDispatchMock = () => dispatchMock;

  return { connect: connectMock, useDispatch: useDispatchMock };
});
jest.mock("../../config/routing", () => {
  jest.fn(() => ({
    resolve: resolveMock
  }));
});
jest.mock("@crew/store/store-selectors/routes", () => {
  return {
    getCurrentRoute: jest.fn()
  };
});

const routeStateMock = { currentRoute: "/" };

function renderApp(routerState) {
  const { currentRoute } = routerState;

  return render(<ConnectApp currentRoute={currentRoute} />);
}

describe("connect app component", () => {
  beforeEach(() => {
    ConnectHelmet.mockClear();
    resolveMock.mockReturnValue(undefined);
  });

  it("should render the correct view", () => {
    renderApp(routeStateMock);

    expect(dispatchMock).toHaveBeenCalled();
  });
});
