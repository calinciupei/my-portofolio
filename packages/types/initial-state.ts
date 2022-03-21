import { Layout } from "./layout-state";

export type PageState = {
  title: string;
  description: string;
};

export type RouterState = {
  currentRoute: string;
  page?: PageState | null;
  path: string;
  hash?: string;
};

export type InitialState = {
  router: RouterState;
  page: PageState;
  layout: Layout;
};
