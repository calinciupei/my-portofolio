import "@testing-library/jest-dom/extend-expect";
import {
  createPageTitleSelector,
  getPageTitle,
  getPageDescription,
} from "./page";

const stateMock = {
  page: {
    title: "Title",
    description: "Page description",
  },
};

describe("getPageTitle", () => {
  it("should return page title", () => {
    expect(getPageTitle(stateMock)).toEqual(stateMock.page.title);
  });
});

describe("getPageDescription", () => {
  it("should return page description", () => {
    expect(getPageDescription(stateMock)).toEqual(stateMock.page.description);
  });
});

describe("createPageTitleSelector", () => {
  it("should create selector and return title and description", () => {
    const getPageState = createPageTitleSelector();
    const { description, title } = getPageState(stateMock);

    expect(title).toEqual(stateMock.page.title);
    expect(description).toEqual(stateMock.page.description);
  });
});
