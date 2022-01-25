import { createStore } from "redux";
import sagaMiddleware from "redux-saga";
import target from "./index";

jest.mock("redux", () => ({
  createStore: jest.fn(() => "store"),
  applyMiddleware: jest.fn((...args) => args),
}));

jest.mock("redux-saga", () => {
  const saga = jest.fn();

  return {
    __esModule: true,
    default: jest.fn(() => ({
      run: saga,
    })),
  };
});

jest.mock("./middleware/root-saga", () => "root-saga");
jest.mock("./reducers", () => "reducers");

describe("create store", () => {
  it("has default options", () => {
    const saga = sagaMiddleware();

    target();

    expect(createStore).toHaveBeenCalledWith("reducers", {}, [saga]);
  });

  it("should set and merge middlewares", () => {
    const saga = sagaMiddleware();

    target({
      middlewares: ["mid1", "mid2"],
    });

    expect(createStore).toHaveBeenCalledWith("reducers", {}, [
      "mid1",
      "mid2",
      saga,
    ]);
  });

  it("will enhance reducers for debugging", () => {
    const saga = sagaMiddleware();
    const compose = jest.fn(() => "storeEnhancers");
    const options = { compose };

    target(options);

    expect(compose).toHaveBeenCalledWith([saga]);
    expect(createStore).toHaveBeenCalledWith("reducers", {}, "storeEnhancers");
  });
});
