import axios from "axios";
import { get, post } from "./request";

jest.spyOn(global.console, "error").mockImplementation(() => jest.fn());
jest.mock("axios", () => jest.fn());

describe("http-clients request.js", () => {
  beforeEach(() => {
    axios.mockClear();
  });

  describe("get", () => {
    it("should call axios with correct parameters", async () => {
      const jsonMock = jest.fn().mockResolvedValueOnce({});

      axios.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: jsonMock,
      });

      await get("https://test.url/");

      expect(axios).toHaveBeenCalledWith({
        method: "GET",
        url: "https://test.url/",
        headers: {
          "Content-Type": "application/json",
        },
        data: {},
      });
    });
  });

  describe("post", () => {
    it("should call axios with correct parameters", async () => {
      const jsonMock = jest.fn().mockResolvedValueOnce({});

      axios.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: jsonMock,
      });

      await post("https://test.url/");

      expect(axios).toHaveBeenCalledWith({
        method: "POST",
        url: "https://test.url/",
        headers: {
          "Content-Type": "application/json",
        },
        data: {},
      });
    });
  });
});
