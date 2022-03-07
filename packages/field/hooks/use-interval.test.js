import { act, renderHook } from "@testing-library/react-hooks";
import { useInterval, noop } from "./use-interval";

describe("useInterval", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should be defined", () => {
    expect(useInterval).toBeDefined();
  });

  describe("useInterval hook when called with callback and delay", () => {
    let callbackMock = jest.fn();

    beforeAll(() => {
      renderHook(() => useInterval(callbackMock, 1000));
    });

    it("should return initial delay", () => {
      act(() => {
        jest.advanceTimersByTime(1000);
      });

      expect(callbackMock).toHaveBeenCalled();
    });
  });

  describe("noop method", () => {
    it("should return undefined", () => {
      const noopMock = noop();

      expect(noopMock).toEqual(undefined);
    });
  });
});
