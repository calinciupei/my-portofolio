import "@testing-library/jest-dom/extend-expect";
import { getCurrentRoute } from "./routes";

describe("getCurrentRoute", () => {
  it("should return the current route", () => {
    const currentRoute = "/current-route";
    const state = { router: { currentRoute } };
    expect(getCurrentRoute(state)).toBe(currentRoute);
  });
});
